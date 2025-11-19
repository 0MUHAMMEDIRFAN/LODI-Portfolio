import { SITE_NAME } from '@/constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-100 to-white overflow-hidden">
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white/80 backdrop-blur-xl"></div>
      <div className="relative z-10 max-w-3xl sm:max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16 lg:py-24 text-center rounded-3xl bg-white/60 backdrop-blur-lg shadow-2xl border border-white/30">
        {/* Coming Soon Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-black/80 text-white rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 animate-fade-in shadow-lg">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          Apps Coming Soon
        </div>

        {/* Logo Placeholder */}
        <div className="mb-6 sm:mb-8 flex justify-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-black/80 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-3xl transition-shadow duration-300 border border-white/20 backdrop-blur-md">
            <span className="text-white text-3xl sm:text-4xl font-bold">{SITE_NAME}</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black mb-4 sm:mb-6 px-2 sm:px-4">
          Smart Logistics.
          <br />
          <span className="text-gray-600">Simplified.</span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2 sm:px-4">
          Connecting return trucks with loads. Book on-demand pickups from our vast driver community.
          Reducing empty miles, maximizing profits.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2 sm:px-4">
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-black/80 text-white rounded-full font-medium text-base sm:text-lg hover:bg-gray-800 transition-all duration-200 shadow-xl hover:shadow-2xl active:scale-95 transform hover:scale-105 backdrop-blur-md">
            Get Started
          </button>
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/80 text-black border-2 border-black/30 rounded-full font-medium text-base sm:text-lg hover:bg-gray-50 transition-all duration-200 active:scale-95 shadow-md backdrop-blur-md">
            Learn More
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-2xl mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">10K+</div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1">Active Drivers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">500+</div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1">Corporate Partners</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">40%</div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1">Cost Savings</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-black rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
