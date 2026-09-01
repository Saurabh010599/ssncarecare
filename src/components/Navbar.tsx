import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Car, 
  Sparkles, 
  ShieldCheck, 
  Calculator, 
  Layers, 
  Heart, 
  Menu, 
  X, 
  ChevronDown, 
  MessageSquare,
  ArrowRight,
  BadgeCheck
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/mockData';

interface NavbarProps {
  onOpenTestDrive: (carId?: string, carName?: string) => void;
  onOpenSellCar: () => void;
  compareCount: number;
  onOpenCompare: () => void;
  wishlistCount: number;
  onOpenWishlist: () => void;
  selectedCity: string;
  onSelectCity: (city: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenTestDrive,
  onOpenSellCar,
  compareCount,
  onOpenCompare,
  wishlistCount,
  onOpenWishlist,
  selectedCity,
  onSelectCity,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);

  const cities = ['Mumbai', 'Pune', 'Delhi-NCR', 'Bangalore', 'Hyderabad'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Notification / Trust Ticker */}
      <div className="bg-gradient-to-r from-[#12131A] via-[#1E202E] to-[#12131A] border-b border-amber-500/20 text-xs py-2 px-4 text-neutral-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] sm:text-xs">
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30 text-[10px]">
              ✨ FESTIVE DEAL
            </span>
            <span className="text-neutral-200">
              Get <strong className="text-amber-400">Free 1-Yr Comprehensive Warranty</strong> + Free Doorstep Test Drive on all 2021-2024 models!
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1.5 text-neutral-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>210-Point Certified</span>
            </div>
            <span className="text-neutral-600">|</span>
            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="flex items-center space-x-1 text-amber-400 hover:text-amber-300 font-bold transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>{BUSINESS_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#090A0F]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3'
            : 'bg-[#090A0F]/80 backdrop-blur-md border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo */}
            <a href="#hero" className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 p-[1px] shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-[#0E0F17] rounded-[11px] flex items-center justify-center">
                  <Car className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <span className="font-heading text-lg sm:text-xl font-extrabold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                    BEST CAR DEAL
                  </span>
                  <BadgeCheck className="w-4 h-4 text-amber-400 fill-amber-400/20" />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400/90 block -mt-1">
                  Certified Pre-Owned
                </span>
              </div>
            </a>

            {/* City Hub Selector */}
            <div className="relative hidden lg:block">
              <button
                onClick={() => setCityDropdownOpen(!cityDropdownOpen)}
                className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-[#161822] hover:bg-[#1E202E] border border-white/10 text-xs font-semibold text-neutral-300 hover:text-white transition-colors cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Hub: <strong className="text-white">{selectedCity}</strong></span>
                <ChevronDown className="w-3 h-3 text-neutral-400" />
              </button>

              {cityDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 rounded-2xl bg-[#141620] border border-white/15 shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="text-[10px] font-bold uppercase text-neutral-400 px-2 py-1">
                    Select Experience Hub
                  </div>
                  {cities.map((city) => (
                    <button
                      key={city}
                      onClick={() => {
                        onSelectCity(city);
                        setCityDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-colors cursor-pointer ${
                        selectedCity === city
                          ? 'bg-amber-500/20 text-amber-300 font-bold'
                          : 'text-neutral-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span>{city}</span>
                      {selectedCity === city && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-6 text-xs font-semibold text-neutral-300">
              <a href="#inventory" className="hover:text-amber-400 transition-colors">
                Browse Cars (12+)
              </a>
              <a href="#sell-car" className="hover:text-amber-400 transition-colors">
                Sell Your Car
              </a>
              <a href="#inspection" className="hover:text-amber-400 transition-colors">
                210-Pt Inspection
              </a>
              <a href="#calculator" className="hover:text-amber-400 transition-colors">
                EMI Calculator
              </a>
              <a href="#why-us" className="hover:text-amber-400 transition-colors">
                Why Us
              </a>
              <a href="#reviews" className="hover:text-amber-400 transition-colors">
                Reviews
              </a>
              <a href="#hubs" className="hover:text-amber-400 transition-colors">
                Hubs
              </a>
            </nav>

            {/* Desktop Action Buttons & Utilities */}
            <div className="hidden sm:flex items-center space-x-3">
              
              {/* Wishlist Button */}
              <button
                onClick={onOpenWishlist}
                className="relative p-2.5 rounded-xl bg-[#161822] hover:bg-[#1E202E] border border-white/10 text-neutral-300 hover:text-white transition-colors"
                title="Saved Cars Wishlist"
              >
                <Heart className={`w-4 h-4 ${wishlistCount > 0 ? 'fill-red-500 text-red-500' : ''}`} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-[9px] font-bold text-white flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Comparison Drawer Trigger */}
              {compareCount > 0 && (
                <button
                  onClick={onOpenCompare}
                  className="relative px-3 py-2 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 hover:bg-amber-500/30 text-xs font-bold flex items-center space-x-1.5 transition-all animate-pulse"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Compare ({compareCount})</span>
                </button>
              )}

              {/* Sell Car CTA */}
              <button
                onClick={onOpenSellCar}
                className="px-4 py-2.5 rounded-xl bg-[#1C1E2A] hover:bg-[#252838] border border-white/15 text-white text-xs font-bold transition-all hover:border-amber-400/40 cursor-pointer"
              >
                Sell Your Car
              </button>

              {/* Primary Book Test Drive CTA */}
              <button
                onClick={() => onOpenTestDrive()}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black text-xs font-extrabold shadow-lg shadow-amber-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center space-x-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 fill-black" />
                <span>Book Test Drive</span>
              </button>

            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex sm:hidden items-center space-x-2">
              {wishlistCount > 0 && (
                <button
                  onClick={onOpenWishlist}
                  className="relative p-2 rounded-xl bg-[#161822] text-neutral-300"
                >
                  <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                  <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-red-500 text-[8px] font-bold text-white flex items-center justify-center">
                    {wishlistCount}
                  </span>
                </button>
              )}

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-[#161822] border border-white/10 text-neutral-200"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-[#0F1018] border-b border-white/15 px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
            {/* City Selector in Mobile */}
            <div className="p-3 rounded-xl bg-[#161824] border border-white/10">
              <div className="text-[10px] uppercase font-bold text-neutral-400 mb-1.5 flex items-center space-x-1">
                <MapPin className="w-3 h-3 text-amber-400" />
                <span>Select Your City Hub:</span>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {cities.map((city) => (
                  <button
                    key={city}
                    onClick={() => {
                      onSelectCity(city);
                    }}
                    className={`py-1.5 px-2 rounded-lg text-center text-xs font-semibold ${
                      selectedCity === city
                        ? 'bg-amber-500 text-black font-bold'
                        : 'bg-[#0A0B10] text-neutral-300'
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Nav Links */}
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
              <a
                href="#inventory"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-[#161824] text-neutral-200 hover:text-amber-400"
              >
                🚗 Browse Cars
              </a>
              <a
                href="#sell-car"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSellCar();
                }}
                className="p-3 rounded-xl bg-[#161824] text-neutral-200 hover:text-amber-400"
              >
                💰 Sell Your Car
              </a>
              <a
                href="#inspection"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-[#161824] text-neutral-200 hover:text-amber-400"
              >
                🛡️ 210-Pt Report
              </a>
              <a
                href="#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-[#161824] text-neutral-200 hover:text-amber-400"
              >
                🧮 EMI Calculator
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-[#161824] text-neutral-200 hover:text-amber-400"
              >
                ⭐ 4.9★ Reviews
              </a>
              <a
                href="#hubs"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-[#161824] text-neutral-200 hover:text-amber-400"
              >
                📍 Experience Hubs
              </a>
            </div>

            {/* Action Buttons in Mobile */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTestDrive();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-4 h-4 fill-black" />
                <span>Book Doorstep Test Drive</span>
              </button>

              <a
                href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                className="w-full py-2.5 rounded-xl bg-[#1C1E2A] text-neutral-200 text-xs font-bold flex items-center justify-center space-x-2 border border-white/10"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Concierge ({BUSINESS_CONFIG.phone})</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
