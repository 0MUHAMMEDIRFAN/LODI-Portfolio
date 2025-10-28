export default function Careers() {
  return (
    <section className="min-h-screen py-16 px-4 sm:px-8 lg:px-24 bg-white text-black">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Careers at LODI</h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8">
          Join our mission to transform logistics. We’re looking for passionate people to help us build the future of transportation.
        </p>
        <div className="grid gap-8">
          <div className="bg-black text-white rounded-xl p-8 shadow-lg text-left">
            <h2 className="text-2xl font-bold mb-2">Frontend Developer</h2>
            <p className="mb-2">Build beautiful, responsive interfaces for our web and mobile apps.</p>
            <div className="text-sm text-gray-300 mb-2">Remote | Full-time</div>
            <button className="py-2 px-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-all">Apply Now</button>
          </div>
          <div className="bg-white border border-black rounded-xl p-8 shadow-lg text-left">
            <h2 className="text-2xl font-bold mb-2">Backend Engineer</h2>
            <p className="mb-2">Design scalable APIs and data systems for logistics optimization.</p>
            <div className="text-sm text-gray-700 mb-2">Remote | Full-time</div>
            <button className="py-2 px-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all">Apply Now</button>
          </div>
          <div className="bg-black text-white rounded-xl p-8 shadow-lg text-left">
            <h2 className="text-2xl font-bold mb-2">Product Manager</h2>
            <p className="mb-2">Lead product strategy and work with cross-functional teams to deliver value.</p>
            <div className="text-sm text-gray-300 mb-2">Remote | Full-time</div>
            <button className="py-2 px-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-all">Apply Now</button>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-2">Our Culture</h2>
          <p className="text-gray-700">We value innovation, collaboration, and diversity. At LODI, you’ll work with talented people who care about making a real impact.</p>
        </div>
      </div>
    </section>
  );
}
