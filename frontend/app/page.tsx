export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-6">
          Voya
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mb-8">
          Travel Made Possible — Done-for-you itineraries and an AI travel buddy in your pocket.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl text-lg font-medium hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Tell Us Your Vibe</h3>
            <p className="text-gray-600">Pick your budget, trip length, and style of travel.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">2. Get Instant Itineraries</h3>
            <p className="text-gray-600">Receive ready-to-go plans with costs and tips.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">3. Travel Smarter</h3>
            <p className="text-gray-600">Ask Voya’s AI concierge questions while you travel.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Be the first to try Voya</h2>
        <p className="text-gray-600 mb-8">Sign up for updates and early access.</p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 px-4 py-3 border rounded-xl"
          />
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition">
            Join Waitlist
          </button>
        </form>
      </section>
    </main>
  );
}
