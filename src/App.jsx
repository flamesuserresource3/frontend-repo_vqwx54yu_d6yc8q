import React from 'react';
import Navbar from './components/Navbar';
import HeroCover from './components/HeroCover';
import FeatureGrid from './components/FeatureGrid';
import RoleShowcase from './components/RoleShowcase';
import { Download } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-black font-inter">
      <Navbar />
      <HeroCover />
      <FeatureGrid />
      <RoleShowcase />

      {/* Download Section */}
      <section id="download" className="bg-[#0a0a0a] py-16 md:py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl font-extrabold text-white">Download BLINK</h3>
              <p className="mt-3 text-white/70 max-w-xl">Experience the fastest way to get food, groceries, and parcels delivered. Track in real-time with a secure, modern interface.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#" className="inline-flex items-center gap-2 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-300 transition">
                  <Download className="w-5 h-5" />
                  Get on Android
                </a>
                <a href="#" className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-md hover:bg-white/20 transition">
                  <Download className="w-5 h-5" />
                  Get on iOS
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-tr from-yellow-400/40 to-transparent rounded-3xl blur-xl" />
              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="rounded-lg bg-black/60 border border-white/10 p-4">
                    <p className="text-white/60">Average delivery</p>
                    <p className="text-2xl font-bold text-white">24 min</p>
                  </div>
                  <div className="rounded-lg bg-black/60 border border-white/10 p-4">
                    <p className="text-white/60">Cities covered</p>
                    <p className="text-2xl font-bold text-white">120+</p>
                  </div>
                  <div className="rounded-lg bg-black/60 border border-white/10 p-4">
                    <p className="text-white/60">Partner stores</p>
                    <p className="text-2xl font-bold text-white">8k+</p>
                  </div>
                  <div className="rounded-lg bg-black/60 border border-white/10 p-4">
                    <p className="text-white/60">Avg rating</p>
                    <p className="text-2xl font-bold text-white">4.9★</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/70 text-sm">© {new Date().getFullYear()} BLINK. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-white/70 hover:text-white">Privacy</a>
            <a href="#" className="text-white/70 hover:text-white">Terms</a>
            <a href="#" className="text-white/70 hover:text-white">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
