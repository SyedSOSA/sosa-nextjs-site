import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import RecruiterPreview from '../components/RecruiterPreview';
import Pricing from '../components/Pricing';
import BusinessSetup from '../components/BusinessSetup';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home(){
  return (
    <Layout title="SOSA Consulting & Services">
      <Hero />
      <Services />
      <RecruiterPreview />
      <Pricing />
      <BusinessSetup />
      <Blog />
      <Contact />
      <Footer />
    </Layout>
  );
}