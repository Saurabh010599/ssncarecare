import React, { useState } from 'react';
import { 
  Waves, Wind, Droplet, ShieldAlert, Gem, Sparkles, Shield, SlidersHorizontal, Bike, 
  Clock, ArrowUpRight, CheckCircle2, ChevronRight, Info
} from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/mockData';
import { ServiceItem } from '../types';

interface ServicesShowcaseProps {
  onSelectService: (serviceId: string) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({ onSelectService, onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'wash' | 'detailing' | 'coating' | 'interior' | 'bike'>('all');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Services (9)' },
    { id: 'coating', label: 'Ceramic & Paint Protection' },
    { id: 'detailing', label: 'Detailing & Compounding' },
    { id: 'wash', label: 'Foam & Exterior Wash' },
    { id: 'interior', label: 'Interior Steam Care' },
    { id: 'bike', label: 'Superbike & 2-Wheeler' },
  ];

  const filteredServices = selectedCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter((s) => s.category === selectedCategory);

  const renderIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-[#5A8FCB]" };
    switch (iconName) {
      case 'Waves': return <Waves {...props} />;
      case 'Wind': return <Wind {...props} className="w-5 h-5 text-sky-400" />;
      case 'Droplet': return <Droplet {...props} className="w-5 h-5 text-cyan-400" />;
      case 'ShieldAlert': return <ShieldAlert {...props} className="w-5 h-5 text-[#FF6B6B]" />;
      case 'Gem': return <Gem {...props} className="w-5 h-5 text-amber-400" />;
      case 'Sparkle':
      case 'Sparkles': return <Sparkles {...props} className="w-5 h-5 text-emerald-400" />;
      case 'Shield': return <Shield {...props} className="w-5 h-5 text-blue-400" />;
      case 'SlidersHorizontal': return <SlidersHorizontal {...props} className="w-5 h-5 text-purple-400" />;
      case 'Bike': return <Bike {...props} className="w-5 h-5 text-rose-400" />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="services" className="relative bg-[#0B0B0D] py-20 lg:py-28 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-[#5A8FCB]/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-[#D42E2E]/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#18181D] border border-white/10 text-xs font-semibold text-[#5A8FCB] uppercase tracking-widest">
              <span>Automotive Master Care</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Complete Vehicle <br className="hidden sm:inline" />
              <span className="electric-blue-gradient-text">Care Solutions</span>
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              Every package is precision-engineered using pH-neutral chemicals, dual-action rotary buffers, and dust-controlled curing bays.
            </p>
          </div>

          {/* Quick Contact Prompt */}
          <div className="flex items-center space-x-3 bg-[#15151A] px-4 py-2.5 rounded-xl border border-white/10 self-start md:self-auto">
            <span className="text-xs text-neutral-400">Need custom package advice?</span>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="text-xs font-bold text-[#5A8FCB] hover:text-white transition-colors"
            >
              Call Specialist &rarr;
            </a>
          </div>
        </div>

        {/* Category Filters Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-[#5A8FCB] to-[#3B71AC] text-white shadow-lg shadow-[#5A8FCB]/20 border border-[#5A8FCB]'
                  : 'bg-[#15151A] text-neutral-400 hover:text-white hover:bg-[#1C1C22] border border-[#26262B]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 9 Luxury Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-gradient-to-b from-[#16161B] to-[#0F0F13] border border-[#262630] hover:border-[#5A8FCB]/50 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#5A8FCB]/15 flex flex-col justify-between"
            >
              {/* Card Image Banner */}
              <div className="relative h-48 w-full overflow-hidden bg-[#101013]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16161B] via-[#16161B]/40 to-transparent" />

                {/* Popular Pill */}
                {service.popular && (
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#D42E2E] text-white text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                    Most Popular
                  </div>
                )}

                {/* Icon Badge */}
                <div className="absolute bottom-3 left-4 p-2.5 rounded-xl bg-[#0B0B0D]/90 backdrop-blur-md border border-white/10 shadow-lg">
                  {renderIcon(service.iconName)}
                </div>

                {/* Duration Tag */}
                <div className="absolute bottom-3 right-4 flex items-center space-x-1 text-[11px] font-medium text-neutral-300 bg-[#0B0B0D]/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/5">
                  <Clock className="w-3 h-3 text-neutral-400" />
                  <span>{service.duration}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#5A8FCB] transition-colors">
                      {service.title}
                    </h3>
                    <div className="text-right">
                      <span className="text-xs text-neutral-400 block">Starting from</span>
                      <span className="text-lg font-black text-white font-heading">{service.startingPrice}</span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-[#A5C9EB] font-medium mb-3">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                    {service.shortBenefit}
                  </p>
                </div>

                {/* Key Checklist Preview */}
                <div className="space-y-1.5 pt-3 border-t border-white/5">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#5A8FCB] shrink-0 mt-0.5" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-[11px] text-neutral-500 pl-5">
                      + {service.features.length - 3} more studio steps
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="pt-4 grid grid-cols-2 gap-2 border-t border-white/5">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="py-2.5 px-3 rounded-xl bg-[#1D1D24] hover:bg-[#25252E] text-neutral-300 hover:text-white border border-[#2D2D38] text-xs font-semibold transition-all flex items-center justify-center space-x-1.5"
                  >
                    <Info className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Learn More</span>
                  </button>

                  <button
                    onClick={() => onOpenBooking(service.id)}
                    className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#5A8FCB] to-[#3B71AC] hover:from-[#6BA0DC] hover:to-[#4A80BB] text-white text-xs font-bold transition-all flex items-center justify-center space-x-1 shadow-md shadow-[#5A8FCB]/20"
                  >
                    <span>Book Now</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-2xl bg-[#141418] border border-[#30303D] p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-[#202026] text-neutral-400 hover:text-white"
            >
              ✕
            </button>

            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-xl bg-[#0B0B0D] border border-white/10">
                {renderIcon(activeModalService.iconName)}
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#5A8FCB] font-bold">Studio Procedure</span>
                <h3 className="text-2xl font-black text-white">{activeModalService.title}</h3>
              </div>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed">
              {activeModalService.description}
            </p>

            <div className="space-y-3 bg-[#0B0B0D]/80 p-4 rounded-xl border border-white/5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300">Complete Process Checklist:</h4>
              <ul className="space-y-2">
                {activeModalService.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-2 text-xs sm:text-sm text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10 text-sm">
              <div>
                <span className="text-xs text-neutral-400">Standard Duration</span>
                <div className="font-bold text-white">{activeModalService.duration}</div>
              </div>
              <div>
                <span className="text-xs text-neutral-400">Starting Price</span>
                <div className="text-xl font-black text-[#5A8FCB]">{activeModalService.startingPrice}</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={`https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${BUSINESS_INFO.whatsappPrefill(activeModalService.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 rounded-xl bg-[#25D366] hover:bg-[#20BE5C] text-white font-bold text-xs uppercase tracking-wider text-center transition-all"
              >
                Inquire on WhatsApp
              </a>
              <button
                onClick={() => {
                  const sId = activeModalService.id;
                  setActiveModalService(null);
                  onOpenBooking(sId);
                }}
                className="py-3 rounded-xl bg-[#5A8FCB] hover:bg-[#4A80BB] text-white font-bold text-xs uppercase tracking-wider text-center transition-all"
              >
                Calculate Vehicle Slot
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
