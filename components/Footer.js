export default function Footer(){
  return (
    <footer className="bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 text-white">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-semibold">SOSA Consulting & Services</div>
        <div className="text-white/80 text-sm">“Transforming Resumes, Coaching Careers, Building Futures.”</div>
        <div className="text-white/80 text-sm">© {new Date().getFullYear()} SOSA</div>
      </div>
    </footer>
  );
}