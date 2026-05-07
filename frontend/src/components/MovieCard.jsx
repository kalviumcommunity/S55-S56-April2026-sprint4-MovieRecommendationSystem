const MovieCard = ({ title, imageUrl, year, rating }) => {
  return (
    <div className="relative group min-w-[200px] md:min-w-[240px] rounded-md overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-105 hover:z-20">
      {/* Poster Image */}
      <img
        src={imageUrl || "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2070&auto=format&fit=crop"}
        alt={title}
        className="w-full h-[300px] md:h-[360px] object-cover transition-opacity duration-300 group-hover:opacity-75"
      />
      
      {/* Hover Overlay Information */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
        <h3 className="text-white font-bold text-lg mb-1 truncate">{title}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <span className="text-green-400 font-semibold">{rating}% Match</span>
          <span>{year}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
