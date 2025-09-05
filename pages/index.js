import Link from "next/link";

export default function Home() {
  return (
    <div className="grid gap-6">
      <section className="card">
        <h1 className="text-3xl font-bold mb-2">Welcome to SOSA</h1>
        <p className="text-gray-700">Jobs, Recruiters and Business Setup resources for the UAE.</p>
        <div className="mt-6 flex gap-3">
          <Link className="btn btn-primary" href="/recruiters">View Recruiters</Link>
          <Link className="btn" href="/business-setup">Business Setup</Link>
        </div>
      </section>
      <section className="grid md:grid-cols-3 gap-4">
        <div className="card"><h3 className="font-semibold">Recruiters</h3><p>Verified recruitment partners across UAE.</p></div>
        <div className="card"><h3 className="font-semibold">Business Setup</h3><p>Freezone/Mainland company formation support.</p></div>
        <div className="card"><h3 className="font-semibold">Community</h3><p>Connect with peers and mentors.</p></div>
      </section>
    </div>
  );
}
