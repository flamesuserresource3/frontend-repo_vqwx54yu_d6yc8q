import React from 'react';
import { Bolt, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center bg-yellow-400 text-black rounded-md w-8 h-8">
              <Bolt className="w-5 h-5" />
            </span>
            <span className="text-white font-extrabold tracking-tight text-lg">BLINK</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-white/80 hover:text-white transition">Features</a>
            <a href="#roles" className="text-sm text-white/80 hover:text-white transition">Roles</a>
            <a href="#download" className="text-sm text-white/80 hover:text-white transition">Download</a>
            <a href="#contact" className="text-sm text-white/80 hover:text-white transition">Contact</a>
            <a href="#get-started" className="inline-flex items-center gap-2 bg-yellow-400 text-black font-semibold px-4 py-2 rounded-md hover:bg-yellow-300 transition">
              Get Started
            </a>
          </nav>

          <button aria-label="Open menu" className="md:hidden text-white" onClick={() => setOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 bg-black/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <a href="#home" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                <span className="inline-flex items-center justify-center bg-yellow-400 text-black rounded-md w-8 h-8">
                  <Bolt className="w-5 h-5" />
                </span>
                <span className="text-white font-extrabold tracking-tight text-lg">BLINK</span>
              </a>
              <button aria-label="Close menu" className="text-white" onClick={() => setOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="mt-6 flex flex-col gap-4">
              <a href="#features" className="text-white/90" onClick={() => setOpen(false)}>Features</a>
              <a href="#roles" className="text-white/90" onClick={() => setOpen(false)}>Roles</a>
              <a href="#download" className="text-white/90" onClick={() => setOpen(false)}>Download</a>
              <a href="#contact" className="text-white/90" onClick={() => setOpen(false)}>Contact</a>
              <a href="#get-started" className="inline-flex items-center justify-center bg-yellow-400 text-black font-semibold px-4 py-2 rounded-md hover:bg-yellow-300 transition" onClick={() => setOpen(false)}>
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
