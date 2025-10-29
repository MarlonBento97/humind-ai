import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { posts } from "@/content/posts";

const Blog = () => {
  return (
    <main className="min-h-screen">
      <SEOHead
        title="Blog | humind.ia"
        description="Artigos sobre atendimento com IA e WhatsApp que geram resultados."
        url="/blog"
        schema={[{
          "@context":"https://schema.org",
          "@type":"Blog",
          name:"Blog humind.ia",
          url:"/blog"
        }]}
      />
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
          <p className="text-muted-foreground max-w-2xl mb-10">Guias práticos e insights para elevar seu atendimento.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((p) => (
              <article key={p.slug} className="p-6 rounded-xl border border-border bg-card" style={{boxShadow:'var(--shadow-card)'}}>
                <div className="text-xs text-muted-foreground mb-2">{new Date(p.date).toLocaleDateString("pt-BR")}</div>
                <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
                <p className="text-sm text-muted-foreground mb-4">{p.excerpt}</p>
                <Link to={`/blog/${p.slug}`} className="text-primary text-sm">Ler mais</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
