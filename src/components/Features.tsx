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
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Why Choose LODI?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Revolutionary logistics platform built for the modern era
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-white/20"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
