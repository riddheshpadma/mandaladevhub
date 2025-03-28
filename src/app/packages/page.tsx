// pages/gudi-padwa-offer.jsx
import Link from 'next/link';
import Navbar from '../_components/Navbar';

export default function page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div>
      <Navbar />
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#5D213B] to-[#c5487e] text-white py-20 px-4 text-center mt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="block mb-2">Gudi Padwa Tech Launchpad</span>
            <span className="text-2xl md:text-3xl font-light">Launch Your Dream Project This New Year!</span>
          </h1>
          <p className="text-xl mb-8">Celebrate Marathi New Year with exclusive tech packages for startups and businesses</p>
          <Link href="#packages" className="bg-white text-orange-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300 inline-block">
            View Offers
          </Link>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Festive Tech Packages</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Package 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#5D213B] hover:shadow-xl transition duration-300">
            <div className="bg-[#5D213B] text-white py-4 px-6">
              <h3 className="text-xl font-bold">Basic Website Package</h3>
              <div className="flex items-end mt-2">
                <span className="text-3xl font-bold">₹18,750</span>
                <span className="ml-2 line-through text-orange-200">₹25,000</span>
                <span className="ml-auto bg-white text-orange-600 text-sm px-2 py-1 rounded">25% OFF</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Responsive Website (5 Pages)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>SEO-Friendly Setup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Mobile-Optimized Design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Free Domain & Hosting (1st Year)</span>
                </li>
              </ul>
              <Link href="/getstarted" className="mt-6 block w-full bg-[#5D213B] hover:bg-orange-600 text-white text-center py-2 rounded-lg transition duration-300">
                Get Started
              </Link>
            </div>
          </div>

          {/* Package 2 - Highlighted */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-yellow-400 transform hover:scale-105 transition duration-300 relative">
            <div className="absolute top-0 right-0 bg-yellow-400 text-gray-800 px-3 py-1 text-sm font-bold rounded-bl-lg">
              POPULAR
            </div>
            <div className="bg-yellow-500 text-gray-900 py-4 px-6">
              <h3 className="text-xl font-bold">MVP Development</h3>
              <div className="flex items-end mt-2">
                <span className="text-3xl font-bold">₹1,20,000</span>
                <span className="ml-2 line-through text-yellow-800">₹1,50,000</span>
                <span className="ml-auto bg-white text-yellow-600 text-sm px-2 py-1 rounded">20% OFF</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Prototype/MVP Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Backend API Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Basic UI/UX Design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>1 Month Free Support</span>
                </li>
              </ul>
              <Link href="/getstarted" className="mt-6 block w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 text-center py-2 rounded-lg transition duration-300 font-bold">
                Launch Your MVP
              </Link>
            </div>
          </div>

          {/* Package 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#5D213B] hover:shadow-xl transition duration-300">
            <div className="bg-[#5D213B] text-white py-4 px-6">
              <h3 className="text-xl font-bold">Digital Transformation</h3>
              <div className="flex items-end mt-2">
                <span className="text-3xl font-bold">15% OFF</span>
                <span className="ml-auto bg-white text-orange-600 text-sm px-2 py-1 rounded">CUSTOM QUOTE</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Legacy System Upgrade</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Cloud Migration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Free 1-Hour Consultation</span>
                </li>
              </ul>
              <Link href="/contact" className="relative bottom-0 mt-6 block w-full bg-[#5D213B] hover:bg-orange-700 text-white text-center py-2 rounded-lg transition duration-300">
                Transform Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Tech Journey?</h2>
          <p className="text-xl mb-8">Offer valid until 10 April. Limited slots available!</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/getstarted" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition duration-300">
              Claim Your Discount
            </Link>
            {/* <Link href="/portfolio" className="bg-transparent hover:bg-gray-700 border-2 border-white text-white font-bold px-8 py-3 rounded-lg transition duration-300">
              View Our Work
            </Link> */}
          </div>
        </div>
      </section>

      {/* Bonus Perks */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Bonus Festive Perks</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-500">
            <h3 className="text-xl font-bold mb-3">🎁 Free Analytics</h3>
            <p>Google Analytics setup included with all packages</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-500">
            <h3 className="text-xl font-bold mb-3">⚡ Priority Support</h3>
            <p>Fast-track scheduling for Gudi Padwa clients</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-500">
            <h3 className="text-xl font-bold mb-3">🔧 Maintenance Deal</h3>
            <p>10% OFF annual maintenance plans</p>
          </div>
        </div>
      </section>
    </div>
  );
}