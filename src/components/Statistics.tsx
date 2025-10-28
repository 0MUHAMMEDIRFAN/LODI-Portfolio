export default function Statistics() {
  const stats = [
    {
      value: "10,000+",
      label: "Active Drivers",
      description: "Largest driver community in the region",
    },
    {
      value: "500+",
      label: "Corporate Partners",
      description: "Leading organizations trust LODI",
    },
    {
      value: "40%",
      label: "Cost Savings",
      description: "Average reduction in logistics costs",
    },
    {
      value: "1M+",
      label: "Loads Delivered",
      description: "Successfully completed shipments",
    },
    {
      value: "95%",
      label: "On-Time Rate",
      description: "Industry-leading delivery performance",
    },
    {
      value: "24/7",
      label: "Support",
      description: "Round-the-clock customer service",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4">
            Impact That Matters
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Real numbers from real businesses and drivers making real profits
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 sm:p-8 rounded-2xl bg-gray-50 hover:bg-black hover:text-white transition-all duration-300 group active:scale-95"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent group-hover:from-white group-hover:to-gray-300">
                {stat.value}
              </div>
              <div className="text-base sm:text-lg lg:text-xl font-semibold mb-1 sm:mb-2 text-black group-hover:text-white">
                {stat.label}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-300">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="mt-16 sm:mt-20 bg-black text-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6">"</div>
            <blockquote className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium mb-6 sm:mb-8 leading-relaxed px-4">
              LODI has transformed our logistics operations. We've reduced costs by 35% and improved delivery times significantly. The driver community is exceptional.
            </blockquote>
            <div className="text-base sm:text-lg">
              <div className="font-semibold">— Manufacturing Corp</div>
              <div className="text-gray-400 text-sm sm:text-base">Enterprise Partner</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
