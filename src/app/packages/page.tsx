// pages/gudi-padwa-offer.jsx
import Link from 'next/link';
import Navbar from '../_components/Navbar';
import { Rocket, Globe, Zap, Code, Database, RefreshCw, BarChart2, Shield, Clock, Calendar } from 'lucide-react';

export default function page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div>
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#5D213B] to-[#c5487e] text-white py-20 px-4 text-center ">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="block mb-2">Tech Solutions Packages</span>
            <span className="text-2xl md:text-3xl font-light">Launch Your Dream Project With Us!</span>
          </h1>
          <p className="text-xl mb-8">Customized tech packages designed for startups and growing businesses</p>
          <Link href="#packages" className="bg-white text-orange-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300 inline-flex items-center gap-2">
            <Rocket className="w-5 h-5" />
            View Packages
          </Link>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Tech Packages</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Package 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#5D213B] hover:shadow-xl transition duration-300 group">
            <div className="bg-[#5D213B] text-white py-4 px-6">
              <div className="flex items-center gap-3">
                <Globe className="w-6 h-6" />
                <h3 className="text-xl font-bold">Basic Website Package</h3>
              </div>
              <div className="flex items-end mt-2">
                <span className="text-3xl font-bold">₹18,750</span>
                <span className="ml-auto bg-white text-orange-600 text-sm px-2 py-1 rounded">BEST VALUE</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Zap className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Responsive Website (5 Pages)</span>
                </li>
                <li className="flex items-start gap-2">
                  <BarChart2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>SEO-Friendly Setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Mobile-Optimized Design</span>
                </li>
                <li className="flex items-start gap-2">
                  <Database className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Free Domain & Hosting (1st Year)</span>
                </li>
              </ul>
              <Link href="/getstarted" className="mt-6 block w-full bg-[#5D213B] hover:bg-orange-600 text-white text-center py-2 rounded-lg transition duration-300 flex items-center justify-center gap-2 group-hover:scale-105">
                <Code className="w-4 h-4" />
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
              <div className="flex items-center gap-3">
                <Rocket className="w-6 h-6" />
                <h3 className="text-xl font-bold">MVP Development</h3>
              </div>
              <div className="flex items-end mt-2">
                <span className="text-3xl font-bold">₹1,20,000</span>
                <span className="ml-auto bg-white text-yellow-600 text-sm px-2 py-1 rounded">STARTUP FAVORITE</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Code className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Prototype/MVP Development</span>
                </li>
                <li className="flex items-start gap-2">
                  <Database className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Backend API Development</span>
                </li>
                <li className="flex items-start gap-2">
                  <Globe className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Basic UI/UX Design</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>1 Month Free Support</span>
                </li>
              </ul>
              <Link href="/getstarted" className="mt-6 block w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 text-center py-2 rounded-lg transition duration-300 font-bold flex items-center justify-center gap-2">
                <Rocket className="w-4 h-4" />
                Launch Your MVP
              </Link>
            </div>
          </div>

          {/* Package 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#5D213B] hover:shadow-xl transition duration-300 group">
            <div className="bg-[#5D213B] text-white py-4 px-6">
              <div className="flex items-center gap-3">
                <RefreshCw className="w-6 h-6" />
                <h3 className="text-xl font-bold">Digital Transformation</h3>
              </div>
              <div className="flex items-end mt-2">
                <span className="text-3xl font-bold">Custom Quote</span>
                <span className="ml-auto bg-white text-orange-600 text-sm px-2 py-1 rounded">ENTERPRISE</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <RefreshCw className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Legacy System Upgrade</span>
                </li>
                <li className="flex items-start gap-2">
                  <Database className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Cloud Migration</span>
                </li>
                <li className="flex items-start gap-2">
                  <Calendar className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Free 1-Hour Consultation</span>
                </li>
              </ul>
              <Link href="/getstarted" className="mt-6 block w-full bg-[#5D213B] hover:bg-orange-700 text-white text-center py-2 rounded-lg transition duration-300 flex items-center justify-center gap-2 group-hover:scale-105">
                <RefreshCw className="w-4 h-4" />
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
          <p className="text-xl mb-8">Our team is ready to bring your vision to life</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/getstarted" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition duration-300 flex items-center justify-center gap-2">
              <Rocket className="w-5 h-5" />
              Get Started Today
            </Link>
            {/* <Link href="/portfolio" className="bg-transparent hover:bg-gray-700 border-2 border-white text-white font-bold px-8 py-3 rounded-lg transition duration-300 flex items-center justify-center gap-2">
              <Globe className="w-5 h-5" />
              View Our Work
            </Link> */}
          </div>
        </div>
      </section>

      {/* Bonus Perks */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-500 hover:transform hover:scale-105 transition duration-300">
            <div className="bg-orange-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <BarChart2 className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Comprehensive Analytics</h3>
            <p className="text-gray-600">Google Analytics setup included with all packages</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-500 hover:transform hover:scale-105 transition duration-300">
            <div className="bg-yellow-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Priority Support</h3>
            <p className="text-gray-600">Fast-track scheduling for all our clients</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-500 hover:transform hover:scale-105 transition duration-300">
            <div className="bg-orange-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Maintenance Plans</h3>
            <p className="text-gray-600">Customizable maintenance options available</p>
          </div>
        </div>
      </section>
    </div>
  );
}