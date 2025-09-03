const tiers = [
  { name: 'Resume Revamp', priceINR: '₹2,000', priceAED: 'AED 200', features: ['ATS-optimized resume', 'PDF + Word', '1 revision'] },
  { name: 'Resume + LinkedIn', priceINR: '₹3,000', priceAED: 'AED 300', features: ['Everything in Revamp', 'LinkedIn optimization', '2 revisions'] },
  { name: 'Resume + LinkedIn + Cover Letter', priceINR: '₹5,000', priceAED: 'AED 400', features: ['Everything in LinkedIn', 'Tailored cover letter', '3 revisions'] },
];

export default function Pricing(){
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Pricing</h2>
        <p className="mt-3 text-center text-gray-600">Transparent packages for every stage of your job search.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tiers.map(t => (
            <div key={t.name} className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <div className="mt-3 text-2xl font-extrabold text-indigo-600">{t.priceINR}</div>
              <div className="text-sm text-gray-500">{t.priceAED}</div>
              <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                {t.features.map(f => <li key={f}>• {f}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}