import Head from 'next/head';
import { useMemo, useState } from 'react';
import data from '@/data/recruiters.json';

const COUNTRIES = ['UAE','India'];
const SECTORS = ['Multi-sector','Finance & Tech','Outsourcing','Job Board'];

export default function Recruiters(){
  const [q,setQ]=useState('');
  const [country,setCountry]=useState('All');
  const [sector,setSector]=useState('All');
  const [page,setPage]=useState(1);
  const pageSize=9;

  const filtered = useMemo(()=>{
    let rows=[...data];
    const s=q.trim().toLowerCase();
    if(s) rows=rows.filter(r=> r.name.toLowerCase().includes(s) || (r.country||'').toLowerCase().includes(s) || (r.sector||'').toLowerCase().includes(s));
    if(country!=='All') rows=rows.filter(r=>r.country===country);
    if(sector!=='All') rows=rows.filter(r=>r.sector===sector);
    return rows;
  },[q,country,sector]);

  const totalPages=Math.max(1,Math.ceil(filtered.length/pageSize));
  const start=(page-1)*pageSize;
  const slice=filtered.slice(start,start+pageSize);
  function reset(){setPage(1);}

  return (<>
    <Head>
      <title>Recruiter Directory | SOSA</title>
      <meta name="description" content="Discover UAE & India recruiters and job boards. Filter, search, and connect."/>
    </Head>

    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16 text-white">
      <div className="container-narrow">
        <h1 className="text-3xl md:text-5xl font-extrabold">Recruiter Directory</h1>
        <p className="mt-3 opacity-90">Search verified recruiters & job boards across UAE and India.</p>
      </div>
    </section>

    <section className="py-6 bg-gray-50 border-t">
      <div className="container-narrow grid gap-3 md:grid-cols-3">
        <input value={q} onChange={e=>{setQ(e.target.value);reset();}} placeholder="Search by name, country or sector…" className="rounded-xl border px-4 py-3 bg-white"/>
        <select value={country} onChange={e=>{setCountry(e.target.value);reset();}} className="rounded-xl border px-4 py-3 bg-white">
          <option>All</option>
          {COUNTRIES.map(c=><option key={c}>{c}</option>)}
        </select>
        <select value={sector} onChange={e=>{setSector(e.target.value);reset();}} className="rounded-xl border px-4 py-3 bg-white">
          <option>All</option>
          {SECTORS.map(s=><option key={s}>{s}</option>)}
        </select>
      </div>
    </section>

    <section className="py-8">
      <div className="container-narrow">
        {slice.length===0?(
          <div className="card p-10 text-center text-gray-600">No results. Try clearing filters.</div>
        ):(
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {slice.map(r=>(
              <a key={r.name} href={r.website} target="_blank" rel="noreferrer" className="card hover:shadow-md hover:-translate-y-[2px] transition">
                <div className="p-6 flex items-center gap-4">
                  <img src={`/logos/${r.slug}.png`} alt={`${r.name} logo`} className="h-12 w-12 object-contain rounded-lg"/>
                  <div className="min-w-0">
                    <div className="font-bold text-gray-900 flex items-center gap-2 flex-wrap">
                      <span className="truncate">{r.name}</span>
                      {r.verified && <span className="badge bg-green-100 text-green-700">Verified</span>}
                    </div>
                    <div className="text-sm text-gray-600">{r.country} • {r.sector}</div>
                  </div>
                </div>
                <div className="px-6 pb-4">
                  <div className="btn-primary">Visit Website →</div>
                </div>
              </a>
            ))}
          </div>
        )}

        <div className="mt-8 flex items-center justify-between">
          <button onClick={()=>setPage(p=>Math.max(1,p-1))} disabled={page===1} className="btn-ghost disabled:opacity-50">← Previous</button>
          <div className="text-sm text-gray-600">Page {page} of {totalPages}</div>
          <button onClick={()=>setPage(p=>Math.min(totalPages,p+1))} disabled={page===totalPages} className="btn-ghost disabled:opacity-50">Next →</button>
        </div>

        <div className="mt-12 card p-6 bg-indigo-600 text-white border-none">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-lg md:text-xl font-semibold">
              🚀 Boost your chances with an ATS-optimized resume & interview coaching.
            </div>
            <a href="/contact" className="btn bg-white text-indigo-700 hover:bg-white/90">Contact SOSA</a>
          </div>
        </div>
      </div>
    </section>
  </>);
}
