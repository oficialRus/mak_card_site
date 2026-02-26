import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import PhilosophySection from './components/PhilosophySection';
import AISection from './components/AISection';
import BenefitsSection from './components/BenefitsSection';
import ReviewsSection from './components/ReviewsSection';
import AboutSection from './components/AboutSection';
import FAQSection from './components/FAQSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div className="min-h-screen" style={{ background: '#050818' }}>
      <HeroSection />
      <ProductsSection />
      <PhilosophySection />
      <AISection />
      <BenefitsSection />
      <ReviewsSection />
      <AboutSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}

export default App;
