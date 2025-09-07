import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
export default function RecruitersSection() {
  const { data: session, status } = useSession();
  if (status === "loading") return <p>Loading...</p>;
  if (!session) {
    return (
      <div className="border rounded p-6 bg-white">
        <h3 className="text-lg font-semibold mb-2">Recruiter details are locked</h3>
        <p className="mb-4">Please sign up or sign in to view recruiter contact details.</p>
        <div className="flex gap-3">
          <button onClick={() => signIn()} className="bg-blue-600 text-white px-4 py-2 rounded">
            Sign Up / Sign In
          </button>
          <Link href="/signin"><a className="px-4 py-2 border rounded">Sign in options</a></Link>
        </div>
      </div>
    );
  }
  const recruiters = [
    { id: 1, name: "Rohit Kumar", company: "TechCorp", title: "Hiring Manager", email: "rohit@techcorp.com" },
    { id: 2, name: "Deepa Sharma", company: "InnovateX", title: "Senior Recruiter", email: "deepa@innovatex.com" },
  ];
  return (
    <div className="space-y-4">
      {recruiters.map(r => (
        <div key={r.id} className="bg-white p-4 border rounded shadow-sm">
          <h4 className="font-semibold">{r.name} — <span className="text-sm text-gray-600">{r.title}</span></h4>
          <p className="text-sm text-gray-700">{r.company}</p>
          <p className="text-sm text-gray-800 mt-2">Email: <a className="text-blue-600" href={`mailto:${r.email}`}>{r.email}</a></p>
        </div>
      ))}
    </div>
  );
}