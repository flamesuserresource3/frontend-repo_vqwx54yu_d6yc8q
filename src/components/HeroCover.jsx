import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <section id="home" className="relative h-[80vh] md:h-[88vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />

      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-yellow-400/10 border border-yellow-400/30 px-3 py-1 mb-4">
            <span className="w-2 h-2 bg-yellow-400 rounded-full" />
            <span className="text-yellow-300 text-xs font-medium tracking-wide">Food • Groceries • Parcels</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Lightning-fast delivery
            <span className="text-yellow-400"> in a BLINK</span>
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl">
            Order from your favorite restaurants and stores or send parcels across town. Track every move in real-time with a secure, modern experience.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#get-started" className="inline-flex justify-center items-center bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-300 transition">
              Get the App
            </a>
            <a href="#features" className="inline-flex justify-center items-center bg-white/10 text-white backdrop-blur px-6 py-3 rounded-md hover:bg-white/20 transition">
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
