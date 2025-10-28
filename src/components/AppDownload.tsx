export default function AppDownload() {
  return (
    <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Coming Soon
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Download Our
              <br />
              Mobile App
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Access LODI on the go. Our Android and iOS apps are launching soon, bringing the full power of our platform to your fingertips.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Real-time Tracking</h4>
                  <p className="text-gray-400">Track your loads and drivers in real-time</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Instant Booking</h4>
                  <p className="text-gray-400">Book nearby trucks with one tap</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Secure Payments</h4>
                  <p className="text-gray-400">Safe and transparent pricing</p>
                </div>
              </div>
            </div>

            {/* App Store Badges - Placeholder */}
            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-3 bg-white text-black rounded-xl font-semibold flex items-center gap-3 cursor-not-allowed opacity-50">
                <span className="text-2xl">📱</span>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </div>
              <div className="px-6 py-3 bg-white text-black rounded-xl font-semibold flex items-center gap-3 cursor-not-allowed opacity-50">
                <span className="text-2xl">🤖</span>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              * Apps will be available soon. Stay tuned!
            </p>
          </div>

          {/* Phone Mockup Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-80 h-[600px] bg-gradient-to-br from-gray-800 to-black rounded-[3rem] border-8 border-gray-900 shadow-2xl p-4">
                <div className="w-full h-full bg-white rounded-[2rem] flex flex-col items-center justify-center p-8 text-black">
                  {/* Notch */}
                  <div className="absolute top-8 w-32 h-6 bg-black rounded-full"></div>
                  
                  {/* App Preview */}
                  <div className="mt-12 text-center">
                    <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mb-6 mx-auto">
                      <span className="text-white text-2xl font-bold">LODI</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">LODI App</h3>
                    <p className="text-gray-600 text-sm mb-8">Your logistics companion</p>
                    
                    {/* Feature Icons */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-2">
                          <span>🚚</span>
                        </div>
                        <span className="text-xs">Track</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-2">
                          <span>📍</span>
                        </div>
                        <span className="text-xs">Book</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-2">
                          <span>💳</span>
                        </div>
                        <span className="text-xs">Pay</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-white/20 blur-3xl -z-10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
