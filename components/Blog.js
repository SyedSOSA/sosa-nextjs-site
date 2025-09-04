import posts from '../data/blog.json';
import Link from 'next/link';

export default function Blog(){
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Career Insights & UAE Market Trends</h2>
        <p className="mt-3 text-center text-gray-600">Actionable advice for job seekers across India & UAE.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map(p => (
            <div key={p.slug} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{p.excerpt}</p>
              <Link className="mt-4 inline-block text-indigo-600 font-semibold" href={`/blog/${p.slug}`}>Read more →</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}