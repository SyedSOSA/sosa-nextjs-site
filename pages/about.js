import Head from 'next/head'

export default function About(){
  return (
    <>
      <Head>
        <title>About | SOSA Consulting</title>
        <meta name="description" content="About Syed Ahamed and SOSA Consulting & Services."/>
      </Head>

      <section className="bg-white">
        <div className="container-narrow py-16">
          <h1 className="text-3xl md:text-5xl font-extrabold">About SOSA & Founder</h1>
          <p className="mt-3 text-gray-600 max-w-3xl">SOSA Consulting & Services helps professionals and entrepreneurs across India, UAE, and global markets with resume writing, interview coaching, leadership development, and UAE business setup guidance.</p>

          <div className="grid gap-8 md:grid-cols-3 mt-10">
            <div className="md:col-span-1">
              <div className="h-44 w-44 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-700 font-extrabold text-3xl">SA</div>
            </div>
            <div className="md:col-span-2">
              <h2 className="font-bold text-xl">Syed Ahamed — Founder</h2>
              <p className="text-gray-700 mt-2">Syed Ahamed is the Founder of SOSA Consulting & Services, specializing in Resume Writing, Career Coaching, Leadership Development, and Business Setup Guidance in the UAE. He has helped job seekers secure better opportunities through ATS-optimized resumes, interview strategies, and leadership coaching.</p>
              <div className="mt-4">
                <div className="font-semibold">Core Expertise</div>
                <ul className="list-disc ml-6 text-gray-700 mt-2">
                  <li>Resume Writing & ATS Optimization</li>
                  <li>Career & Interview Coaching (India, UAE & Global)</li>
                  <li>Executive & Leadership Development</li>
                  <li>Business Setup Advisory (UAE Free Zones & Mainland)</li>
                  <li>Corporate Training & Team Building</li>
                </ul>
              </div>
              <div className="mt-4 p-4 rounded-xl bg-indigo-50 text-indigo-800">
                <strong>Mission:</strong> “Transforming Resumes, Coaching Careers, Building Futures.”
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
