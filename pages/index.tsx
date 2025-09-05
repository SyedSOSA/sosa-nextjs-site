
import Link from 'next/link';

export default function Home(){
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome to SOSA Consulting & Services</h1>
      <p>Career & Corporate solutions across Coaching, Interview Panels, Training, Leadership, Resume Writing, and more.</p>
      <div className="flex gap-3">
        <Link href="/services" className="px-4 py-2 bg-indigo-600 text-white rounded">View Services</Link>
        <Link href="/contact" className="px-4 py-2 border border-gray-700 rounded">Contact</Link>
      </div>
    </div>
  )
}
