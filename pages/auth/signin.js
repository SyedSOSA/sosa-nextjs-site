import { useState } from "react";
import Link from "next/link";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

export default function SignIn() {
  const supabase = useSupabaseClient();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) { setError(error.message); return; }
    router.push("/recruiters");
  };

  return (
    <div className="max-w-md mx-auto card">
      <h1 className="text-2xl font-bold mb-4">Sign in</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="block text-sm mb-1">Email</label>
          <input className="w-full border rounded-lg p-2" value={email} onChange={e=>setEmail(e.target.value)} />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1">Password</label>
          <input type="password" className="w-full border rounded-lg p-2" value={password} onChange={e=>setPassword(e.target.value)} />
        </div>
        <button className="btn btn-primary w-full">Sign in</button>
      </form>
      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
      <p className="mt-4 text-sm">No account? <Link className="link" href="/auth/signup">Create one</Link></p>
    </div>
  );
}
