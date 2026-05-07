const Hero = () => {
  return (
    <div className="relative h-[70vh] md:h-[85vh] w-full">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 w-full h-full bg-netflix-dark">
        <img
          src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-60"
        />
        {/* Gradient overlays to blend with background */}
        <div className="absolute inset-0 bg-gradient-to-r from-netflix-dark via-netflix-dark/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-netflix-dark via-transparent to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-4 md:px-12 w-full md:w-2/3 lg:w-1/2">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
          Discover Your Next Favorite Story
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl text-shadow-md">
          BingeBox uses advanced AI to recommend movies perfectly tailored to your unique taste. 
          Stop scrolling, start watching.
        </p>
        
        <div className="flex gap-4">
          <button className="bg-white text-black px-6 md:px-8 py-2 md:py-3 rounded font-bold text-lg hover:bg-white/80 transition-colors flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
            </svg>
            Play
          </button>
          <button className="bg-gray-500/50 text-white px-6 md:px-8 py-2 md:py-3 rounded font-bold text-lg hover:bg-gray-500/70 transition-colors flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
