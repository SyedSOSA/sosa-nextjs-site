
export default function Services(){
  const items=[
    {title:"Career Development Coaching",desc:"Roadmap, skills gap analysis, and accountability."},
    {title:"Interview Preparation",desc:"Panel-style mocks for tech and leadership roles."},
    {title:"Corporate Training",desc:"Workshops on communication and performance."},
    {title:"Team Building",desc:"Sessions to improve collaboration and ownership."},
    {title:"Leadership Development",desc:"Manager essentials and coaching skills."},
    {title:"Executive Coaching",desc:"Outcome-focused sessions for leaders."},
    {title:"Life Coaching",desc:"Balance, clarity, and resilience."},
    {title:"Resume Review & Writing",desc:"ATS-optimized resumes and LinkedIn."},
  ];
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {items.map(it=>(
        <div key={it.title} className="p-4 border border-gray-800 rounded">
          <h3 className="font-semibold">{it.title}</h3>
          <p className="text-gray-300">{it.desc}</p>
        </div>
      ))}
    </div>
  )
}
