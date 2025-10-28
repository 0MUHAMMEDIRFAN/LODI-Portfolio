export default function Contact() {
  return (
    <section className="min-h-screen py-16 px-4 sm:px-8 lg:px-24 bg-white text-black">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8">
          Have questions or want to partner with LODI? Reach out to us below.
        </p>
        <form className="bg-gray-50 rounded-xl p-6 shadow-lg text-left">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
            <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" type="text" id="name" name="name" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
            <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" type="email" id="email" name="email" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
            <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" id="message" name="message" rows={4} required></textarea>
          </div>
          <button type="submit" className="w-full py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all">Send Message</button>
        </form>
        <div className="mt-8 text-left">
          <h2 className="text-xl font-semibold mb-2">Company Info</h2>
          <p className="text-gray-700">Email: info@lodi.com</p>
          <p className="text-gray-700">Phone: +1 234 567 890</p>
          <p className="text-gray-700">Address: 123 LODI Street, Logistics City</p>
        </div>
      </div>
    </section>
  );
}
