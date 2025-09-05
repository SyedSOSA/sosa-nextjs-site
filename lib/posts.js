export const posts = [
  { slug: "ats-resumes-2025", title: "ATS-Ready Resumes in 2025: What Really Matters", date: "2025-01-10", content: "Learn how to craft resumes that pass ATS: clear structure, quantified impact, skills aligned to the JD, and clean formatting." },
  { slug: "uae-hiring-trends", title: "UAE Hiring Trends: What Employers Want", date: "2025-02-15", content: "From digital transformation to green roles—here's how to stand out in UAE markets across sectors." },
  { slug: "virtual-interview-tips", title: "Virtual Interview Tips That Win Offers", date: "2025-03-05", content: "Environment, delivery, and storytelling—practical tactics to communicate value over video." }
];
export function getAllSlugs(){ return posts.map(p=>p.slug); }
export function getPostBySlug(slug){ return posts.find(p=>p.slug===slug) || null; }