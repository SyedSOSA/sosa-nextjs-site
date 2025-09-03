export default function Contact(){
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Contact Us</h2>
        <p className="mt-3 text-center text-gray-600">Have a question or want to get started? Send a message.</p>
        <form action="https://formspree.io/f/mayvlwly" method="POST" className="mt-8 grid gap-4">
          <input name="name" required placeholder="Your name" className="rounded-xl border px-4 py-3" />
          <input type="email" name="email" required placeholder="Your email" className="rounded-xl border px-4 py-3" />
          <textarea name="message" required placeholder="Your message" rows="5" className="rounded-xl border px-4 py-3" />
          <button type="submit" className="rounded-2xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700">Send</button>
        </form>
        <div className="mt-6 text-center text-sm text-gray-600">
          Or email us at <a href="mailto:syedahmedsaf@gmail.com" className="text-indigo-600">syedahmedsaf@gmail.com</a>
        </div>
      </div>
    </section>
  );
}