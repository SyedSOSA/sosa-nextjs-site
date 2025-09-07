import Layout from "../components/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-4">SOSA Consulting — Recruiters</h1>
        <p className="mb-6">Welcome to SOSA — find top recruiters here.</p>
        <div className="bg-white shadow rounded p-6">
          <h2 className="text-xl font-semibold mb-2">Recruiters</h2>
          <p className="mb-4">Recruiter profiles are shown only after signup/login.</p>
          <Link href="/recruiters">
            <a className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              View Recruiters
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}