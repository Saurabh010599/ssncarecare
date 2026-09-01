import React, { useState } from 'react';
import { 
  Search, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Flame, 
  Calendar, 
  Gauge, 
  Fuel, 
  Layers, 
  Phone,
  MessageSquare,
  Award
} from 'lucide-react';
import { FilterState, CarItem } from '../types';
import { BUSINESS_CONFIG, CARS_INVENTORY } from '../data/mockData';

interface HeroProps {
  onSearchApply: (filters: Partial<FilterState>) => void;
  onOpenTestDrive: (carId?: string, carName?: string) => void;
  onSelectCar: (car: CarItem) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSearchApply,
  onOpenTestDrive,
  onSelectCar,
}) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedBudget, setSelectedBudget] = useState<number>(0);
  const [selectedBodyType, setSelectedBodyType] = useState<string>('All');
  const [selectedMake, setSelectedMake] = useState<string>('All');

  const spotlightCar = CARS_INVENTORY[0]; // BMW X1 or featured car

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchApply({
      searchQuery: searchKeyword,
      budgetMax: selectedBudget,
      bodyType: selectedBodyType === 'All' ? '' : selectedBodyType,
      make: selectedMake === 'All' ? '' : selectedMake,
    });
    const el = document.getElementById('inventory');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const budgetOptions = [
    { label: 'All Budgets', value: 0 },
    { label: 'Under ₹15L', value: 1500000 },
    { label: '₹15L – ₹25L', value: 2500000 },
    { label: '₹25L – ₹40L', value: 4000000 },
    { label: 'Luxury ₹40L+', value: 6000000 },
  ];

  const bodyTypes = ['All', 'SUV', 'Luxury', 'Sedan', 'Compact SUV', 'EV'];

  return (
    <div id="hero" className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden pt-6 pb-16 bg-[#090A0F]">
      
      {/* Background Ambience & Lighting */}
      <div className="absolute inset-0 radial-gold-glow pointer-events-none opacity-80" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 luxury-grid opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Main Grid: Headline + Search Form & Spotlight Car */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Brand Headline, Trust Pillars, & Dynamic Search (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 via-[#1F202D] to-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold shadow-lg shadow-amber-500/10">
              <Sparkles className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>India’s Most Trusted Certified Pre-Owned Dealership</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight font-heading">
                Find The <span className="gold-gradient-text">Best Deal</span> On 100% Certified Cars.
              </h1>
              <p className="text-sm sm:text-base text-neutral-300 max-w-2xl leading-relaxed font-normal">
                Skip the dealership markups and uncertain history. Every second-hand car at <strong className="text-white">Best Car Deal</strong> is backed by a <span className="text-amber-400 font-semibold">210-Point Technical Check</span>, 1-Year Pan-India Warranty, and 7-Day No-Questions-Asked Money Back Guarantee.
              </p>
            </div>

            {/* 4 Trust Micro-Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
              <div className="p-2.5 rounded-xl bg-[#141520] border border-white/10 flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-[11px] font-bold text-neutral-200">210+ Inspection Points</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#141520] border border-white/10 flex items-center space-x-2">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-[11px] font-bold text-neutral-200">1-Year Warranty</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#141520] border border-white/10 flex items-center space-x-2">
                <Zap className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="text-[11px] font-bold text-neutral-200">7-Day Money Back</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#141520] border border-white/10 flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-[11px] font-bold text-neutral-200">0% Down Payment</span>
              </div>
            </div>

            {/* Dynamic Quick Search Engine Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#12131C]/90 backdrop-blur-xl border border-white/15 shadow-2xl space-y-4">
              
              {/* Body Type Filter Tabs */}
              <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
                {bodyTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedBodyType(type)}
                    className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer ${
                      selectedBodyType === type
                        ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                        : 'bg-[#1A1C28] text-neutral-400 hover:text-white hover:bg-[#252838]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              {/* Main Search Controls */}
              <form onSubmit={handleHeroSearch} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
                  
                  {/* Search Input */}
                  <div className="sm:col-span-5 relative">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                    <input
                      type="text"
                      placeholder="Search car (e.g. BMW, Thar, Creta, Sunroof)..."
                      value={searchKeyword}
                      onChange={(e) => setSearchKeyword(e.target.value)}
                      className="w-full pl-10 pr-3 py-3 rounded-xl bg-[#090A10] border border-white/10 text-xs text-white placeholder:text-neutral-500 focus:border-amber-400 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Budget Dropdown */}
                  <div className="sm:col-span-4">
                    <select
                      value={selectedBudget}
                      onChange={(e) => setSelectedBudget(Number(e.target.value))}
                      className="w-full p-3 rounded-xl bg-[#090A10] border border-white/10 text-xs text-white focus:border-amber-400 focus:outline-none"
                    >
                      {budgetOptions.map((b) => (
                        <option key={b.label} value={b.value} className="bg-[#12131C] text-white">
                          {b.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Search Submit CTA */}
                  <div className="sm:col-span-3">
                    <button
                      type="submit"
                      className="w-full h-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center space-x-1.5 shadow-lg shadow-amber-500/30 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    >
                      <span>Find Cars</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

                {/* Quick Shortcuts */}
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-neutral-400 pt-1">
                  <span className="text-neutral-500">Popular Searches:</span>
                  {['Under ₹15 Lakh', 'Automatic Diesel SUV', 'Electric Cars', 'BMW Luxury', 'Panoramic Sunroof'].map(
                    (tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => {
                          if (tag.includes('Under ₹15')) setSelectedBudget(1500000);
                          else if (tag.includes('Automatic')) setSearchKeyword('Automatic');
                          else if (tag.includes('Electric')) setSelectedBodyType('EV');
                          else if (tag.includes('BMW')) setSearchKeyword('BMW');
                          else if (tag.includes('Sunroof')) setSearchKeyword('Sunroof');
                        }}
                        className="px-2 py-0.5 rounded-lg bg-white/5 hover:bg-white/10 hover:text-amber-300 text-neutral-300 transition-colors cursor-pointer"
                      >
                        {tag}
                      </button>
                    )
                  )}
                </div>
              </form>

            </div>

          </div>

          {/* Right Column: Featured Spotlight Car Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-[#141520] border border-amber-500/30 p-5 shadow-2xl shadow-black/80 space-y-4 group">
              
              {/* Badge strip */}
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-bold text-[11px] border border-amber-500/40 flex items-center space-x-1">
                  <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>Spotlight Deal of the Day</span>
                </span>
                <span className="text-xs font-bold text-emerald-400 flex items-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>208/210 Passed</span>
                </span>
              </div>

              {/* Spotlight Image with Zoom Effect */}
              <div 
                className="relative h-56 sm:h-64 rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => onSelectCar(spotlightCar)}
              >
                <img
                  src={spotlightCar.images[0]}
                  alt={spotlightCar.model}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Floating Image Badges */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                  <span className="px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md font-semibold">
                    {spotlightCar.location}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-amber-500/80 backdrop-blur-md text-black font-extrabold">
                    Save ₹{(spotlightCar.originalNewPrice - spotlightCar.price).toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Title & Price */}
              <div className="space-y-1">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {spotlightCar.make} {spotlightCar.model}
                  </h3>
                  <div className="text-right">
                    <span className="text-xs text-neutral-400 line-through mr-1.5">
                      ₹{spotlightCar.originalNewPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xl font-black text-amber-400 font-heading">
                      ₹{spotlightCar.price.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-neutral-400 line-clamp-1">
                  {spotlightCar.variant} &bull; {spotlightCar.ownership}
                </p>
              </div>

              {/* Quick Specs Grid */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 rounded-xl bg-[#090A10] border border-white/5">
                  <div className="text-[10px] text-neutral-500">Year &amp; KM</div>
                  <div className="font-bold text-neutral-200 font-mono-num">{spotlightCar.year} &bull; {spotlightCar.kms.toLocaleString()} km</div>
                </div>
                <div className="p-2 rounded-xl bg-[#090A10] border border-white/5">
                  <div className="text-[10px] text-neutral-500">Fuel &amp; Trans</div>
                  <div className="font-bold text-neutral-200">{spotlightCar.fuel} &bull; {spotlightCar.transmission}</div>
                </div>
                <div className="p-2 rounded-xl bg-[#090A10] border border-white/5">
                  <div className="text-[10px] text-neutral-500">Starting EMI</div>
                  <div className="font-bold text-amber-400 font-mono-num">₹{spotlightCar.emiStarting.toLocaleString()}/mo</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => onSelectCar(spotlightCar)}
                  className="py-2.5 px-3 rounded-xl bg-[#1C1E2A] hover:bg-[#252838] border border-white/10 text-xs font-bold text-white transition-colors cursor-pointer"
                >
                  View 210-Pt Report
                </button>
                <button
                  type="button"
                  onClick={() => onOpenTestDrive(spotlightCar.id, `${spotlightCar.make} ${spotlightCar.model}`)}
                  className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-xs uppercase tracking-wider shadow-md shadow-amber-500/20 transition-all cursor-pointer flex items-center justify-center space-x-1"
                >
                  <Sparkles className="w-3.5 h-3.5 fill-black" />
                  <span>Book Test Drive</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
