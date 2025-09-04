import posts from '../../data/blog.json';
import Link from 'next/link';

export default function BlogPost({ post }){
  if(!post) return <div className="mx-auto max-w-3xl p-6">Post not found.</div>;
  return (
    <div className="mx-auto max-w-3xl p-6">
      <Link href="/" className="text-indigo-600 font-semibold">← Back</Link>
      <h1 className="mt-4 text-3xl font-extrabold">{post.title}</h1>
      <p className="mt-3 text-gray-700 whitespace-pre-line">{post.content}</p>
    </div>
  );
}

export async function getStaticPaths(){
  const paths = posts.map(p => ({ params: { slug: p.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }){
  const post = posts.find(p => p.slug === params.slug) || null;
  return { props: { post } };
}