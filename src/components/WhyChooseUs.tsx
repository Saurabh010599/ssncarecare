import React from 'react';
import { ShieldCheck, BadgePercent, Sparkles, Flame, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/mockData';

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBooking }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#5A8FCB]" />;
      case 'BadgePercent':
        return <BadgePercent className="w-6 h-6 text-emerald-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-400" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-[#FF6B6B]" />;
      case 'HeartHandshake':
      default:
        return <HeartHandshake className="w-6 h-6 text-[#A5C9EB]" />;
    }
  };

  return (
    <section id="why-us" className="relative bg-[#0E0E12] py-20 lg:py-28 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-[#5A8FCB]/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-[#D42E2E]/10 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 studio-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#18181D] border border-white/10 text-xs font-semibold text-[#5A8FCB] uppercase tracking-widest">
            <span>The Detailing Standard</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Why Vehicle Owners Trust <br />
            <span className="electric-blue-gradient-text">SN Car Care Studio</span>
          </h2>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            Detailing expertise combined with premium products and customer-focused service.
          </p>
        </div>

        {/* 5 Premium Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={item.id}
              className={`relative rounded-2xl bg-gradient-to-b from-[#18181E] to-[#121216] border border-[#2B2B36] p-7 sm:p-8 hover:border-[#5A8FCB]/50 transition-all duration-300 group shadow-xl hover:shadow-2xl hover:shadow-[#5A8FCB]/10 flex flex-col justify-between ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0B0B0D] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-[#5A8FCB]/40 transition-all duration-300 shadow-inner">
                  {getIcon(item.iconName)}
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 group-hover:border-[#5A8FCB]/30 group-hover:text-white transition-colors">
                  {item.highlightStat}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-[#5A8FCB] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                  {item.shortDesc}
                </p>
                <div className="pt-2 text-xs text-neutral-400 leading-relaxed border-t border-white/5">
                  {item.detail}
                </div>
              </div>

              <div className="pt-6 mt-4 flex items-center space-x-2 text-xs font-semibold text-neutral-400 group-hover:text-[#5A8FCB] transition-colors">
                <CheckCircle2 className="w-4 h-4 text-[#5A8FCB]" />
                <span>Verified Studio Practice</span>
              </div>

              {/* Shimmer Accent on Hover */}
              <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#5A8FCB]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}

          {/* Quick Studio Promise Highlight Card */}
          <div className="rounded-2xl bg-gradient-to-br from-[#1F1820] via-[#16161B] to-[#121620] border border-[#5A8FCB]/30 p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Zero Risk Guarantee</span>
              </div>
              <h3 className="text-xl font-black text-white">
                Showroom Handoff Inspection
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Before delivering your vehicle, we conduct a joint walk-around inspection under our high-CRI studio lights to ensure zero missed spots, spotless glass, and pristine tires.
              </p>
            </div>

            <div className="pt-6">
              <button
                onClick={onOpenBooking}
                className="w-full py-3 rounded-xl bg-[#5A8FCB] hover:bg-[#4A80BB] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-lg shadow-[#5A8FCB]/20"
              >
                <span>Book Your Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
