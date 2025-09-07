import Footer from "./Footer";
import Link from "next/link";
export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/"><a className="text-xl font-bold">SOSA Consulting</a></Link>
          <nav className="space-x-4">
            <Link href="/"><a>Home</a></Link>
            <Link href="/recruiters"><a>Recruiters</a></Link>
            <Link href="/signin"><a className="ml-2 px-3 py-1 border rounded">Sign in</a></Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}