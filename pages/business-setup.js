import Head from 'next/head';
import { useMemo, useState } from 'react';
import data from '../data/businessSetup.json';

const EMIRATES = ['Dubai','Abu Dhabi','Sharjah','Ajman','Ras Al Khaimah','Fujairah','UAQ'];
const TYPES = ['Free Zone','Mainland','Offshore'];

export default function BusinessSetup(){
  const [q,setQ]=useState('');
  const [emirate,setEmirate]=useState('All');
  const [type,setType]=useState('All');
  const [page,setPage]=useState(1);
  const pageSize=9;

  const filtered = useMemo(()=>{
    let rows=[...data];
    const s=q.trim().toLowerCase();
    if(s) rows=rows.filter(r=> r.name.toLowerCase().includes(s) || (r.emirate||'').toLowerCase().includes(s));
    if(emirate!=='All') rows=rows.filter(r=>r.emirate===emirate);
    if(type!=='All') rows=rows.filter(r=>r.type===type);
    return rows;
  },[q,emirate,type]);

  const totalPages=Math.max(1,Math.ceil(filtered.length/pageSize));
  const start=(page-1)*pageSize;
  const slice=filtered.slice(start,start+pageSize);

  function resetPage(){setPage(1);}

  return (<>
    <Head>
      <title>Business Setup in UAE | SOSA Consulting & Services</title>
      <meta name="description" content="Verified free zones, mainland licensing authorities, and setup partners in UAE. Filter by emirate and setup type, search, and connect directly."/>
    </Head>

    <section className="bg-gradient-to-r from-emerald-600 to-cyan-600 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-3xl md:text-5xl font-extrabold">Business Setup in UAE</h1>
        <p className="mt-3 opacity-90">Explore verified Free Zones, Mainland authorities, and setup partners to launch your company.</p>
      </div>
    </section>

    <section className="py-8 bg-white">
      <div className="mx-auto max-w-6xl px-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border p-6 text-center">
          <div className="text-3xl font-extrabold text-emerald-600">40+</div>
          <div className="text-sm text-gray-600 mt-1">Free Zones across UAE</div>
        </div>
        <div className="rounded-2xl border p-6 text-center">
          <div className="text-3xl font-extrabold text-emerald-600">100%</div>
          <div className="text-sm text-gray-600 mt-1">Foreign ownership (many zones)</div>
        </div>
        <div className="rounded-2xl border p-6 text-center">
          <div className="text-3xl font-extrabold text-emerald-600">Step-by-Step</div>
          <div className="text-sm text-gray-600 mt-1">SOSA guides you through setup</div>
        </div>
      </div>
    </section>

    <section className="py-6 bg-gray-50 border-t">
      <div className="mx-auto max-w-6xl px-6 grid gap-3 md:grid-cols-3">
        <input value={q} onChange={e=>{setQ(e.target.value);resetPage();}} placeholder="Search by name or emirate…" className="rounded-xl border px-4 py-3 bg-white"/>
        <select value={emirate} onChange={e=>{setEmirate(e.target.value);resetPage();}} className="rounded-xl border px-4 py-3 bg-white">
          <option>All</option>
          {EMIRATES.map(c=><option key={c}>{c}</option>)}
        </select>
        <select value={type} onChange={e=>{setType(e.target.value);resetPage();}} className="rounded-xl border px-4 py-3 bg-white">
          <option>All</option>
          {TYPES.map(t=><option key={t}>{t}</option>)}
        </select>
      </div>
    </section>

    <section className="py-8">
      <div className="mx-auto max-w-6xl px-6">
        {slice.length===0?(
          <div className="rounded-2xl border bg-white p-10 text-center text-gray-600">No results. Try clearing filters.</div>
        ):(
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {slice.map(r=>(
              <a key={r.name} href={r.website} target="_blank" rel="noreferrer" className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-[2px] transition">
                <div className="p-6 flex items-center gap-4">
                  <img src={`/logos/${r.slug}.png`} alt={`${r.name} logo`} className="h-12 w-12 object-contain rounded-lg"/>
                  <div className="min-w-0">
                    <div className="font-bold text-gray-900 flex items-center gap-2 flex-wrap">
                      <span className="truncate">{r.name}</span>
                      {r.verified && <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Verified</span>}
                    </div>
                    <div className="text-sm text-gray-600">{r.emirate} • {r.type}</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {(r.services||[]).map(s=>(
                        <span key={s} className="bg-emerald-50 text-emerald-700 text-xs px-2 py-1 rounded-full">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-4">
                  <div className="inline-block rounded-xl bg-emerald-600 text-white px-4 py-2 text-sm font-semibold hover:bg-emerald-700">Visit Website →</div>
                </div>
              </a>
            ))}
          </div>
        )}

        <div className="mt-8 flex items-center justify-between">
          <button onClick={()=>setPage(p=>Math.max(1,p-1))} disabled={page===1} className="rounded-xl border px-4 py-2 disabled:opacity-50 bg-white">← Previous</button>
          <div className="text-sm text-gray-600">Page {page} of {totalPages}</div>
          <button onClick={()=>setPage(p=>Math.min(totalPages,p+1))} disabled={page===totalPages} className="rounded-xl border px-4 py-2 disabled:opacity-50 bg-white">Next →</button>
        </div>

        <div className="mt-12 rounded-2xl bg-gradient-to-r from-emerald-600 to-cyan-600 p-6 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-lg md:text-xl font-semibold">
              🚀 Ready to start your business in UAE? SOSA can guide licensing, PRO, visas & branding.
            </div>
            <a href="/#contact" className="rounded-2xl bg-white px-6 py-3 font-semibold text-emerald-700 hover:bg-white/90">Contact SOSA</a>
          </div>
        </div>
      </div>
    </section>
  </>);
}
