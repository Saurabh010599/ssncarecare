import React, { useState } from 'react';
import { 
  X, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  Check, 
  ArrowRight, 
  Scale,
  Fuel,
  Gauge,
  Calendar,
  Zap,
  Award
} from 'lucide-react';
import { CarItem } from '../types';

interface CarComparisonDrawerProps {
  comparedCars: CarItem[];
  onRemoveCompare: (carId: string) => void;
  onClearCompare: () => void;
  onOpenTestDrive: (carId: string, carName: string) => void;
  onSelectCar: (car: CarItem) => void;
}

export const CarComparisonDrawer: React.FC<CarComparisonDrawerProps> = ({
  comparedCars,
  onRemoveCompare,
  onClearCompare,
  onOpenTestDrive,
  onSelectCar,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  if (comparedCars.length === 0) return null;

  return (
    <>
      {/* Floating Bottom Sticky Bar */}
      <div className="fixed bottom-20 md:bottom-6 left-1/2 -translate-x-1/2 z-40 w-11/12 max-w-2xl bg-[#12131C]/95 backdrop-blur-xl border border-amber-500/40 rounded-2xl shadow-2xl p-3 sm:p-4 animate-in slide-in-from-bottom-5 duration-200">
        <div className="flex items-center justify-between gap-3">
          
          <div className="flex items-center space-x-2 sm:space-x-3 overflow-x-auto">
            <div className="hidden sm:flex items-center space-x-1.5 text-xs font-bold text-amber-400 shrink-0">
              <Layers className="w-4 h-4" />
              <span>Compare ({comparedCars.length}/3):</span>
            </div>

            <div className="flex items-center space-x-2">
              {comparedCars.map((car) => (
                <div
                  key={car.id}
                  className="relative group flex items-center space-x-2 p-1.5 pr-2.5 rounded-xl bg-[#1B1D2C] border border-white/10 shrink-0"
                >
                  <img
                    src={car.images[0]}
                    alt={car.model}
                    className="w-8 h-8 rounded-lg object-cover"
                  />
                  <div className="text-[11px] font-bold text-white max-w-[90px] sm:max-w-[120px] truncate">
                    {car.make} {car.model}
                  </div>
                  <button
                    onClick={() => onRemoveCompare(car.id)}
                    className="p-1 rounded-full text-neutral-400 hover:text-white hover:bg-white/10"
                    aria-label="Remove car"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <button
              onClick={onClearCompare}
              className="hidden sm:inline text-[11px] text-neutral-400 hover:text-white underline cursor-pointer"
            >
              Clear
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className="py-2 px-3 sm:px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black font-extrabold text-xs uppercase tracking-wider shadow-md shadow-amber-500/20 hover:scale-105 transition-all cursor-pointer flex items-center space-x-1.5"
            >
              <Scale className="w-3.5 h-3.5" />
              <span>Compare Now</span>
            </button>
          </div>

        </div>
      </div>

      {/* Full Side-by-Side Comparison Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-6xl rounded-3xl bg-[#12131C] border border-white/15 shadow-2xl p-5 sm:p-6 max-h-[92vh] flex flex-col overflow-hidden">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                  <Scale className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-heading">
                    Side-by-Side Vehicle Comparison
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Comparing {comparedCars.length} certified pre-owned vehicles.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setModalOpen(false)}
                className="p-2 rounded-xl bg-[#1A1C28] text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Comparison Matrix (Scrollable) */}
            <div className="overflow-x-auto overflow-y-auto flex-1 py-4">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="p-3 text-neutral-400 font-bold uppercase tracking-wider w-1/4">Feature</th>
                    {comparedCars.map((car) => (
                      <th key={car.id} className="p-3 w-1/4 align-top">
                        <div className="space-y-2">
                          <img
                            src={car.images[0]}
                            alt={car.model}
                            className="w-full h-28 object-cover rounded-xl border border-white/10"
                          />
                          <div className="font-bold text-sm text-white font-heading">{car.make} {car.model}</div>
                          <div className="text-amber-400 font-black text-base font-heading">
                            ₹{(car.price / 100000).toFixed(2)} Lakh
                          </div>
                          <button
                            onClick={() => {
                              setModalOpen(false);
                              onOpenTestDrive(car.id, `${car.make} ${car.model}`);
                            }}
                            className="w-full py-1.5 rounded-lg bg-amber-500 text-black font-extrabold text-[10px] uppercase tracking-wider hover:bg-amber-400"
                          >
                            Book Test Drive
                          </button>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="p-3 font-semibold text-neutral-400">Original vs Certified Savings</td>
                    {comparedCars.map((c) => (
                      <td key={c.id} className="p-3 text-emerald-400 font-bold">
                        Save ₹{((c.originalNewPrice - c.price) / 100000).toFixed(1)} Lakhs
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-400">Quality Inspection Score</td>
                    {comparedCars.map((c) => (
                      <td key={c.id} className="p-3 text-white font-bold">
                        <span className="text-emerald-400 font-mono-num">{c.inspectionScore}</span> / 210 Points
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-400">Year &amp; KM Driven</td>
                    {comparedCars.map((c) => (
                      <td key={c.id} className="p-3 text-neutral-200 font-mono-num">
                        {c.year} &bull; {c.kms.toLocaleString()} km
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-400">Fuel &amp; Transmission</td>
                    {comparedCars.map((c) => (
                      <td key={c.id} className="p-3 text-neutral-200">
                        {c.fuel} &bull; {c.transmission}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-400">Engine &amp; Max Power</td>
                    {comparedCars.map((c) => (
                      <td key={c.id} className="p-3 text-neutral-200">
                        {c.power} ({c.engine.split(' ')[0]} cc)
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-400">Mileage / Fuel Economy</td>
                    {comparedCars.map((c) => (
                      <td key={c.id} className="p-3 text-amber-400 font-bold font-mono-num">
                        {c.mileage}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-400">Ownership &amp; Location</td>
                    {comparedCars.map((c) => (
                      <td key={c.id} className="p-3 text-neutral-200">
                        {c.ownership} &bull; {c.location.split(',')[0]}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-400">Safety Rating</td>
                    {comparedCars.map((c) => (
                      <td key={c.id} className="p-3 text-emerald-400 font-semibold">
                        {c.safetyRating}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-400">Warranty</td>
                    {comparedCars.map((c) => (
                      <td key={c.id} className="p-3 text-amber-300 font-bold">
                        1-Year Comprehensive Included
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
