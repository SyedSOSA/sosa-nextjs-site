import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useUser } from "@supabase/auth-helpers-react";

const recruiters = [
  { id: 1, name: "Alpha Talent Search", email: "contact@alphatalent.com", location: "Dubai, UAE" },
  { id: 2, name: "Gulf HR Partners", email: "hello@gulfhrpartners.ae", location: "Abu Dhabi, UAE" }
];

export default function Recruiters() {
  const user = useUser();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Recruiter Directory</h1>
      <p className="mb-6 text-sm text-gray-600">Signed in as {user?.email}</p>
      <div className="grid md:grid-cols-2 gap-4">
        {recruiters.map(item => (
          <div key={item.id} className="card">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-600">{item.location}</p>
            <p className="mt-2 text-sm">{item.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const supabase = createServerSupabaseClient(ctx);
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    return { redirect: { destination: "/auth/signin", permanent: false } };
  }
  return { props: { initialSession: session, user: session.user } };
}