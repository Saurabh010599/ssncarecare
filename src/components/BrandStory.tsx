import React, { useState } from 'react';
import { ShieldCheck, Sparkles, Award, ArrowRight, Gauge, Layers, ThermometerSun, Check, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO, STUDIO_EQUIPMENT } from '../data/mockData';

interface BrandStoryProps {
  onOpenBooking: () => void;
}

export const BrandStory: React.FC<BrandStoryProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'mission' | 'equipment' | 'standards'>('mission');

  return (
    <section id="about" className="relative bg-[#0E0E12] py-20 lg:py-28 overflow-hidden border-t border-[#26262B]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-[#5A8FCB]/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-[#D42E2E]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Storytelling & Studio Equipment Showcase */}
          <div className="lg:col-span-5 relative space-y-6">
            
            {/* Primary Visual Studio Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#141418] shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1000&q=85"
                alt="Automotive detailing precision buffing at SN CAR CARE"
                className="w-full h-[380px] sm:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E12] via-[#0E0E12]/30 to-transparent" />

              {/* Float badge 1: Location Chandrapur */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0B0B0D]/90 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">SN CAR CARE Detailing Studio</div>
                  <div className="text-[11px] text-neutral-400">Datala Road, Chandrapur (MH)</div>
                </div>
                <div className="w-9 h-9 rounded-lg bg-[#5A8FCB]/20 border border-[#5A8FCB]/40 flex items-center justify-center text-[#5A8FCB] font-bold text-xs">
                  SN
                </div>
              </div>
            </div>

            {/* Micro Highlights Row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-[#15151A] p-4 border border-white/5 space-y-1">
                <div className="text-xl font-extrabold text-white font-heading">6+ Years</div>
                <div className="text-xs text-neutral-400">Automotive Detailing Experience</div>
              </div>
              <div className="rounded-xl bg-[#15151A] p-4 border border-white/5 space-y-1">
                <div className="text-xl font-extrabold text-[#5A8FCB] font-heading">100% pH Neutral</div>
                <div className="text-xs text-neutral-400">Zero Clear-Coat Damage Guarantee</div>
              </div>
            </div>

          </div>

          {/* Right Column: Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#18181D] border border-white/10 text-xs font-semibold text-[#5A8FCB] uppercase tracking-widest">
              <span>Studio Philosophy &amp; Craft</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              More Than Just <br />
              <span className="electric-blue-gradient-text">A Car Wash</span>
            </h2>

            {/* Core Paragraphs */}
            <div className="space-y-4 text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                At <strong className="text-white font-semibold">SN CAR CARE Detailing Studio</strong>, we believe every vehicle deserves professional attention and premium care.
              </p>
              <p>
                Located in Chandrapur, we specialize in automotive detailing solutions that help maintain appearance, protect paintwork, and enhance the driving experience.
              </p>
              <p className="text-sm sm:text-base text-neutral-400">
                Every service is delivered using quality products, professional equipment, and a commitment to customer satisfaction. We refuse the corner-cutting of typical wash stations: no abrasive cloths, no harsh caustic detergents, and no rushed handoffs.
              </p>
            </div>

            {/* Interactive Tab Switcher */}
            <div className="pt-2">
              <div className="flex border-b border-white/10 space-x-6 text-xs sm:text-sm font-semibold mb-4">
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`pb-2 transition-colors relative ${activeTab === 'mission' ? 'text-[#5A8FCB]' : 'text-neutral-400 hover:text-white'}`}
                >
                  Our Core Standards
                  {activeTab === 'mission' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5A8FCB]" />}
                </button>
                <button
                  onClick={() => setActiveTab('equipment')}
                  className={`pb-2 transition-colors relative ${activeTab === 'equipment' ? 'text-[#5A8FCB]' : 'text-neutral-400 hover:text-white'}`}
                >
                  Studio Grade Equipment
                  {activeTab === 'equipment' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5A8FCB]" />}
                </button>
              </div>

              {activeTab === 'mission' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start space-x-2.5 text-xs sm:text-sm text-neutral-200">
                    <div className="w-5 h-5 rounded-full bg-[#5A8FCB]/20 flex items-center justify-center text-[#5A8FCB] shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span>Two-bucket scratch-less wash protocols</span>
                  </div>
                  <div className="flex items-start space-x-2.5 text-xs sm:text-sm text-neutral-200">
                    <div className="w-5 h-5 rounded-full bg-[#5A8FCB]/20 flex items-center justify-center text-[#5A8FCB] shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span>Digital paint thickness gauge diagnostics</span>
                  </div>
                  <div className="flex items-start space-x-2.5 text-xs sm:text-sm text-neutral-200">
                    <div className="w-5 h-5 rounded-full bg-[#5A8FCB]/20 flex items-center justify-center text-[#5A8FCB] shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span>Dust-controlled indoor ceramic curing bay</span>
                  </div>
                  <div className="flex items-start space-x-2.5 text-xs sm:text-sm text-neutral-200">
                    <div className="w-5 h-5 rounded-full bg-[#5A8FCB]/20 flex items-center justify-center text-[#5A8FCB] shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span>140°C thermal hospital-grade upholstery steam</span>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {STUDIO_EQUIPMENT.map((eq, i) => (
                    <div key={i} className="p-3 rounded-xl bg-[#141418] border border-white/5 space-y-1">
                      <div className="text-xs font-bold text-white">{eq.title}</div>
                      <div className="text-[11px] text-neutral-400 leading-snug">{eq.description}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Action */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#transformations"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center space-x-2 border border-white/10"
              >
                <span>Know Our Story &amp; Results</span>
                <ArrowRight className="w-4 h-4 text-[#5A8FCB]" />
              </a>

              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#5A8FCB] to-[#3B71AC] hover:from-[#6BA0DC] hover:to-[#4A80BB] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-[#5A8FCB]/20"
              >
                Book Studio Appointment
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
