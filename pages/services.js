const services = [
  { title: "Career Development Coaching", description: "Explore options, plan transitions, and achieve long-term growth with a structured roadmap." },
  { title: "Interview Preparation", description: "Mock interviews, role-specific questions, and targeted feedback for confident performance." },
  { title: "Corporate Training", description: "Customized workshops to upskill teams and align capability with business goals." },
  { title: "Team Building", description: "Engaging programs that enhance collaboration, communication, and culture." },
  { title: "Leadership Development", description: "Elevate strategic thinking, decision-making, and people leadership." },
  { title: "Executive Coaching", description: "One-on-one sessions to refine leadership style and deliver measurable impact." },
  { title: "Life Coaching", description: "Clarity, goals, and accountability frameworks for personal momentum." },
  { title: "Resume Review & Writing", description: "ATS-friendly resumes and LinkedIn optimization that attract the right roles." }
];
export default function Services() {
  return (
    <div className="px-6 py-16 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-gray-600">Helping professionals and businesses grow with tailored coaching, hiring, and training.</p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <div key={i} className="p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-16">
        <a href="/contact" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition">
          Book a Consultation
        </a>
      </div>
    </div>
  );
}