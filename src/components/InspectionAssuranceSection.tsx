import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Zap, 
  Wrench, 
  Gauge, 
  Award, 
  FileCheck, 
  Check,
  ChevronRight
} from 'lucide-react';
import { INSPECTION_CATEGORIES } from '../data/mockData';

export const InspectionAssuranceSection: React.FC = () => {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);

  const selectedCategory = INSPECTION_CATEGORIES[activeCategoryIdx] || INSPECTION_CATEGORIES[0];

  return (
    <section id="inspection" className="py-16 sm:py-20 bg-[#0C0D14] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-12">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Rigorous Engineering Standard</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
            The Best Car Deal <span className="emerald-gradient-text">210-Point Quality Check</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400">
            Only the top 8% of pre-owned cars pass our clinical engineering diagnosis. Explore what our master technicians inspect before certification.
          </p>
        </div>

        {/* 4 Guarantees Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="p-4 rounded-2xl bg-[#141520] border border-white/10 space-y-1">
            <div className="text-xs font-bold text-amber-400">100% Non-Accidental</div>
            <p className="text-[11px] text-neutral-400">Chassis pillars and engine aprons verified on laser measurement benches.</p>
          </div>
          <div className="p-4 rounded-2xl bg-[#141520] border border-white/10 space-y-1">
            <div className="text-xs font-bold text-emerald-400">Tamper-Proof Odometer</div>
            <p className="text-[11px] text-neutral-400">Digital mileage validated against authorized brand service network logs.</p>
          </div>
          <div className="p-4 rounded-2xl bg-[#141520] border border-white/10 space-y-1">
            <div className="text-xs font-bold text-sky-400">Zero Water / Flood Damage</div>
            <p className="text-[11px] text-neutral-400">Floorpan, ECU harness, and cabin insulation tested for water ingress.</p>
          </div>
          <div className="p-4 rounded-2xl bg-[#141520] border border-white/10 space-y-1">
            <div className="text-xs font-bold text-purple-400">Clean Legal &amp; RTO Title</div>
            <p className="text-[11px] text-neutral-400">Zero active hypothecation, zero unpaid challans, 100% genuine documentation.</p>
          </div>
        </div>

        {/* Interactive 210-Point Inspection Explorer */}
        <div className="rounded-3xl bg-[#12131C] border border-white/10 p-6 sm:p-8 shadow-2xl">
          
          {/* Category Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-3 border-b border-white/10 scrollbar-none mb-6">
            {INSPECTION_CATEGORIES.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategoryIdx(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center space-x-2 ${
                  activeCategoryIdx === idx
                    ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/20 font-extrabold'
                    : 'bg-[#090A10] border border-white/10 text-neutral-300 hover:text-white'
                }`}
              >
                <span>{cat.name}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  activeCategoryIdx === idx ? 'bg-black text-emerald-400' : 'bg-white/10 text-neutral-400'
                }`}>
                  {cat.points} Pts
                </span>
              </button>
            ))}
          </div>

          {/* Active Inspection Checklist View */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Inspecting Category:
                </span>
                <h3 className="text-xl font-bold text-white font-heading">
                  {selectedCategory.name} ({selectedCategory.points} Critical Checks)
                </h3>
              </div>

              <div className="space-y-2.5 pt-2">
                {selectedCategory.checks.map((check, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-[#090A10] border border-white/5 flex items-start space-x-3 text-xs text-neutral-200 hover:border-emerald-500/30 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{check}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Technical Instrumentation Showcase Card */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#0B0C12] border border-emerald-500/30 space-y-4 shadow-xl">
              <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                Diagnostic Equipment Used:
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-[#141520] border border-white/5 space-y-1">
                  <strong className="text-white block">1. Digital Ultrasonic Paint Gauge</strong>
                  <p className="text-neutral-400 text-[11px]">
                    Scans body panels with 0.1-micron precision to differentiate factory paint from aftermarket body putty.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#141520] border border-white/5 space-y-1">
                  <strong className="text-white block">2. OEM-Level OBD-II Multi-ECU Scanner</strong>
                  <p className="text-neutral-400 text-[11px]">
                    Reads live sensor telemetry from Engine, ABS, Airbag, Battery SOH, and Transmission control units.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#141520] border border-white/5 space-y-1">
                  <strong className="text-white block">3. Laser Wheel &amp; Chassis Alignment Rig</strong>
                  <p className="text-neutral-400 text-[11px]">
                    Ensures millimeter-accurate straight-line steering and high-speed highway balance.
                  </p>
                </div>
              </div>

              <div className="pt-2 text-center">
                <span className="text-[11px] text-emerald-400 font-bold">
                  ✓ Full printable 210-Point PDF report provided with every car purchase
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
