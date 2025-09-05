
import { Briefcase, Users, Target, FileText, TrendingUp, BookOpen, Compass, UserCheck } from "lucide-react"

const services = [
  { title: "Career Development Coaching", icon: TrendingUp, description: "Guiding professionals at all stages to explore opportunities, plan transitions, and achieve long-term growth." },
  { title: "Interview Preparation", icon: UserCheck, description: "Mock interviews, industry-specific feedback, and coaching to build confidence and succeed in competitive interviews." },
  { title: "Corporate Training", icon: Briefcase, description: "Customized workshops to upskill teams, improve performance, and align employees with organizational goals." },
  { title: "Team Building", icon: Users, description: "Engaging programs to enhance collaboration, strengthen communication, and build workplace culture." },
  { title: "Leadership Development", icon: Target, description: "Coaching for managers and executives to improve decision-making, strategic thinking, and people management." },
  { title: "Executive Coaching", icon: Compass, description: "One-on-one sessions to refine leadership style, unlock potential, and achieve professional excellence." },
  { title: "Life Coaching", icon: BookOpen, description: "Helping individuals find clarity, set personal goals, and create balance for a fulfilling life." },
  { title: "Resume Review & Writing", icon: FileText, description: "Crafting compelling resumes and LinkedIn profiles that highlight strengths and attract recruiters." }
]

export default function Services() {
  return (
    <div className="px-6 py-16 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-gray-600">Helping professionals and businesses grow with tailored coaching, training, and career solutions.</p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition">
            <service.icon className="h-10 w-10 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-16">
        <a href="/contact" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition">
          Book a Consultation
        </a>
      </div>
    </div>
  )
}
