import React from 'react';
import { Phone, MessageSquare, Navigation, Star, ShieldCheck, Sparkles, CheckCircle2, ChevronDown, Award, Zap } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface HeroProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0B0D] pt-6 pb-16 lg:py-0"
    >
      {/* Cinematic Background Layer with Luxury Lighting */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury car detailing studio background"
          className="w-full h-full object-cover object-center opacity-25 filter brightness-75 scale-105 transform transition-transform duration-1000 ease-out"
        />
        {/* Dark Overlays & Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D] via-[#0B0B0D]/90 to-[#0B0B0D]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-[#0B0B0D]/80" />

        {/* Ambient Studio Rim Lights */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#5A8FCB]/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-0 w-[450px] h-[450px] rounded-full bg-[#D42E2E]/10 blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full carbon-pattern opacity-40 pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Storytelling & Conversion CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Small Label / Studio Tag */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-[#18181D]/90 border border-[#5A8FCB]/30 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#5A8FCB] animate-ping" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#A5C9EB] uppercase">
                CHANDRAPUR'S PREMIUM DETAILING STUDIO
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Premium Car Wash &amp; <br />
              <span className="electric-blue-gradient-text">Auto Detailing Services</span> <br />
              <span className="text-neutral-200">in Chandrapur</span>
            </h1>

            {/* Subheadline */}
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Professional car washing, detailing, polishing, ceramic coating, interior cleaning, and vehicle grooming services designed to keep your vehicle looking showroom fresh.
            </p>

            {/* Trust Row */}
            <div className="pt-2 pb-1 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-neutral-300 border-y border-white/10 py-3">
              <div className="flex items-center space-x-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-white">4.5 Rating</span>
              </div>

              <div className="h-4 w-px bg-neutral-700 hidden sm:block" />

              <div className="flex items-center space-x-1.5 text-neutral-200">
                <Award className="w-4 h-4 text-[#5A8FCB]" />
                <span className="font-semibold text-white">47+ Reviews</span>
                <span className="text-neutral-400">on Google</span>
              </div>

              <div className="h-4 w-px bg-neutral-700 hidden sm:block" />

              <div className="flex items-center space-x-1.5 text-neutral-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="font-medium">Premium Products Used</span>
              </div>
            </div>

            {/* Primary CTA Buttons Row */}
            <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Call Now */}
              <a
                id="hero-call-now"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D42E2E] to-[#B31D1D] hover:from-[#E33B3B] hover:to-[#C22424] text-white font-bold text-sm tracking-wide uppercase shadow-lg shadow-[#D42E2E]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center space-x-2 group"
              >
                <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span>Call Now</span>
              </a>

              {/* WhatsApp Us */}
              <a
                id="hero-whatsapp-us"
                href={`https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${BUSINESS_INFO.whatsappPrefill()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20BE5C] text-white font-bold text-sm tracking-wide uppercase shadow-lg shadow-[#25D366]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center space-x-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp Us</span>
              </a>

              {/* Get Directions */}
              <a
                id="hero-get-directions"
                href={BUSINESS_INFO.location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-[#16161B] hover:bg-[#202027] text-neutral-200 hover:text-white border border-[#2D2D35] hover:border-[#5A8FCB]/50 font-semibold text-sm transition-all flex items-center space-x-2"
              >
                <Navigation className="w-4 h-4 text-[#5A8FCB]" />
                <span>Get Directions</span>
              </a>

              {/* Estimate Tool button */}
              <button
                id="hero-instant-quote"
                onClick={() => onOpenBooking()}
                className="px-4 py-3.5 rounded-xl bg-[#1D222A] hover:bg-[#252C37] text-[#5A8FCB] border border-[#5A8FCB]/30 hover:border-[#5A8FCB] font-semibold text-xs transition-all flex items-center space-x-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Calculate Pricing</span>
              </button>
            </div>

            {/* Studio Address Quick Pin */}
            <div className="text-xs text-neutral-400 flex items-center space-x-2 pt-1">
              <span className="text-[#5A8FCB]">📍 Studio Location:</span>
              <span className="text-neutral-300 font-medium">Datala Road, Opp. Jagannath Baba, Chandrapur (MH 442401)</span>
            </div>

          </div>

          {/* Right Column: Luxury Sports Car Showcase & 4 Floating Glass Cards */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0 flex justify-center items-center">
            
            {/* Visual Glass Stage Frame */}
            <div className="relative w-full max-w-lg rounded-2xl overflow-visible p-1">
              
              {/* Backing Ambient Halo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#5A8FCB]/20 via-transparent to-[#D42E2E]/20 rounded-2xl filter blur-xl transform scale-95" />

              {/* Main Visual Image Card */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#121215] aspect-[4/3] sm:aspect-[16/11] group">
                <img
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=85"
                  alt="High gloss sports car ceramic coating result"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-95 contrast-105"
                />
                
                {/* Surface Polish Light Sweep Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Badge on the car image */}
                <div className="absolute top-3 left-3 bg-[#0B0B0D]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center space-x-1.5 text-xs text-neutral-300 font-medium">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>Showroom Mirror Finish</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-neutral-400 bg-[#0B0B0D]/75 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/5">
                  <span className="text-white font-medium">SN CAR CARE Studio Bay</span>
                  <span className="text-emerald-400 font-semibold">● Live Inspection Ready</span>
                </div>
              </div>

              {/* Floating Glass Card 1: 47+ Happy Customers (Top-Right) */}
              <div className="absolute -top-4 -right-3 sm:-right-6 glass-panel rounded-xl px-4 py-2.5 shadow-xl border border-white/15 flex items-center space-x-3 transform hover:scale-105 transition-transform animate-in fade-in duration-500">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm">
                  ✓
                </div>
                <div>
                  <div className="text-xs font-bold text-white tracking-wide">47+ Happy Customers</div>
                  <div className="text-[10px] text-neutral-400">Verified Google Reviews</div>
                </div>
              </div>

              {/* Floating Glass Card 2: Premium Detailing (Top-Left) */}
              <div className="absolute -top-6 -left-3 sm:-left-6 glass-panel rounded-xl px-4 py-2.5 shadow-xl border border-[#5A8FCB]/30 flex items-center space-x-3 transform hover:scale-105 transition-transform">
                <div className="w-8 h-8 rounded-lg bg-[#5A8FCB]/20 border border-[#5A8FCB]/40 flex items-center justify-center text-[#5A8FCB]">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white tracking-wide">Premium Detailing</div>
                  <div className="text-[10px] text-neutral-400">German Rotary Buffing</div>
                </div>
              </div>

              {/* Floating Glass Card 3: Ceramic Protection (Bottom-Right) */}
              <div className="absolute -bottom-5 -right-3 sm:-right-4 glass-panel rounded-xl px-4 py-2.5 shadow-xl border border-amber-500/30 flex items-center space-x-3 transform hover:scale-105 transition-transform">
                <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white tracking-wide">Ceramic Protection</div>
                  <div className="text-[10px] text-amber-300/80">9H/10H Hydrophobic Shield</div>
                </div>
              </div>

              {/* Floating Glass Card 4: Interior Deep Cleaning (Bottom-Left) */}
              <div className="absolute -bottom-6 -left-3 sm:-left-4 glass-panel rounded-xl px-4 py-2.5 shadow-xl border border-white/15 flex items-center space-x-3 transform hover:scale-105 transition-transform">
                <div className="w-8 h-8 rounded-lg bg-[#D42E2E]/20 border border-[#D42E2E]/40 flex items-center justify-center text-[#FF6B6B]">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white tracking-wide">Interior Deep Cleaning</div>
                  <div className="text-[10px] text-neutral-400">140°C Steam Sanitization</div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="pt-12 lg:pt-8 flex flex-col items-center justify-center text-neutral-500 hover:text-neutral-300 transition-colors">
          <a href="#stats" className="flex flex-col items-center space-y-1 group">
            <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-neutral-400 group-hover:text-white transition-colors">
              Explore Detailing Excellence
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#5A8FCB]" />
          </a>
        </div>

      </div>
    </section>
  );
};
