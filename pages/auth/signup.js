import { useState } from "react";
import Link from "next/link";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

export default function SignUp() {
  const supabase = useSupabaseClient();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) { setMessage(error.message); return; }
    setMessage("Check your email to confirm your account, then sign in.");
    setTimeout(()=>router.push("/auth/signin"), 1200);
  };

  return (
    <div className="max-w-md mx-auto card">
      <h1 className="text-2xl font-bold mb-4">Create your account</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="block text-sm mb-1">Email</label>
          <input className="w-full border rounded-lg p-2" value={email} onChange={e=>setEmail(e.target.value)} />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1">Password</label>
          <input type="password" className="w-full border rounded-lg p-2" value={password} onChange={e=>setPassword(e.target.value)} />
        </div>
        <button className="btn btn-primary w-full">Sign up</button>
      </form>
      {message && <p className="mt-3 text-sm text-indigo-700">{message}</p>}
      <p className="mt-4 text-sm">Already have an account? <Link className="link" href="/auth/signin">Sign in</Link></p>
    </div>
  );
}
