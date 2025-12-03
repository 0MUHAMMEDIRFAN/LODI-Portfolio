import { SITE_NAME } from "@/constants";
import { IMAGE_PATHS } from "@/constants/files";
import { FaAppStore, FaGooglePlay } from "react-icons/fa";

export default function AppDownload() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Content */}
          <div className="w-full max-w-xl mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Coming Soon
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Download Our
              <br />
              <span className="text-gray-300">Mobile App</span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Access LODI on the go. Our Android and iOS apps are launching soon, bringing the full power of our platform to your fingertips.
            </p>

            <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-0.5 sm:mb-1">Real-time Tracking</h4>
                  <p className="text-xs sm:text-sm text-gray-400">Track your loads and drivers in real-time</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-0.5 sm:mb-1">Instant Booking</h4>
                  <p className="text-xs sm:text-sm text-gray-400">Book nearby trucks with one tap</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-0.5 sm:mb-1">Secure Payments</h4>
                  <p className="text-xs sm:text-sm text-gray-400">Safe and transparent pricing</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-0.5 sm:mb-1">Easy Communication</h4>
                  <p className="text-xs sm:text-sm text-gray-400">Chat with drivers and support instantly</p>
                </div>
              </div>
            </div>

            {/* App Store Badges - Placeholder */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <div className="px-5 py-2.5 sm:px-6 sm:py-3 bg-white text-black rounded-xl font-semibold flex items-center gap-2 sm:gap-3 cursor-not-allowed opacity-50">
                <FaAppStore size={24} />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </div>
              <div className="px-5 py-2.5 sm:px-6 sm:py-3 bg-white text-black rounded-xl font-semibold flex items-center gap-2 sm:gap-3 cursor-not-allowed opacity-50">
                <FaGooglePlay size={24} />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
              * Apps will be available soon. Stay tuned!
            </p>
          </div>

          {/* Phone Mockup Placeholder */}
          <div className="w-full flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-64 sm:w-80 h-[400px] sm:h-[600px] bg-gradient-to-br from-gray-800 to-black rounded-[2rem] sm:rounded-[3rem] border-8 border-gray-900 shadow-2xl p-2 sm:p-4 flex items-center justify-center">
                <div className="w-full h-full bg-white rounded-[1.5rem] sm:rounded-[2rem] flex flex-col items-center justify-center p-4 sm:p-8 text-black relative">
                  {/* Notch */}
                  <div className="absolute top-4 sm:top-8 left-1/2 -translate-x-1/2 w-20 sm:w-32 h-4 sm:h-6 bg-black rounded-full"></div>

                  {/* App Preview */}
                  <div className="mt-8 sm:mt-12 text-center w-full">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                      <span className="text-white text-lg sm:text-2xl font-bold"><img src={IMAGE_PATHS.LOGO_SMALL} className="" alt={SITE_NAME} /></span>
                    </div>
                    <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">LODI App</h3>
                    <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-8">Your logistics companion</p>

                    {/* Feature Icons */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-8">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-1 sm:mb-2">
                          <span>🚚</span>
                        </div>
                        <span className="text-xs">Track</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-1 sm:mb-2">
                          <span>📍</span>
                        </div>
                        <span className="text-xs">Book</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-1 sm:mb-2">
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
