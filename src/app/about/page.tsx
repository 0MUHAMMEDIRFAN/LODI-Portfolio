export default function About() {
  return (
    <section className="min-h-screen py-16 px-4 sm:px-8 lg:px-24 bg-white text-black">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">About LODI</h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8">
          LODI is revolutionizing logistics by connecting return trucks with loads, reducing empty miles, and maximizing profits for drivers and businesses. Our mission is to make logistics smarter, greener, and more profitable for everyone.
        </p>
        <div className="grid sm:grid-cols-2 gap-8 text-left">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
            <p className="text-gray-700 mb-4">Founded by logistics experts and tech innovators, LODI was born out of a need to solve inefficiencies in the trucking industry. Today, we serve thousands of drivers and hundreds of corporations.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p className="text-gray-700 mb-4">Empower drivers, optimize routes, and help businesses save money while reducing environmental impact. We believe in a future where every truck runs full and every shipment is tracked in real time.</p>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-black text-white rounded-xl p-6 w-48 shadow-lg">
              <div className="w-16 h-16 bg-white rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-black text-2xl font-bold">A</span>
              </div>
              <div className="font-bold">Alex</div>
              <div className="text-sm text-gray-300">CEO</div>
            </div>
            <div className="bg-black text-white rounded-xl p-6 w-48 shadow-lg">
              <div className="w-16 h-16 bg-white rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-black text-2xl font-bold">S</span>
              </div>
              <div className="font-bold">Sara</div>
              <div className="text-sm text-gray-300">CTO</div>
            </div>
            <div className="bg-black text-white rounded-xl p-6 w-48 shadow-lg">
              <div className="w-16 h-16 bg-white rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-black text-2xl font-bold">M</span>
              </div>
              <div className="font-bold">Mike</div>
              <div className="text-sm text-gray-300">Lead Engineer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
