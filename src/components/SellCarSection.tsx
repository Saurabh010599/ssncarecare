import React, { useState } from 'react';
import { 
  Banknote, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Car, 
  ArrowRight, 
  CheckCircle, 
  FileCheck, 
  BadgePercent,
  Calendar,
  Phone,
  User
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BUSINESS_CONFIG } from '../data/mockData';

export const SellCarSection: React.FC = () => {
  const [make, setMake] = useState('Hyundai');
  const [model, setModel] = useState('Creta');
  const [year, setYear] = useState(2022);
  const [fuel, setFuel] = useState('Petrol');
  const [kms, setKms] = useState(25000);
  const [condition, setCondition] = useState<'Excellent' | 'Good' | 'Fair'>('Excellent');
  const [city, setCity] = useState('Mumbai');
  
  // Lead submission states
  const [sellerName, setSellerName] = useState('');
  const [sellerPhone, setSellerPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Dynamic Valuation Algorithm
  const calculateEstimatedValuation = () => {
    let base = 1000000;
    if (make === 'BMW' || make === 'Mercedes-Benz' || make === 'Audi') base = 3200000;
    else if (make === 'Mahindra' || make === 'Tata' || make === 'Toyota') base = 1600000;
    else if (make === 'Hyundai' || make === 'Kia' || make === 'Honda') base = 1200000;
    else base = 700000;

    // Age depreciation
    const age = 2026 - year;
    const ageMultiplier = Math.max(0.45, 1 - age * 0.08);

    // KM adjustment
    const kmMultiplier = Math.max(0.7, 1 - (kms / 100000) * 0.15);

    // Condition
    const condMultiplier = condition === 'Excellent' ? 1.05 : condition === 'Good' ? 0.95 : 0.82;

    const mid = Math.round((base * ageMultiplier * kmMultiplier * condMultiplier) / 10000) * 10000;
    const low = Math.round((mid * 0.94) / 10000) * 10000;
    const high = Math.round((mid * 1.06) / 10000) * 10000;

    return { low, high, mid };
  };

  const valuation = calculateEstimatedValuation();

  const handleBookInspection = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sellerPhone) return;

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });

    const msg = `*Best Car Deal - Sell Car Request*\n\n*Seller:* ${sellerName || 'Guest'}\n*Phone:* ${sellerPhone}\n*Car:* ${year} ${make} ${model} (${fuel})\n*KMs:* ${kms.toLocaleString()} km\n*Condition:* ${condition}\n*Estimated Value:* ₹${valuation.low.toLocaleString('en-IN')} - ₹${valuation.high.toLocaleString('en-IN')}\n*City:* ${city}\n\n_Please schedule free doorstep inspection._`;
    window.open(`https://wa.me/${BUSINESS_CONFIG.phoneRaw}?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="sell-car" className="py-16 sm:py-20 bg-[#0C0D14] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-12">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-widest text-amber-400">
            <Banknote className="w-3.5 h-3.5" />
            <span>Instant Algorithmic Valuation</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
            Sell Your Car at the <span className="gold-gradient-text">Highest Market Price</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400">
            Get an instant AI valuation, free doorstep inspection within 2 hours, and instant same-day payment with complete legal RC transfer.
          </p>
        </div>

        {/* 3 Step Process Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="p-5 rounded-2xl bg-[#141520] border border-white/10 flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 font-black text-lg flex items-center justify-center shrink-0">
              1
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-heading">Instant Online Valuation</h3>
              <p className="text-xs text-neutral-400 mt-1">
                Enter your car details below to get a transparent price quote based on live market demand.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#141520] border border-white/10 flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-500/40 text-sky-400 font-black text-lg flex items-center justify-center shrink-0">
              2
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-heading">Free Doorstep Inspection</h3>
              <p className="text-xs text-neutral-400 mt-1">
                Our certified evaluator visits your home or office to conduct a quick 30-minute vehicle health check.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#141520] border border-white/10 flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-black text-lg flex items-center justify-center shrink-0">
              3
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-heading">Instant Bank Payment &amp; RC Transfer</h3>
              <p className="text-xs text-neutral-400 mt-1">
                100% money credited to your bank account on the spot before vehicle handover.
              </p>
            </div>
          </div>
        </div>

        {/* Valuation Engine Card */}
        <div className="rounded-3xl bg-[#12131C] border border-amber-500/30 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Input Form (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <h3 className="text-xl font-bold text-white font-heading">
                Step 1: Calculate Your Car's Instant Value
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                {/* Make */}
                <div>
                  <label className="text-xs font-bold text-neutral-300 block mb-1">Car Brand (Make)</label>
                  <select
                    value={make}
                    onChange={(e) => setMake(e.target.value)}
                    className="w-full p-3 rounded-xl bg-[#090A10] border border-white/10 text-xs text-white focus:border-amber-400 focus:outline-none"
                  >
                    <option value="Hyundai">Hyundai</option>
                    <option value="Mahindra">Mahindra</option>
                    <option value="Tata">Tata</option>
                    <option value="BMW">BMW</option>
                    <option value="Mercedes-Benz">Mercedes-Benz</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Kia">Kia</option>
                    <option value="Honda">Honda</option>
                    <option value="Audi">Audi</option>
                    <option value="Maruti Suzuki">Maruti Suzuki</option>
                  </select>
                </div>

                {/* Model */}
                <div>
                  <label className="text-xs font-bold text-neutral-300 block mb-1">Model Name</label>
                  <input
                    type="text"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    placeholder="e.g. Creta / Thar / X1 / City"
                    className="w-full p-3 rounded-xl bg-[#090A10] border border-white/10 text-xs text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>

                {/* Year */}
                <div>
                  <label className="text-xs font-bold text-neutral-300 block mb-1">Registration Year</label>
                  <select
                    value={year}
                    onChange={(e) => setYear(Number(e.target.value))}
                    className="w-full p-3 rounded-xl bg-[#090A10] border border-white/10 text-xs text-white focus:border-amber-400 focus:outline-none"
                  >
                    {[2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015].map((y) => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                </div>

                {/* Fuel */}
                <div>
                  <label className="text-xs font-bold text-neutral-300 block mb-1">Fuel Type</label>
                  <select
                    value={fuel}
                    onChange={(e) => setFuel(e.target.value)}
                    className="w-full p-3 rounded-xl bg-[#090A10] border border-white/10 text-xs text-white focus:border-amber-400 focus:outline-none"
                  >
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Electric">Electric</option>
                    <option value="CNG">CNG</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>

              </div>

              {/* KM Driven Slider */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <label className="font-bold text-neutral-300">Kilometers Driven:</label>
                  <span className="font-bold text-amber-400 font-mono-num">{kms.toLocaleString()} KM</span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="120000"
                  step="5000"
                  value={kms}
                  onChange={(e) => setKms(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              {/* Condition */}
              <div>
                <label className="text-xs font-bold text-neutral-300 block mb-1.5">Overall Car Condition:</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Excellent', 'Good', 'Fair'] as const).map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setCondition(c)}
                      className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        condition === c
                          ? 'bg-amber-500 text-black font-extrabold shadow-md'
                          : 'bg-[#090A10] border border-white/10 text-neutral-400 hover:text-white'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: Instant Valuation Result & Doorstep Inspection Booking (5 cols) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#0A0B10] border border-amber-500/40 space-y-5 shadow-2xl">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                  Live Algorithmic Estimate:
                </span>
                <div className="text-2xl sm:text-3xl font-black text-white font-heading">
                  ₹{valuation.low.toLocaleString('en-IN')} – ₹{valuation.high.toLocaleString('en-IN')}
                </div>
                <p className="text-[11px] text-emerald-400 font-medium">
                  ✓ Up to ₹45,000 higher than unorganized dealers &amp; classifieds
                </p>
              </div>

              {/* Inspection Booking Mini Form */}
              <form onSubmit={handleBookInspection} className="space-y-3 pt-2 border-t border-white/10">
                <div className="text-xs font-bold text-neutral-300">
                  Book Free Doorstep Inspection:
                </div>

                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-400" />
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={sellerName}
                    onChange={(e) => setSellerName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#141520] border border-white/10 text-xs text-white placeholder:text-neutral-500 focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-400" />
                  <input
                    type="tel"
                    required
                    placeholder="Your Phone Number"
                    value={sellerPhone}
                    onChange={(e) => setSellerPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#141520] border border-white/10 text-xs text-white placeholder:text-neutral-500 focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="p-2.5 rounded-xl bg-[#141520] border border-white/10 text-xs text-white focus:border-amber-400 focus:outline-none"
                  >
                    <option value="Mumbai">Mumbai</option>
                    <option value="Pune">Pune</option>
                    <option value="Delhi-NCR">Delhi-NCR</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Hyderabad">Hyderabad</option>
                  </select>

                  <button
                    type="submit"
                    className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-xs uppercase tracking-wider shadow-md shadow-amber-500/20 transition-all cursor-pointer flex items-center justify-center space-x-1"
                  >
                    <span>Get Cash Today</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>

              {submitted && (
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold text-center">
                  ✓ Request received! An automotive advisor is calling you right away.
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
