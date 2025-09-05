
export default function Recruiters(){
  const list=[{name:"ABC Talent",focus:"Tech Hiring",email:"hr@abc.com"}];
  return (
    <ul>
      {list.map(r=>(<li key={r.name}>{r.name} - {r.focus} ({r.email})</li>))}
    </ul>
  )
}
