import { useEffect, useRef } from "react";

declare global {
  interface Window {
    THREE: any;
  }
}

const Globe3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !window.THREE) return;

    const THREE = window.THREE;
    const container = containerRef.current;

    // Setup scene, camera, renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 3.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    container.appendChild(renderer.domElement);

    // Textures
    const loader = new THREE.TextureLoader();
    loader.crossOrigin = "";

    const colorMapUrl = "/images/globo-textura.jpg";
    const logoUrl = "/images/logo.png";

    const colorMap = loader.load(colorMapUrl);

    // Globe
    const geometry = new THREE.SphereBufferGeometry(1, 256, 256);

    const materialOptions = {
      map: colorMap,
      metalness: 0.0,
      roughness: 0.7,
    };

    const material = new THREE.MeshStandardMaterial(materialOptions);
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Ring
    const RING_INNER_RADIUS = 1.276;
    const RING_OUTER_RADIUS = 1.284;
    const RING_SEGMENTS = 256;

    const ringGeometry = new THREE.RingGeometry(
      RING_INNER_RADIUS,
      RING_OUTER_RADIUS,
      RING_SEGMENTS
    );

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x00b7ff,
      transparent: true,
      opacity: 0.95,
      side: THREE.DoubleSide,
    });

    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.set(
      THREE.MathUtils.degToRad(105),
      6.7,
      THREE.MathUtils.degToRad(-10)
    );
    scene.add(ring);

    // Ring glow
    const ringGlowGeometry = new THREE.RingGeometry(
      RING_INNER_RADIUS * 0.995,
      RING_OUTER_RADIUS * 1.02,
      RING_SEGMENTS
    );

    const ringGlowMaterial = new THREE.MeshBasicMaterial({
      color: 0x00b7ff,
      transparent: true,
      opacity: 0.25,
      side: THREE.DoubleSide,
    });

    const ringGlow = new THREE.Mesh(ringGlowGeometry, ringGlowMaterial);
    ringGlow.rotation.copy(ring.rotation);
    scene.add(ringGlow);

    // Orbit dot
    const dotGeometry = new THREE.SphereBufferGeometry(0.002, 16, 16);
    const dotMaterial = new THREE.MeshBasicMaterial({
      color: 0x00b7ff,
      emissive: 0x00b7ff,
      emissiveIntensity: 1.4,
    });

    const orbitDot = new THREE.Mesh(dotGeometry, dotMaterial);
    scene.add(orbitDot);

    let orbitAngle = 0;
    const DOT_RADIUS = (RING_INNER_RADIUS + RING_OUTER_RADIUS) / 2;

    // Trail particles
    const TRAIL_PARTICLES = 1650;
    const trailPositions = new Float32Array(TRAIL_PARTICLES * 3);
    const trailVelocities = new Float32Array(TRAIL_PARTICLES * 3);
    const trailLifetimes = new Float32Array(TRAIL_PARTICLES);
    const trailColors = new Float32Array(TRAIL_PARTICLES * 3);

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(trailPositions, 3)
    );
    particlesGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(trailColors, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.006,
      transparent: true,
      opacity: 1.5,
      vertexColors: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const trailParticles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(trailParticles);

    let nextParticleIndex = 0;

    // Lights
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.1);
    keyLight.position.set(5, 3, 5);
    scene.add(keyLight);

    const fill = new THREE.AmbientLight(0xffffff, 0.25);
    scene.add(fill);

    const rim = new THREE.PointLight(0x88aaff, 0.6);
    rim.position.set(-5, -3, -4);
    scene.add(rim);

    // Logo sprite
    loader.load(logoUrl, (logoTex) => {
      const spriteMat = new THREE.SpriteMaterial({
        map: logoTex,
        transparent: true,
      });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.scale.set(2.5, 2.5, 1);
      sprite.position.set(0.0, 0.0, 1.30);
      scene.add(sprite);
    });

    // Mouse controls
    let isPointerDown = false;
    let lastX = 0;
    let lastY = 0;
    let rotY = 0;
    let rotX = 0;

    const handlePointerDown = (e: PointerEvent) => {
      isPointerDown = true;
      lastX = e.clientX;
      lastY = e.clientY;
      renderer.domElement.style.cursor = "grabbing";
    };

    const handlePointerUp = () => {
      isPointerDown = false;
      renderer.domElement.style.cursor = "auto";
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isPointerDown) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      rotY += dx * 0.002;
      rotX += dy * 0.002;
    };

    renderer.domElement.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointermove", handlePointerMove);

    // Animation loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      globe.rotation.y += 0.002;

      globe.rotation.y += rotY * 0.02;
      globe.rotation.x = Math.max(
        -0.8,
        Math.min(0.8, globe.rotation.x + rotX * 0.02)
      );
      rotY *= 0.92;
      rotX *= 0.92;

      orbitAngle += 0.02;

      const localPos = new THREE.Vector3(
        DOT_RADIUS * Math.cos(orbitAngle),
        DOT_RADIUS * Math.sin(orbitAngle),
        0
      );
      const worldPos = ring.localToWorld(localPos.clone());
      orbitDot.position.copy(worldPos);

      // Spawn particles
      const spawnPerFrame = 50;
      for (let s = 0; s < spawnPerFrame; s++) {
        const i = nextParticleIndex;

        trailPositions[i * 3] = worldPos.x + (Math.random() - 0.5) * 0.02;
        trailPositions[i * 3 + 1] = worldPos.y + (Math.random() - 0.5) * 0.02;
        trailPositions[i * 3 + 2] = worldPos.z + (Math.random() - 0.5) * 0.02;

        const dir = new THREE.Vector3(
          Math.random() - 0.5,
          Math.random() - 0.5,
          Math.random() - 0.5
        ).normalize();

        const speed = 0.004 + Math.random() * 0.008;
        trailVelocities[i * 3] = dir.x * speed;
        trailVelocities[i * 3 + 1] = dir.y * speed;
        trailVelocities[i * 3 + 2] = dir.z * speed;

        trailLifetimes[i] = 1.0;

        nextParticleIndex = (nextParticleIndex + 1) % TRAIL_PARTICLES;
      }

      // Update particles
      for (let i = 0; i < TRAIL_PARTICLES; i++) {
        const life = trailLifetimes[i];

        if (life > 0) {
          trailPositions[i * 3] += trailVelocities[i * 3];
          trailPositions[i * 3 + 1] += trailVelocities[i * 3 + 1];
          trailPositions[i * 3 + 2] += trailVelocities[i * 3 + 2];

          trailVelocities[i * 3] *= 0.97;
          trailVelocities[i * 3 + 1] *= 0.97;
          trailVelocities[i * 3 + 2] *= 0.97;

          trailLifetimes[i] -= 0.025;
          const t = Math.max(trailLifetimes[i], 0);

          const g = (183 / 255) * t;
          const b = 1.0 * t;

          trailColors[i * 3] = 0.0;
          trailColors[i * 3 + 1] = g;
          trailColors[i * 3 + 2] = b;
        } else {
          trailColors[i * 3] = 0;
          trailColors[i * 3 + 1] = 0;
          trailColors[i * 3 + 2] = 0;
        }
      }

      particlesGeometry.attributes.position.needsUpdate = true;
      particlesGeometry.attributes.color.needsUpdate = true;

      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      renderer.domElement.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointermove", handlePointerMove);
      container.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      ringGlowGeometry.dispose();
      ringGlowMaterial.dispose();
      dotGeometry.dispose();
      dotMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-[400px] md:h-[500px] lg:h-[600px]"
      style={{ cursor: "auto" }}
    />
  );
};

export default Globe3D;
