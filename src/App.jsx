import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import TechMarquee from './components/TechMarquee';
import FAQ from './components/FAQ';
import ScrollProgress from './components/ScrollProgress';

import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  // Simple routing
  const path = window.location.pathname;

  if (path === '/privacy') {
    return <PrivacyPolicy />;
  }

  return (
    <div className="relative overflow-x-hidden bg-background text-on-surface selection:bg-primary/30 font-body-md">
      <ScrollProgress />
      <Navbar />
      
      {/* Floating Background Orbs for the whole app */}
      <div className="aura-glow bg-primary w-[500px] h-[500px] top-[-100px] right-[-100px]"></div>
      <div className="aura-glow bg-secondary w-[400px] h-[400px] bottom-[100px] left-[-100px]"></div>
      
      <main>
        <HeroSection />
        <TechMarquee />
        <ServicesSection />
        <WhyChooseUs />
        <Portfolio />
        <Process />
        <Pricing />
        <FAQ />
        <Testimonials />
        <ContactCTA />
      </main>
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
