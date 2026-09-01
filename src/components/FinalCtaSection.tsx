import React from 'react';
import { Phone, MessageSquare, Sparkles, ShieldCheck, CheckCircle2, Star, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface FinalCtaSectionProps {
  onOpenBooking: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative bg-[#0E0E12] py-24 lg:py-32 overflow-hidden border-t border-[#26262B]">
      {/* Brushed Metallic & Studio Rim Light Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#121216] via-[#1A1A22] to-[#121216] opacity-95" />
      <div className="absolute inset-0 studio-grid opacity-20 pointer-events-none" />
      
      {/* High-voltage studio glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#5A8FCB]/15 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-[#D42E2E]/10 blur-[130px] pointer-events-none rounded-full" />

      {/* Chrome Top & Bottom Borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9CBCF]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5A8FCB]/40 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Top Studio Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#1A1A22] border border-[#5A8FCB]/30 shadow-inner">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-bold tracking-[0.2em] text-[#A5C9EB] uppercase">
            Transform Your Vehicle Today
          </span>
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
          Ready To Give Your Car <br />
          <span className="electric-blue-gradient-text">The Care It Deserves?</span>
        </h2>

        {/* Subheadline */}
        <p className="text-neutral-300 text-base sm:text-xl max-w-2xl mx-auto font-normal leading-relaxed">
          Book your next detailing session today. Experience showroom depth, hydrophobic paint shielding, and germ-free steam extraction in Chandrapur.
        </p>

        {/* Big Phone Number Display */}
        <div className="py-2">
          <div className="inline-flex flex-col items-center justify-center p-6 rounded-2xl bg-[#0B0B0D]/85 border border-[#3A3A4A] shadow-2xl backdrop-blur-md">
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-1">
              Direct Studio Line &bull; Chandrapur
            </span>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="text-2xl sm:text-4xl font-extrabold text-white hover:text-[#5A8FCB] transition-colors font-heading tracking-wider flex items-center space-x-3"
            >
              <Phone className="w-6 h-6 text-[#5A8FCB] animate-pulse" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* Primary High-Conversion Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          {/* Call Now */}
          <a
            id="cta-call-now"
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#D42E2E] to-[#B31D1D] hover:from-[#E33B3B] hover:to-[#C22424] text-white font-bold text-sm sm:text-base tracking-wide uppercase shadow-xl shadow-[#D42E2E]/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center space-x-2.5"
          >
            <Phone className="w-5 h-5" />
            <span>Call Now</span>
          </a>

          {/* WhatsApp Us */}
          <a
            id="cta-whatsapp-us"
            href={`https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${BUSINESS_INFO.whatsappPrefill()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20BE5C] text-white font-bold text-sm sm:text-base tracking-wide uppercase shadow-xl shadow-[#25D366]/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center space-x-2.5"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            <span>WhatsApp Us</span>
          </a>

          {/* Calculate & Book Slot Modal Trigger */}
          <button
            id="cta-book-slot"
            onClick={onOpenBooking}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#5A8FCB] to-[#3B71AC] hover:from-[#6BA0DC] hover:to-[#4A80BB] text-white font-bold text-sm sm:text-base tracking-wide uppercase shadow-xl shadow-[#5A8FCB]/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center space-x-2"
          >
            <Calendar className="w-5 h-5" />
            <span>Calculate Pricing &amp; Book</span>
          </button>
        </div>

        {/* Trust Badges Row */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
          <div className="flex items-center space-x-1.5">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-white font-bold">4.5★ Rating on Google (47 Reviews)</span>
          </div>
          <span className="text-neutral-600 hidden sm:inline">&bull;</span>
          <div className="flex items-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-white font-bold">100% Satisfaction Guarantee</span>
          </div>
          <span className="text-neutral-600 hidden sm:inline">&bull;</span>
          <div className="flex items-center space-x-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#5A8FCB]" />
            <span className="text-white font-bold">Same-Day Slots Available</span>
          </div>
        </div>

      </div>
    </section>
  );
};
