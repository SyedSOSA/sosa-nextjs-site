export default function Hero(){
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 text-white">
      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">SOSA Consulting & Services</h1>
        <p className="mt-4 text-lg md:text-xl opacity-90">Transforming Resumes, Coaching Careers, Building Futures.</p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#contact" className="rounded-2xl bg-white/90 px-6 py-3 text-indigo-700 font-semibold shadow hover:bg-white">Get Started</a>
          <a href="#services" className="rounded-2xl border border-white/70 px-6 py-3 font-semibold hover:bg-white/10">Our Services</a>
        </div>
      </div>
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
    </section>
  );
}