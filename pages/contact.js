import Head from 'next/head'
import { useState } from 'react'

export default function Contact(){
  const [sent,setSent]=useState(false);

  return (
    <>
      <Head>
        <title>Contact | SOSA Consulting</title>
        <meta name="description" content="Contact SOSA for resume writing, coaching, and UAE business setup."/>
      </Head>

      <section className="bg-white">
        <div className="container-narrow py-16">
          <h1 className="text-3xl md:text-5xl font-extrabold">Contact SOSA</h1>
          <p className="mt-3 text-gray-600 max-w-2xl">Have a question or want to start a project? Use the form or the quick links below.</p>

          <div className="grid gap-8 md:grid-cols-2 mt-10">
            <form
              action="https://formspree.io/f/your-form-id"
              method="POST"
              onSubmit={()=>setSent(true)}
              className="card p-6"
            >
              <label className="block text-sm font-semibold">Name</label>
              <input name="name" required className="mt-1 mb-4 w-full rounded-xl border px-4 py-3" placeholder="Your name" />

              <label className="block text-sm font-semibold">Email</label>
              <input name="email" type="email" required className="mt-1 mb-4 w-full rounded-xl border px-4 py-3" placeholder="you@example.com" />

              <label className="block text-sm font-semibold">Message</label>
              <textarea name="message" rows="5" required className="mt-1 mb-6 w-full rounded-xl border px-4 py-3" placeholder="Tell us how we can help" />

              <button className="btn-primary" type="submit">Send Message</button>
              {sent && <div className="mt-3 text-sm text-green-700">Thanks! If this was a test, remember to replace the Formspree endpoint.</div>}
            </form>

            <div className="card p-6">
              <div className="font-semibold">Quick Links</div>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li>📧 <a className="underline" href="mailto:syedahmedsaf@gmail.com">syedahmedsaf@gmail.com</a></li>
                <li>📞 <a className="underline" href="tel:+919535143786">+91-9535143786</a></li>
                <li>🔗 <a className="underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/108319345/">LinkedIn Company Page</a></li>
              </ul>

              <div className="mt-6 p-4 rounded-xl bg-indigo-50 text-indigo-800">
                We typically reply within 24 hours on business days.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
