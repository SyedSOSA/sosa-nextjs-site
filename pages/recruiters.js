import Layout from "../components/Layout";
import RecruitersSection from "../components/RecruitersSection";
export default function RecruitersPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-2xl font-bold mb-4">Recruiters</h1>
        <RecruitersSection />
      </div>
    </Layout>
  );
}