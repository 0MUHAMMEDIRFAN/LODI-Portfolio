export default function Pricing() {
  return (
    <section className="min-h-screen py-16 px-4 sm:px-8 lg:px-24 bg-white text-black">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Pricing</h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8">
          Simple, transparent pricing for businesses and drivers. No hidden fees.
        </p>
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="bg-black text-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Business Plan</h2>
            <p className="mb-4">For companies booking loads and optimizing logistics.</p>
            <div className="text-3xl font-bold mb-2">$99/mo</div>
            <ul className="text-left text-sm mb-4 list-disc list-inside">
              <li>Unlimited bookings</li>
              <li>Real-time tracking</li>
              <li>Dedicated support</li>
              <li>Analytics dashboard</li>
            </ul>
            <button className="w-full py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-all">Start Free Trial</button>
          </div>
          <div className="bg-white border border-black rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Driver Plan</h2>
            <p className="mb-4">For drivers looking for more loads and higher profits.</p>
            <div className="text-3xl font-bold mb-2">$0/mo</div>
            <ul className="text-left text-sm mb-4 list-disc list-inside">
              <li>Access to load marketplace</li>
              <li>Instant payments</li>
              <li>Community support</li>
              <li>Mobile app access</li>
            </ul>
            <button className="w-full py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all">Join Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}
