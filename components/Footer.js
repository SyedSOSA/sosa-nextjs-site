export default function Footer(){
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="container-narrow py-8 grid gap-4 md:grid-cols-3 text-sm">
        <div>
          <div className="font-bold">SOSA Consulting & Services</div>
          <div className="text-gray-600 mt-2">Transforming Resumes, Coaching Careers, Building Futures.</div>
        </div>
        <div>
          <div className="font-semibold">Contact</div>
          <div className="text-gray-700 mt-2">Email: <a className="underline" href="mailto:syedahmedsaf@gmail.com">syedahmedsaf@gmail.com</a></div>
          <div className="text-gray-700">Phone: <a className="underline" href="tel:+919535143786">+91-9535143786</a></div>
          <div className="text-gray-700">LinkedIn: <a className="underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/108319345/">Company Page</a></div>
        </div>
        <div className="text-gray-600 md:text-right">© {year} SOSA Consulting. All rights reserved.</div>
      </div>
    </footer>
  )
}
