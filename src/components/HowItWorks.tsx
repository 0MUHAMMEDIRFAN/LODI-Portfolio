export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Post Your Load",
      description: "Businesses post their logistics requirements or book on-demand pickups through our platform.",
      highlight: "Quick & Easy",
    },
    {
      number: "02",
      title: "Smart Matching",
      description: "Our AI-powered system matches loads with nearby return trucks or available drivers instantly.",
      highlight: "Instant Connection",
    },
    {
      number: "03",
      title: "Track & Deliver",
      description: "Real-time tracking, secure payment, and guaranteed delivery. Everyone profits.",
      highlight: "Complete Transparency",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to revolutionize your logistics
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12`}
            >
              {/* Number Circle */}
              <div className="flex-shrink-0">
                <div className="w-40 h-40 rounded-full bg-black flex items-center justify-center">
                  <span className="text-6xl font-bold text-white">{step.number}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-block px-4 py-1 bg-black text-white text-sm font-medium rounded-full mb-4">
                  {step.highlight}
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-black mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                  {step.description}
                </p>
              </div>

              {/* Placeholder for Illustration */}
              <div className="flex-1 flex justify-center">
                <div className="w-full max-w-md aspect-square bg-white rounded-2xl shadow-lg flex items-center justify-center border-2 border-gray-200">
                  <span className="text-6xl">{["📦", "🔄", "✅"][index]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
