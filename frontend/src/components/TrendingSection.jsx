import MovieCard from './MovieCard';

const MOCK_TRENDING = [
  { id: 1, title: 'Inception', year: '2010', rating: 98, imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop' },
  { id: 2, title: 'The Matrix', year: '1999', rating: 95, imageUrl: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop' },
  { id: 3, title: 'Interstellar', year: '2014', rating: 92, imageUrl: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2070&auto=format&fit=crop' },
  { id: 4, title: 'Blade Runner 2049', year: '2017', rating: 89, imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop' },
  { id: 5, title: 'Dune', year: '2021', rating: 91, imageUrl: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop' },
  { id: 6, title: 'Arrival', year: '2016', rating: 88, imageUrl: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2070&auto=format&fit=crop' },
];

const TrendingSection = () => {
  return (
    <div className="py-8 px-4 md:px-12 relative -mt-20 z-20">
      <h2 className="text-2xl font-semibold text-white mb-4">Trending Now</h2>
      
      {/* Horizontal Scroll Container */}
      <div className="flex gap-4 overflow-x-auto pb-8 pt-4 scrollbar-hide snap-x">
        {MOCK_TRENDING.map((movie) => (
          <div key={movie.id} className="snap-start">
            <MovieCard {...movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingSection;
