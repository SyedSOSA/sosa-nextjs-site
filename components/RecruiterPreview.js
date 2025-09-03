export default function RecruiterPreview(){
  const recruiters = [
    { name: 'Michael Page UAE', region: 'UAE', link: '#', focus: 'Multi-Industry' },
    { name: 'Robert Walters ME', region: 'UAE', link: '#', focus: 'Banking & Tech' },
    { name: 'TASC Outsourcing', region: 'UAE', link: '#', focus: 'Staffing' },
    { name: 'ABC Consultants', region: 'India', link: '#', focus: 'Leadership & Tech' },
    { name: 'Randstad India', region: 'India', link: '#', focus: 'Multi-Industry' },
    { name: 'Naukrigulf Directory', region: 'UAE', link: '#', focus: 'Jobs Portal' },
  ];

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Recruiter Directory (UAE & India)</h2>
        <p className="mt-3 text-center text-gray-600">Explore verified recruiters and hiring firms. Full searchable directory coming soon.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recruiters.map(r => (
            <a key={r.name} href={r.link} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="text-lg font-semibold text-gray-900">{r.name}</div>
              <div className="mt-1 text-sm text-gray-600">Region: {r.region}</div>
              <div className="mt-1 text-sm text-gray-600">Focus: {r.focus}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}