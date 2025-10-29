import { useParams, Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { posts } from "@/content/posts";

const Post = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    return (
      <main className="min-h-screen">
        <section className="py-24">
          <div className="container mx-auto px-4">
            <p className="text-muted-foreground">Artigo não encontrado.</p>
            <Link to="/blog" className="text-primary">Voltar ao Blog</Link>
          </div>
        </section>
      </main>
    );
  }
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Blog", item: "/blog" },
        { "@type": "ListItem", position: 2, name: post.title, item: `/blog/${post.slug}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      datePublished: post.date,
      description: post.excerpt,
      mainEntityOfPage: { "@type": "WebPage", "@id": `/blog/${post.slug}` },
    },
  ];
  return (
    <main className="min-h-screen">
      <SEOHead
        title={`${post.title} | humind.ia`}
        description={post.excerpt}
        url={`/blog/${post.slug}`}
        schema={schema}
      />
      <section className="py-24">
        <div className="container mx-auto px-4 prose prose-invert">
          <p className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString("pt-BR")}</p>
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          <p><Link to="/blog" className="text-primary">← Voltar</Link></p>
        </div>
      </section>
    </main>
  );
};

export default Post;
