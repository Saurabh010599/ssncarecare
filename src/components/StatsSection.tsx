import React from 'react';
import { Star, ShieldCheck, Sparkles, Award } from 'lucide-react';
import { STATS, BUSINESS_INFO } from '../data/mockData';

export const StatsSection: React.FC = () => {
  return (
    <section id="stats" className="relative bg-[#0B0B0D] py-14 border-y border-[#26262B] overflow-hidden">
      {/* Background Subtle Accent Gradients */}
      <div className="absolute inset-0 studio-grid opacity-30 pointer-events-none" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#C9CBCF]/40 to-transparent" />
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#5A8FCB]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Subtle Section Tagline */}
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-semibold">
            Chandrapur’s Most Trusted Auto Care Benchmark
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl bg-gradient-to-b from-[#151518] to-[#0E0E11] p-6 sm:p-7 border border-[#2A2A32] hover:border-[#5A8FCB]/50 transition-all duration-300 group shadow-lg hover:shadow-2xl hover:shadow-[#5A8FCB]/10 flex flex-col justify-between"
            >
              {/* Chrome Top Border Glow */}
              <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-[#5A8FCB]/60 transition-all" />

              <div className="flex items-center justify-between mb-4">
                <div className="text-xs font-mono font-medium text-neutral-500 uppercase tracking-wider">
                  0{idx + 1} // STUDIO METRIC
                </div>
                {idx === 0 && <Award className="w-5 h-5 text-[#5A8FCB]" />}
                {idx === 1 && <Star className="w-5 h-5 text-amber-400 fill-amber-400" />}
                {idx === 2 && <ShieldCheck className="w-5 h-5 text-emerald-400" />}
                {idx === 3 && <Sparkles className="w-5 h-5 text-[#FF6B6B]" />}
              </div>

              {/* Big Stat Value */}
              <div className="space-y-1 my-2">
                <div
                  className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-heading group-hover:scale-105 transition-transform duration-300 origin-left"
                >
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base font-bold text-neutral-200 group-hover:text-[#5A8FCB] transition-colors">
                  {stat.label}
                </div>
              </div>

              {/* Sublabel */}
              <div className="pt-2 border-t border-white/5 text-xs text-neutral-400 font-medium">
                {stat.sublabel}
              </div>

              {/* Bottom Subtle Corner Glow */}
              <div className="absolute bottom-1 right-1 w-8 h-8 bg-[#5A8FCB]/5 rounded-br-xl rounded-tl-2xl pointer-events-none group-hover:bg-[#5A8FCB]/15 transition-all" />
            </div>
          ))}
        </div>

        {/* Live Studio Trust Bar */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Operating with multi-stage water filtration &amp; German laboratory chemicals</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-neutral-500">Certified by:</span>
            <span className="text-neutral-300 font-semibold tracking-wider uppercase">Meguiar’s &bull; Koch-Chemie &bull; Rupes</span>
          </div>
        </div>

      </div>
    </section>
  );
};
