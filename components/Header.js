import Link from "next/link";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";

export default function Header() {
  const supabase = useSupabaseClient();
  const user = useUser();

  return (
    <header className="bg-white border-b">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logos/sosa.svg" alt="SOSA" className="h-8 w-auto" />
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/recruiters">Recruiters</Link>
          <Link href="/business-setup">Business Setup</Link>
          <Link href="/contact">Contact</Link>
          {!user && <Link className="btn btn-primary" href="/auth/signin">Sign in</Link>}
          {user && (
            <button className="btn" onClick={async()=>{ await supabase.auth.signOut(); window.location.href="/"; }}>
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
