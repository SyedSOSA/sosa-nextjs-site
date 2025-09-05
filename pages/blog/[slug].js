import { getAllSlugs, getPostBySlug } from "../../lib/posts";

export default function BlogPost({ post }) {
  if (!post) return <div className="card">Post not found.</div>;
  return (
    <article className="prose max-w-none card">
      <h1>{post.title}</h1>
      <p className="text-sm text-gray-500">{post.date}</p>
      <p className="mt-4">{post.content}</p>
    </article>
  );
}

export async function getStaticPaths() {
  const slugs = getAllSlugs();
  return { paths: slugs.map(slug => ({ params: { slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug) || null;
  return { props: { post } };
}