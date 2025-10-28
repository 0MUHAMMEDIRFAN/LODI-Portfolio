export default function Features() {
  const features = [
    {
      icon: "🚛",
      title: "Return Truck Optimization",
      description: "Connect empty return trucks with loads, eliminating wasted trips and maximizing efficiency for drivers and businesses.",
    },
    {
      icon: "📱",
      title: "On-Demand Booking",
      description: "Book nearby trucks and pickups instantly through our platform. Fast, reliable, and transparent pricing.",
    },
    {
      icon: "👥",
      title: "Largest Driver Community",
      description: "Access our extensive network of verified drivers and logistics partners across the region.",
    },
    {
      icon: "🏢",
      title: "Enterprise Solutions",
      description: "Tailored solutions for corporations to streamline their logistics operations and reduce costs significantly.",
    },
    {
      icon: "💰",
      title: "Maximize Profits",
      description: "Drivers earn more by reducing empty miles. Businesses save up to 40% on logistics costs.",
    },
    {
      icon: "🔒",
      title: "Secure & Reliable",
      description: "End-to-end tracking, insurance coverage, and verified drivers ensure your cargo is in safe hands.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Why Choose LODI?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Revolutionary logistics platform built for the modern era
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 sm:p-8 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-white/20 hover:scale-105 active:scale-100"
            >
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{feature.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
