import { Briefcase, MessagesSquare, GraduationCap, Users, Sparkles } from 'lucide-react';

const items = [
  { icon: Briefcase, title: 'Resume Writing & Optimization', desc: 'ATS-friendly resumes tailored for India, UAE & global roles.' },
  { icon: MessagesSquare, title: 'Interview Coaching & Job Guidance', desc: 'Mock interviews, HR Q&A, and role-based prep.' },
  { icon: GraduationCap, title: 'Executive & Leadership Coaching', desc: 'Grow influence, executive presence, and decision-making.' },
  { icon: Users, title: 'Team Building & Corporate Training', desc: 'Workshops for communication, collaboration, and delivery.' },
  { icon: Sparkles, title: 'Career Development & Branding', desc: 'LinkedIn optimization and personal brand strategy.' },
];

export default function Services(){
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">What We Do</h2>
        <p className="mt-3 text-center text-gray-600">Practical, results-driven support for your next career move.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({icon:Icon, title, desc}) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-indigo-50 p-3"><Icon /></div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}