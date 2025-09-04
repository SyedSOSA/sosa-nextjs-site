import Head from 'next/head'
import Link from 'next/link'

export default function Home(){
  return (
    <>
      <Head>
        <title>SOSA Consulting & Services</title>
        <meta name="description" content="Resume writing, career coaching, leadership development, and UAE business setup."/>
      </Head>

      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container-narrow py-20">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Transforming Resumes, Coaching Careers, Building Futures.</h1>
          <p className="mt-4 text-white/90 max-w-2xl">SOSA helps job seekers and entrepreneurs with ATS-optimized resumes, interview prep, leadership coaching, and UAE business setup.</p>
          <div className="mt-8 flex gap-3">
            <Link href="/recruiters" className="btn-primary">Explore Recruiters</Link>
            <Link href="/business-setup" className="btn-ghost">UAE Business Setup</Link>
          </div>
        </div>
      </section>

      <section className="container-narrow py-12 grid gap-6 md:grid-cols-3">
        {[
          {title:'ATS Resume Writing',desc:'Keyword-rich, recruiter-friendly resumes aligned to your target roles.'},
          {title:'Interview Coaching',desc:'Mock interviews, feedback, and strategy to help you stand out.'},
          {title:'Leadership & Career',desc:'Executive coaching, team building, and career branding.'},
        ].map((c)=> (
          <div key={c.title} className="card p-6">
            <div className="font-bold">{c.title}</div>
            <div className="text-gray-600 mt-2">{c.desc}</div>
          </div>
        ))}
      </section>

      <section className="container-narrow pb-16">
        <div className="card p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-lg md:text-xl font-semibold">Ready to level up? Get a free 10-min consultation.</div>
          <Link href="/contact" className="btn-primary">Contact SOSA</Link>
        </div>
      </section>
    </>
  )
}
