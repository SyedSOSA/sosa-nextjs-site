const vendors = [
  { id: 1, name: "UAE Freezone Desk", services: "Company formation, PRO", contact: "info@freezonedesk.ae" },
  { id: 2, name: "Mainland BizWorks", services: "Mainland licensing, Visa", contact: "team@bizworks.ae" }
];
export default function BizSetup() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">UAE Business Setup Directory</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {vendors.map(v => (
          <div key={v.id} className="card">
            <h3 className="text-lg font-semibold">{v.name}</h3>
            <p className="text-sm text-gray-600">{v.services}</p>
            <p className="mt-2 text-sm">{v.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}