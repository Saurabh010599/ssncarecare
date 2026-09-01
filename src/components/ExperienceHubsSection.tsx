import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Car, 
  ExternalLink, 
  Sparkles, 
  ShieldCheck, 
  Navigation,
  CheckCircle2
} from 'lucide-react';
import { DEALERSHIP_HUBS, BUSINESS_CONFIG } from '../data/mockData';

interface ExperienceHubsSectionProps {
  selectedCity: string;
  onSelectCity: (city: string) => void;
}

export const ExperienceHubsSection: React.FC<ExperienceHubsSectionProps> = ({
  selectedCity,
  onSelectCity,
}) => {
  const activeHub =
    DEALERSHIP_HUBS.find((h) => h.city.toLowerCase() === selectedCity.toLowerCase()) ||
    DEALERSHIP_HUBS[0];

  return (
    <section id="hubs" className="py-16 sm:py-20 bg-[#0C0D14] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-12">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-widest text-amber-400">
            <MapPin className="w-3.5 h-3.5" />
            <span>Pan-India Presence</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
            Visit Our <span className="gold-gradient-text">Experience Centers</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400">
            State-of-the-art indoor climate-controlled automotive studios. Test drive in comfort or request free home delivery.
          </p>
        </div>

        {/* City Selector Tabs */}
        <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-10 overflow-x-auto pb-2">
          {DEALERSHIP_HUBS.map((hub) => (
            <button
              key={hub.id}
              onClick={() => onSelectCity(hub.city)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer flex items-center space-x-2 ${
                activeHub.id === hub.id
                  ? 'bg-amber-500 text-black font-extrabold shadow-lg shadow-amber-500/20 scale-105'
                  : 'bg-[#141520] border border-white/10 text-neutral-300 hover:text-white hover:bg-[#1D1F2E]'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>{hub.city} Hub</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                activeHub.id === hub.id ? 'bg-black text-amber-400' : 'bg-white/10 text-neutral-400'
              }`}>
                {hub.carsInStock} Cars
              </span>
            </button>
          ))}
        </div>

        {/* Selected Hub Details Card */}
        <div className="rounded-3xl bg-[#12131C] border border-white/15 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Hub Info (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
                  Flagship Experience Center
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  {activeHub.hubName}
                </h3>
              </div>

              <div className="space-y-3.5 text-xs">
                <div className="flex items-start space-x-3 p-3 rounded-xl bg-[#090A10] border border-white/5">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm mb-0.5">Address:</strong>
                    <span className="text-neutral-300 leading-relaxed">{activeHub.address}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-xl bg-[#090A10] border border-white/5">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <strong className="text-white block text-sm mb-0.5">Operating Hours:</strong>
                    <span className="text-neutral-300">{activeHub.timings}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-xl bg-[#090A10] border border-white/5">
                  <Car className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <strong className="text-white block text-sm mb-0.5">Live Stock Available:</strong>
                    <span className="text-emerald-400 font-bold">{activeHub.carsInStock} Certified Pre-Owned Vehicles Ready</span>
                  </div>
                </div>
              </div>

              {/* Hub Conversion Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                  className="py-3 px-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all text-center flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {activeHub.city} Studio</span>
                </a>

                <a
                  href={activeHub.mapEmbedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-5 rounded-xl bg-[#1C1E2A] hover:bg-[#252838] border border-white/10 text-white font-bold text-xs flex items-center justify-center space-x-2 transition-colors text-center"
                >
                  <Navigation className="w-4 h-4 text-amber-400" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>

            {/* Hub Features & Amenities (6 cols) */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#0A0B10] border border-white/10 space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                What to Expect at our Experience Centers:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-[#141520] border border-white/5 flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Climate-Controlled Bays</strong>
                    <span className="text-neutral-400 text-[11px]">Inspect cars under high-CRI daylight lighting.</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#141520] border border-white/5 flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Live Diagnostic Lift</strong>
                    <span className="text-neutral-400 text-[11px]">Inspect underbody and suspension on our ramp.</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#141520] border border-white/5 flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">On-Spot RTO Legal Desk</strong>
                    <span className="text-neutral-400 text-[11px]">Complete ownership transfer paperwork in 15 mins.</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#141520] border border-white/5 flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">VIP Test Drive Lounge</strong>
                    <span className="text-neutral-400 text-[11px]">Complimentary espresso bar &amp; private consultation.</span>
                  </div>
                </div>
              </div>

              {/* Free Doorstep Test Drive Callout */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
                <div className="text-xs">
                  <span className="text-white font-bold block">Can't Visit In Person?</span>
                  <span className="text-neutral-400 text-[11px]">We bring any car to your doorstep for a free test drive.</span>
                </div>
                <a
                  href="#inventory"
                  className="px-3 py-1.5 rounded-lg bg-amber-500 text-black font-extrabold text-[11px] uppercase tracking-wider shrink-0"
                >
                  Pick A Car
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
