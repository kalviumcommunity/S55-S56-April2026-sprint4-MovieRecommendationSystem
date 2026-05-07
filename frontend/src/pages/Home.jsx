import Hero from '../components/Hero';
import TrendingSection from '../components/TrendingSection';
import RecommendationSection from '../components/RecommendationSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-netflix-dark w-full overflow-x-hidden">
      <Hero />
      <TrendingSection />
      <RecommendationSection />
    </div>
  );
};

export default Home;
