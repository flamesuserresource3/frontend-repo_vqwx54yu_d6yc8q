import React from 'react';
import { User, Truck, Store, Shield } from 'lucide-react';

const roles = [
  {
    icon: User,
    title: 'Customers',
    points: [
      'Onboarding with email, phone, or Google/Apple',
      'Browse menus, add to cart, and checkout',
      'Track drivers live and get push updates'
    ]
  },
  {
    icon: Truck,
    title: 'Drivers',
    points: [
      'Accept or reject delivery requests',
      'Navigate with integrated maps',
      'Mark orders picked-up and delivered'
    ]
  },
  {
    icon: Store,
    title: 'Vendors / Restaurants',
    points: [
      'Manage menus and inventory',
      'Accept orders and update status',
      'View sales and popular items'
    ]
  },
  {
    icon: Shield,
    title: 'Admin',
    points: [
      'Manage users, orders, and disputes',
      'Monitor payments and performance',
      'Access reports and analytics'
    ]
  }
];

export default function RoleShowcase() {
  return (
    <section id="roles" className="bg-gradient-to-b from-black to-[#0a0a0a] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">One platform. Four experiences.</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">BLINK is designed for everyone in the delivery chain with dedicated tools and real-time sync.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map(({ icon: Icon, title, points }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-yellow-400 text-black">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">{title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/75 list-disc list-inside">
                {points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div id="get-started" className="mt-14 flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6">
          <div>
            <h3 className="text-white font-bold text-xl">Ready to move faster?</h3>
            <p className="text-white/80">Join BLINK today and experience delivery at the speed of now.</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="#download" className="inline-flex items-center justify-center bg-yellow-400 text-black font-semibold px-5 py-3 rounded-md hover:bg-yellow-300 transition">
              Download App
            </a>
            <a href="#contact" className="inline-flex items-center justify-center bg-white/10 text-white px-5 py-3 rounded-md hover:bg-white/20 transition">
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
