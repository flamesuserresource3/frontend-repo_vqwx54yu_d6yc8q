import React from 'react';
import { MapPin, Search, CreditCard, Bell, Shield, Star } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Real-time Tracking',
    desc: 'Follow your courier on the map from pickup to doorstep with precise ETA updates.'
  },
  {
    icon: Search,
    title: 'Smart Discovery',
    desc: 'Find nearby restaurants and stores with powerful search and filters by category.'
  },
  {
    icon: CreditCard,
    title: 'Secure Payments',
    desc: 'Pay with cards, mobile money, or cash on delivery. Your data stays encrypted.'
  },
  {
    icon: Bell,
    title: 'Live Notifications',
    desc: 'Instant alerts for order accepted, picked up, on the way, and delivered.'
  },
  {
    icon: Shield,
    title: 'Trusted & Safe',
    desc: 'Verified drivers, protected transactions, and anti-fraud safeguards.'
  },
  {
    icon: Star,
    title: 'Ratings & Reviews',
    desc: 'Share feedback with ratings for restaurants and drivers to keep quality high.'
  }
];

export default function FeatureGrid() {
  return (
    <section id="features" className="bg-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Built for speed, safety, and delight</h2>
          <p className="mt-3 text-white/70">Everything you need for food, groceries, and parcel delivery in one app.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-yellow-400/20 border border-yellow-400/30 text-yellow-300">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
