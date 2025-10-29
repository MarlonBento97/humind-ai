const StagingBadge = () => {
  const env = import.meta.env.VITE_ENV || import.meta.env.MODE;
  if (env !== "staging") return null;
  return (
    <div
      style={{
        position: "fixed",
        top: 10,
        right: 10,
        zIndex: 9999,
        padding: "6px 10px",
        borderRadius: 8,
        background: "#7c3aed",
        color: "white",
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: 0.5,
        boxShadow: "0 6px 20px rgba(124,58,237,0.35)",
      }}
      aria-label="Staging Environment"
    >
      STAGING
    </div>
  );
};

export default StagingBadge;

