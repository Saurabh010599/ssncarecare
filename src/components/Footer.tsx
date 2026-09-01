import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  ArrowRight, 
  Heart, 
  Award,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  Car
} from 'lucide-react';
import { BUSINESS_CONFIG, DEALERSHIP_HUBS } from '../data/mockData';

interface FooterProps {
  onOpenTestDrive: () => void;
  onOpenSellCar: () => void;
  onFilterMake: (make: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenTestDrive,
  onOpenSellCar,
  onFilterMake,
}) => {
  return (
    <footer className="bg-[#07070B] text-neutral-400 text-xs border-t border-white/10 relative">
      
      {/* Top CTA Banner */}
      <div className="border-b border-white/10 bg-gradient-to-r from-[#12131C] via-[#1B1D2C] to-[#12131C] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-amber-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ready for your dream car?</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-extrabold text-white font-heading">
              Test Drive Any Certified Car At Your Doorstep
            </h3>
            <p className="text-xs text-neutral-400">
              100% Free • No Obligation • 210-Point Technical Report Included
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenTestDrive}
              className="py-3 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 transition-all cursor-pointer"
            >
              Book Test Drive Now
            </button>
            <a
              href="#sell-car"
              className="py-3 px-6 rounded-xl bg-[#1F2130] hover:bg-[#2A2D42] border border-white/15 text-white font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Sell Your Car
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
                <Car className="w-5 h-5 text-black" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-lg tracking-wider text-white">
                  BEST CAR <span className="text-amber-400">DEAL</span>
                </span>
                <span className="text-[9px] uppercase tracking-widest text-neutral-400 -mt-1 font-semibold">
                  Certified Pre-Owned Luxury
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              India's premier certified pre-owned automotive brand. Every vehicle undergoes a 210-point clinical diagnosis and comes with a 1-Year Pan-India Warranty and 7-Day Money Back Guarantee.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-lg bg-[#141520] border border-white/10 flex items-center justify-center text-neutral-300 hover:text-amber-400 hover:border-amber-400 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-[#141520] border border-white/10 flex items-center justify-center text-neutral-300 hover:text-amber-400 hover:border-amber-400 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-[#141520] border border-white/10 flex items-center justify-center text-neutral-300 hover:text-amber-400 hover:border-amber-400 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-[#141520] border border-white/10 flex items-center justify-center text-neutral-300 hover:text-amber-400 hover:border-amber-400 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Popular Brands */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-heading">
              Shop by Make
            </h4>
            <ul className="space-y-2 text-xs">
              {['BMW', 'Mercedes-Benz', 'Mahindra', 'Hyundai', 'Tata', 'Toyota', 'Audi'].map((make) => (
                <li key={make}>
                  <button
                    onClick={() => {
                      onFilterMake(make);
                      const el = document.getElementById('inventory');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                  >
                    Used {make} Cars
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience Hubs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-heading">
              Experience Centers
            </h4>
            <ul className="space-y-2 text-xs">
              {DEALERSHIP_HUBS.map((hub) => (
                <li key={hub.id}>
                  <a href="#hubs" className="hover:text-amber-400 transition-colors">
                    {hub.city} Flagship Studio ({hub.carsInStock} in stock)
                  </a>
                </li>
              ))}
              <li>
                <span className="text-emerald-400 font-medium">Doorstep Delivery (Pan-India)</span>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-heading">
              Concierge Desk
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`tel:${BUSINESS_CONFIG.phoneRaw}`} className="text-white font-bold hover:underline font-mono-num">
                  {BUSINESS_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.phoneRaw}?text=Hi%20Best%20Car%20Deal`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  24/7 WhatsApp VIP Desk
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{BUSINESS_CONFIG.email}</span>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Open 7 Days (9:00 AM – 9:00 PM)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Copyright Strip */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} {BUSINESS_CONFIG.brandName} Certified Pre-Owned Automotive India Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center space-x-4">
            <a href="#inspection" className="hover:text-white transition-colors">210-Point Guarantee</a>
            <span>&bull;</span>
            <a href="#faq" className="hover:text-white transition-colors">1-Yr Warranty Policy</a>
            <span>&bull;</span>
            <a href="#faq" className="hover:text-white transition-colors">7-Day Money Back Terms</a>
            <span>&bull;</span>
            <a href="#calculator" className="hover:text-white transition-colors">Loan Disclaimers</a>
          </div>
        </div>

      </div>

      {/* Floating Mobile Bottom Conversion Dock */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0C0D14]/95 backdrop-blur-xl border-t border-amber-500/30 p-2.5 grid grid-cols-4 gap-2 text-center text-[10px] font-bold">
        <a
          href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
          className="p-2 rounded-xl bg-[#141520] border border-white/10 text-white flex flex-col items-center justify-center space-y-0.5"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span>Call</span>
        </a>

        <a
          href={`https://wa.me/${BUSINESS_CONFIG.phoneRaw}?text=Hi%20Best%20Car%20Deal,%20I%20want%20to%20inquire%20about%20a%20certified%20car.`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] flex flex-col items-center justify-center space-y-0.5"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenTestDrive}
          className="p-2 rounded-xl bg-amber-500 text-black flex flex-col items-center justify-center space-y-0.5 font-extrabold"
        >
          <Sparkles className="w-4 h-4 fill-black" />
          <span>Test Drive</span>
        </button>

        <a
          href="#sell-car"
          className="p-2 rounded-xl bg-[#1F202E] border border-white/10 text-neutral-200 flex flex-col items-center justify-center space-y-0.5"
        >
          <Car className="w-4 h-4 text-amber-400" />
          <span>Sell Car</span>
        </a>
      </div>

    </footer>
  );
};
