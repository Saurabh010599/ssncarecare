import React from 'react';
import { 
  ShieldCheck, 
  RotateCcw, 
  Banknote, 
  Award, 
  Sparkles
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/mockData';

export const QuickTrustStrip: React.FC = () => {
  const assurances = [
    {
      icon: ShieldCheck,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/20',
      title: '210-Point Technical Check',
      subtitle: 'Ultrasonic paint scan, zero structural damage, OBD diagnostics & certified non-accidental guarantee.',
    },
    {
      icon: Award,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10 border-amber-500/20',
      title: '1-Year Pan-India Warranty',
      subtitle: 'Comprehensive coverage for Engine, Turbo, Gearbox & Electricals across 3,500+ authorized workshops.',
    },
    {
      icon: RotateCcw,
      color: 'text-sky-400',
      bg: 'bg-sky-500/10 border-sky-500/20',
      title: '7-Day Money Back Guarantee',
      subtitle: 'Drive it for a week or 500 km. If you are not 100% satisfied, get a full refund without questions.',
    },
    {
      icon: Banknote,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10 border-purple-500/20',
      title: 'Instant 0% Down Payment Loan',
      subtitle: 'Partnered with 18+ banks (HDFC, ICICI, SBI) for pre-approved loans starting from 8.5% interest rate.',
    },
  ];

  return (
    <section className="relative py-12 bg-[#0C0D14] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-widest text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Best Car Deal Assurance</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
            Why 14,800+ Drivers Switched To <span className="gold-gradient-text">Best Car Deal</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400">
            We eliminate every risk associated with buying a pre-owned car with unmatched transparency and legal protection.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {assurances.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative p-5 rounded-2xl bg-[#141520] border border-white/10 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg group"
              >
                <div className={`w-12 h-12 rounded-xl ${item.bg} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="text-base font-bold text-white mb-1.5 font-heading">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>

        {/* Live Dealership Stats Counter Banner */}
        <div className="mt-10 p-6 rounded-3xl bg-gradient-to-r from-[#141522] via-[#1B1D2C] to-[#141522] border border-amber-500/30 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-2 md:pt-0">
              <div className="text-2xl sm:text-3xl font-black text-amber-400 font-heading">
                {BUSINESS_CONFIG.stats.carsSold}
              </div>
              <div className="text-xs text-neutral-400 font-medium mt-0.5">Verified Cars Delivered</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-2xl sm:text-3xl font-black text-white font-heading">
                {BUSINESS_CONFIG.stats.googleRating}
              </div>
              <div className="text-xs text-neutral-400 font-medium mt-0.5">Based on {BUSINESS_CONFIG.stats.verifiedReviews} Reviews</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-heading">
                {BUSINESS_CONFIG.stats.qualityInspection}
              </div>
              <div className="text-xs text-neutral-400 font-medium mt-0.5">Engine &amp; Chassis Checklist</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-2xl sm:text-3xl font-black text-sky-400 font-heading">
                {BUSINESS_CONFIG.stats.banksPartnered}
              </div>
              <div className="text-xs text-neutral-400 font-medium mt-0.5">Instant Financing Approval</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
