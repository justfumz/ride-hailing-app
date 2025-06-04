import HeroBanner from '../components/home/HeroBanner';
import HowItWorks from '../components/home/HowItWorks';
import Benefits from '../components/home/Benefits';
import Testimonials from '../components/home/Testimonials';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default Home;
