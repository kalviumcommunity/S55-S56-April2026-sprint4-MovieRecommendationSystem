const RecommendationSection = () => {
  return (
    <div className="py-12 px-4 md:px-12 bg-netflix-dark">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-gray-900 to-black p-8 rounded-lg border border-gray-800">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Personalized <span className="text-netflix-red">AI Recommendations</span>
          </h2>
          <p className="text-gray-400 mb-6 max-w-xl text-lg">
            Tell us what you're in the mood for. Our AI analyzes your preferences to find the perfect movie for your next binge session.
          </p>
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="E.g., A mind-bending sci-fi thriller..." 
              className="flex-1 bg-gray-800 text-white rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-netflix-red transition-all"
            />
            <button className="bg-netflix-red text-white px-6 py-3 rounded font-semibold hover:bg-red-700 transition-colors whitespace-nowrap">
              Find Movies
            </button>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center">
          {/* Decorative AI Element */}
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 bg-netflix-red/20 rounded-full animate-pulse"></div>
            <div className="absolute inset-4 bg-netflix-red/30 rounded-full animate-pulse delay-75"></div>
            <div className="absolute inset-8 bg-gray-900 rounded-full flex items-center justify-center border border-netflix-red/50">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-netflix-red">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationSection;
