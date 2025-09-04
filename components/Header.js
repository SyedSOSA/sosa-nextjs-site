import Link from 'next/link';

export default function Header(){
  return (
    <header className="bg-white border-b">
      <div className="container-narrow py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-extrabold">S</div>
          <span className="font-extrabold text-lg">SOSA Consulting & Services</span>
        </Link>
        <nav className="flex items-center gap-3 text-sm">
          <Link className="hover:text-indigo-600 font-medium px-2 py-1" href="/">Home</Link>
          <Link className="hover:text-indigo-600 font-medium px-2 py-1" href="/about">About</Link>
          <Link className="hover:text-indigo-600 font-medium px-2 py-1" href="/recruiters">Recruiters</Link>
          <Link className="hover:text-indigo-600 font-medium px-2 py-1" href="/business-setup">Business Setup</Link>
          <Link className="hover:text-indigo-600 font-medium px-2 py-1" href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
