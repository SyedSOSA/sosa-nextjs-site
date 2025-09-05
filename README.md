# SOSA Site — Supabase Auth (E2E)

Next.js (Pages Router) + Tailwind + **Supabase Auth** (email/password).
`/recruiters` is **locked** (SSR redirect if not signed in). Works fully on Vercel.

## 1) Create Supabase project
- Go to Supabase → New Project.
- Copy **Project URL** and **anon public key** from the Project Settings → API tab.
- Under Authentication → Email, enable **Email/Password** signups.

## 2) Configure environment variables
Create `.env.local` locally (or set on Vercel):
```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 3) Run locally
```bash
pnpm i   # or npm i / yarn
pnpm dev
```
Open http://localhost:3000

- Sign up at `/auth/signup` (you'll receive a confirmation email if enabled).
- Sign in at `/auth/signin`.
- Navigate to `/recruiters` (now unlocked).

## 4) Deploy to Vercel
- New Project → Import this repo (ZIP).
- Add env vars:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `NEXT_PUBLIC_SITE_URL` (your Vercel URL)
- Deploy.

## Notes
- We don't need NextAuth here; Supabase Auth handles sessions client + server via `@supabase/auth-helpers-nextjs`.
- `getServerSideProps` on `/recruiters` ensures it's inaccessible without a valid session.
- You can later move recruiters/business data into Supabase tables if needed.
