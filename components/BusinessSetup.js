export default function BusinessSetup(){
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-600 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">Helping You Setup Your Business in UAE</h2>
        <p className="mt-3 text-center text-white/90">End-to-end guidance for company formation, licensing, compliance and HR setup.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">Why UAE: tax-friendly, global gateway, world-class infrastructure.</div>
          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">Trade license & registration: Mainland, Free Zone, Offshore.</div>
          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">PRO Services: visas, approvals, local compliance.</div>
          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">Recruitment & Branding: HR setup, LinkedIn & digital presence.</div>
        </div>
        <div className="mt-10 text-center">
          <a href="#contact" className="rounded-2xl bg-white px-6 py-3 font-semibold text-indigo-700 shadow hover:bg-white/90">Book Free Consultation</a>
        </div>
      </div>
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
    </section>
  );
}