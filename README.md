# SOSA — Supabase Auth + Services (E2E)

Next.js (Pages Router) + Tailwind + **Supabase Auth** (email/password).
`/recruiters` is **locked** (SSR redirect if not signed in).
Includes `/services` page and header nav link.

## 1) Create Supabase project
- Create a new Supabase project.
- Copy **Project URL** and **Anon Public Key** (Settings → API).
- Under Authentication → Email, enable **Email/Password** signups.

## 2) Environment Variables
Create `.env.local` (or set on Vercel):
```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 3) Run locally
```bash
npm i
npm run dev
```
Open http://localhost:3000

- Sign up at `/auth/signup` (confirm email if enabled).
- Sign in at `/auth/signin`.
- Visit `/recruiters` (now unlocked).

## 4) Deploy to Vercel
- New Project → Import this repo (ZIP).
- Add env vars:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `NEXT_PUBLIC_SITE_URL` (your domain)
- Ensure `vercel.json` has **no** `builds` key (already set).

## Notes
- Uses `@supabase/auth-helpers-nextjs` for SSR session check.
- Services page lists core offerings with CTA → `/contact`.
