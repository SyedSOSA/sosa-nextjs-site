import Link from "next/link";
export default function Home() {
  return (
    <div className="grid gap-6">
      <section className="card">
        <h1 className="text-3xl font-bold mb-2">Welcome to SOSA</h1>
        <p className="text-gray-700">Coaching, hiring support, and business setup for professionals and companies.</p>
        <div className="mt-6 flex gap-3 flex-wrap">
          <Link className="btn btn-primary" href="/services">Explore Services</Link>
          <Link className="btn" href="/recruiters">View Recruiters</Link>
          <Link className="btn" href="/business-setup">Business Setup</Link>
        </div>
      </section>
    </div>
  );
}