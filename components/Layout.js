import Head from 'next/head';

export default function Layout({ children, title='SOSA' }){
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Transforming Resumes, Coaching Careers, Building Futures." />
        <meta property="og:title" content="SOSA Consulting & Services" />
        <meta property="og:description" content="ATS resumes, interview prep, leadership coaching, and business setup in UAE." />
      </Head>
      <main className="min-h-screen">{children}</main>
    </>
  );
}