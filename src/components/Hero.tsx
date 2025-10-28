export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 text-center">
        {/* Coming Soon Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          Apps Coming Soon
        </div>

        {/* Logo Placeholder */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-black rounded-2xl flex items-center justify-center">
            <span className="text-white text-4xl font-bold">LODI</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-black mb-6">
          Smart Logistics.
          <br />
          <span className="text-gray-600">Simplified.</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          Connecting return trucks with loads. Book on-demand pickups from our vast driver community. 
          Reducing empty miles, maximizing profits.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-black text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
            Get Started
          </button>
          <button className="px-8 py-4 bg-white text-black border-2 border-black rounded-full font-medium text-lg hover:bg-gray-50 transition-all duration-200">
            Learn More
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-black">10,000+</div>
            <div className="text-sm text-gray-600 mt-1">Active Drivers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-black">500+</div>
            <div className="text-sm text-gray-600 mt-1">Corporate Partners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-black">40%</div>
            <div className="text-sm text-gray-600 mt-1">Cost Savings</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-black rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
