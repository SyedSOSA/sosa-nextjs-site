
import Link from 'next/link';

export default function Layout({children}){
  return (
    <div>
      <header className="border-b border-gray-800">
        <div className="max-w-6xl mx-auto flex justify-between p-4">
          <Link href="/" className="font-bold">SOSA Consulting</Link>
          <nav className="flex gap-3 text-sm">
            <Link href="/services">Services</Link>
            <Link href="/recruiters">Recruiters</Link>
            <Link href="/business-setup">Business Setup</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>
      <main className="max-w-6xl mx-auto p-6">{children}</main>
      <footer className="border-t border-gray-800 text-center text-gray-400 p-6">
        © {new Date().getFullYear()} SOSA Consulting
      </footer>
    </div>
  )
}
