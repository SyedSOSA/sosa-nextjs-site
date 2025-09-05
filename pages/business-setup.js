import data from "../data/businessSetup.json";

export default function BizSetup() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">UAE Business Setup Directory</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {data.map(item => (
          <div key={item.id} className="card">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-600">{item.services}</p>
            <p className="mt-2 text-sm">{item.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
