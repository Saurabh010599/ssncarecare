import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, MapPin, Menu, X, Shield, Sparkles, ChevronRight, Star, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Transformations', href: '#transformations' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <>
      {/* Top Studio Micro Banner */}
      <div className="bg-[#111114] border-b border-[#26262B] text-xs py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-neutral-400">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-medium">Studio Open in Chandrapur</span>
            </span>
            <span className="text-neutral-600">|</span>
            <span className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5 text-neutral-500" />
              <span>9:00 AM – 8:30 PM (All 7 Days)</span>
            </span>
            <span className="text-neutral-600">|</span>
            <span className="flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-[#5A8FCB]" />
              <span>Near Datala Road, Jagannath Baba Nagar</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1 text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-semibold text-neutral-200">4.5★</span>
              <span className="text-neutral-400">(47 Google Reviews)</span>
            </span>
            <span className="text-neutral-600">|</span>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="text-[#5A8FCB] hover:text-white font-medium transition-colors flex items-center space-x-1"
            >
              <Phone className="w-3 h-3" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        id="main-navbar"
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0B0D]/90 backdrop-blur-xl border-b border-[#26262B] shadow-2xl py-3'
            : 'bg-[#0B0B0D]/60 backdrop-blur-md border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#1C1C22] to-[#0E0E12] border border-[#5A8FCB]/40 flex items-center justify-center shadow-lg group-hover:border-[#5A8FCB] transition-all">
              <span className="font-brand font-bold text-lg tracking-wider text-white">SN</span>
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#D42E2E] border-2 border-[#0B0B0D]"></span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-1.5">
                <span className="font-brand text-lg font-extrabold tracking-wider text-white">
                  SN CAR CARE
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#5A8FCB]/15 text-[#5A8FCB] font-semibold border border-[#5A8FCB]/30 tracking-widest uppercase">
                  Studio
                </span>
              </div>
              <span className="text-[11px] tracking-widest text-neutral-400 uppercase font-medium">
                Keep Your Car Feel New
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-neutral-300 hover:text-white transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#5A8FCB] to-[#D42E2E] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              id="nav-call-btn"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-3.5 py-2 rounded-lg bg-[#18181D] hover:bg-[#202026] text-neutral-200 hover:text-white border border-[#2D2D35] text-xs font-semibold flex items-center space-x-2 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#5A8FCB]" />
              <span>Call Studio</span>
            </a>

            <a
              id="nav-whatsapp-btn"
              href={`https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${BUSINESS_INFO.whatsappPrefill()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 text-xs font-semibold flex items-center space-x-1.5 transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>

            <button
              id="nav-book-btn"
              onClick={() => onOpenBooking()}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#5A8FCB] to-[#3B71AC] hover:from-[#6BA0DC] hover:to-[#4A80BB] text-white text-xs font-bold tracking-wide uppercase shadow-lg shadow-[#5A8FCB]/20 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center space-x-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get Instant Quote</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 rounded-lg bg-[#5A8FCB] text-white text-xs font-bold"
            >
              Quote
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#18181D] border border-[#2D2D35] text-neutral-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0F0F12] border-b border-[#26262B] px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-200 hover:bg-[#1C1C22] flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-neutral-500" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#26262B] grid grid-cols-2 gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="py-2.5 rounded-lg bg-[#18181D] border border-[#2D2D35] text-white text-xs font-semibold flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4 text-[#5A8FCB]" />
                <span>Call Now</span>
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${BUSINESS_INFO.whatsappPrefill()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 rounded-lg bg-[#25D366] text-white text-xs font-bold flex items-center justify-center space-x-1.5"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-[#5A8FCB] to-[#D42E2E] text-white text-sm font-bold uppercase tracking-wider shadow-lg flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Calculate Package Estimate</span>
            </button>
          </div>
        )}
      </header>
    </>
  );
};
