import { FaClipboardList, FaMapMarkedAlt, FaTruck, FaCheckCircle } from 'react-icons/fa';
import { HiArrowNarrowRight, HiArrowNarrowDown } from 'react-icons/hi';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Post Your Load",
      description: "Businesses post their logistics requirements or book on-demand pickups through our platform.",
      highlight: "Quick & Easy",
      icon: FaClipboardList,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      number: "02",
      title: "Smart Matching",
      description: "Our AI-powered system matches loads with nearby return trucks or available drivers instantly.",
      highlight: "Instant Connection",
      icon: FaMapMarkedAlt,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      number: "03",
      title: "Track & Deliver",
      description: "Real-time tracking, secure payment, and guaranteed delivery. Everyone profits.",
      highlight: "Complete Transparency",
      icon: FaTruck,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, gray 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
            How It Works
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to revolutionize your logistics
          </p>
        </div>

        {/* Route Map Design */}
        <div className="relative">
          {/* Desktop: Horizontal Route Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 transform -translate-y-1/2 rounded-full" style={{ top: '120px' }}></div>

          {/* Mobile: Vertical Route Line */}
          <div className="lg:hidden absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 transform -translate-x-1/2 rounded-full"></div>

          {/* Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Arrow between steps (Desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-28 -right-4 z-10">
                      <HiArrowNarrowRight className="text-4xl text-gray-400" />
                    </div>
                  )}

                  {/* Arrow between steps (Mobile) */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute left-1/2 -bottom-6 transform -translate-x-1/2 z-10">
                      <HiArrowNarrowDown className="text-4xl text-gray-400" />
                    </div>
                  )}

                  {/* Step Card */}
                  <div className={`${step.bgColor} rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 backdrop-blur-sm relative z-20`}>
                    {/* Step Number Badge */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg z-30">
                      {step.number}
                    </div>

                    {/* Icon Circle */}
                    <div className={`w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110`}>
                      <IconComponent className="text-4xl sm:text-5xl text-white" />
                    </div>

                    {/* Highlight Badge */}
                    <div className="inline-block px-4 py-1.5 bg-white/80 backdrop-blur-sm text-gray-800 text-xs sm:text-sm font-semibold rounded-full mb-4 shadow-md border border-gray-200">
                      {step.highlight}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 text-center">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-center">
                      {step.description}
                    </p>

                    {/* Checkmark for completed look */}
                    <div className="mt-6 flex justify-center">
                      <FaCheckCircle className={`text-2xl bg-gradient-to-br ${step.color} bg-clip-text text-transparent`} style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-black text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
}
