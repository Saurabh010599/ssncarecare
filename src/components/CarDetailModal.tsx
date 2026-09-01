import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Fuel, 
  Gauge, 
  Calendar, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Award, 
  Layers, 
  FileText, 
  Wrench, 
  Zap, 
  DollarSign, 
  Check, 
  Clock, 
  ChevronRight,
  Heart,
  Share2
} from 'lucide-react';
import { CarItem } from '../types';
import { BUSINESS_CONFIG } from '../data/mockData';

interface CarDetailModalProps {
  car: CarItem | null;
  onClose: () => void;
  onOpenTestDrive: (carId: string, carName: string) => void;
  onOpenReserve: (car: CarItem) => void;
  isWishlisted: boolean;
  onToggleWishlist: (carId: string) => void;
}

export const CarDetailModal: React.FC<CarDetailModalProps> = ({
  car,
  onClose,
  onOpenTestDrive,
  onOpenReserve,
  isWishlisted,
  onToggleWishlist,
}) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [activeTab, setActiveTab] = useState<'specs' | 'inspection' | 'history'>('inspection');
  const [copied, setCopied] = useState(false);

  if (!car) return null;

  const savings = car.originalNewPrice - car.price;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl rounded-3xl bg-[#12131C] border border-white/15 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Top Sticky Header */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-[#0F1018] shrink-0">
          <div className="flex items-center space-x-3">
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-bold text-xs border border-amber-500/30">
              {car.dealTag || 'Certified Pre-Owned'}
            </span>
            <div className="hidden sm:flex items-center space-x-1.5 text-xs text-emerald-400 font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>{car.inspectionScore}/210 Checks Certified</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => onToggleWishlist(car.id)}
              className="p-2 rounded-xl bg-[#1A1C28] text-white hover:text-red-400 transition-colors"
              title="Save to wishlist"
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
            </button>
            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-[#1A1C28] text-white hover:text-amber-400 transition-colors"
              title="Share car details"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#1A1C28] text-neutral-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6 flex-1">
          
          {/* Main Showcase: Image Gallery & Top Price/Hero Info */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left: Gallery (7 cols) */}
            <div className="lg:col-span-7 space-y-3">
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-[#090A10] border border-white/10">
                <img
                  src={car.images[activeImageIdx] || car.images[0]}
                  alt={`${car.make} ${car.model}`}
                  className="w-full h-full object-cover transition-all duration-300"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md text-xs text-white font-medium">
                  Image {activeImageIdx + 1} of {car.images.length}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex items-center space-x-2 overflow-x-auto pb-1">
                {car.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIdx(i)}
                    className={`relative w-20 h-14 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      activeImageIdx === i ? 'border-amber-400 scale-105' : 'border-white/10 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Quick Price & Key Highlights (5 cols) */}
            <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
              <div>
                <div className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                  {car.make} Automotive
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  {car.make} {car.model}
                </h2>
                <p className="text-xs text-neutral-300 mt-1">
                  {car.variant} &bull; <strong className="text-white">{car.ownership}</strong>
                </p>

                {/* Price Box */}
                <div className="mt-4 p-4 rounded-2xl bg-[#0B0C12] border border-amber-500/30 space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-neutral-400">Certified Special Price:</span>
                    <span className="text-2xl sm:text-3xl font-black text-amber-400 font-heading">
                      ₹{car.price.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-neutral-400 pt-1 border-t border-white/5">
                    <span>Original New Price:</span>
                    <span className="line-through">₹{car.originalNewPrice.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="p-2 rounded-xl bg-emerald-500/15 text-emerald-300 text-xs font-bold flex items-center justify-between">
                    <span>Instant Savings:</span>
                    <span>₹{savings.toLocaleString('en-IN')} OFF</span>
                  </div>
                </div>

                {/* Starting EMI */}
                <div className="mt-3 p-3 rounded-xl bg-[#181A26] border border-white/5 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-neutral-400 block text-[10px]">Estimated EMI:</span>
                    <strong className="text-white text-sm font-mono-num">₹{car.emiStarting.toLocaleString('en-IN')}/mo</strong>
                  </div>
                  <span className="text-amber-400 text-[11px] font-bold">
                    0% Down Payment Available &rarr;
                  </span>
                </div>
              </div>

              {/* Conversion Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenTestDrive(car.id, `${car.make} ${car.model}`);
                  }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 flex items-center justify-center space-x-2 transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 fill-black" />
                  <span>Book Free Doorstep Test Drive</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenReserve(car);
                    }}
                    className="py-2.5 rounded-xl bg-[#1E202E] hover:bg-[#282B3E] border border-white/10 text-white font-bold text-xs transition-colors cursor-pointer text-center"
                  >
                    Reserve for ₹999
                  </button>

                  <a
                    href={`https://wa.me/${BUSINESS_CONFIG.phoneRaw}?text=${BUSINESS_CONFIG.whatsappPrefill(`${car.make} ${car.model} (${car.variant})`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-[#25D366] font-bold text-xs flex items-center justify-center space-x-1.5 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>WhatsApp Deal</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Navigation Tabs for Detailed Sections */}
          <div className="border-t border-white/10 pt-6">
            <div className="flex items-center space-x-3 border-b border-white/10 pb-3">
              <button
                onClick={() => setActiveTab('inspection')}
                className={`pb-2 text-xs sm:text-sm font-bold transition-colors cursor-pointer flex items-center space-x-1.5 ${
                  activeTab === 'inspection'
                    ? 'text-amber-400 border-b-2 border-amber-400'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>210-Point Inspection Report</span>
              </button>

              <button
                onClick={() => setActiveTab('specs')}
                className={`pb-2 text-xs sm:text-sm font-bold transition-colors cursor-pointer flex items-center space-x-1.5 ${
                  activeTab === 'specs'
                    ? 'text-amber-400 border-b-2 border-amber-400'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Layers className="w-4 h-4 text-amber-400" />
                <span>Technical Specifications &amp; Features</span>
              </button>

              <button
                onClick={() => setActiveTab('history')}
                className={`pb-2 text-xs sm:text-sm font-bold transition-colors cursor-pointer flex items-center space-x-1.5 ${
                  activeTab === 'history'
                    ? 'text-amber-400 border-b-2 border-amber-400'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>Service History &amp; Insurance</span>
              </button>
            </div>

            {/* Tab 1: 210-Point Technical Inspection Report */}
            {activeTab === 'inspection' && (
              <div className="pt-4 space-y-4 animate-in fade-in duration-150">
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500 text-black flex items-center justify-center font-black">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        Certified Quality Score: {car.inspectionScore} / 210 Passed
                      </h4>
                      <p className="text-xs text-emerald-300">
                        100% Non-Accidental • Zero Flood Damage • Genuine Odometer Verified
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-xs border border-emerald-500/40">
                    1-Year Pan-India Warranty Active
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#090A10] border border-white/5 space-y-1">
                    <div className="flex items-center space-x-2 text-amber-400 font-bold">
                      <Zap className="w-3.5 h-3.5" />
                      <span>Engine &amp; Transmission:</span>
                    </div>
                    <p className="text-neutral-300">{car.inspectionHighlights.engineTransmission}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#090A10] border border-white/5 space-y-1">
                    <div className="flex items-center space-x-2 text-amber-400 font-bold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Chassis &amp; Body Integrity:</span>
                    </div>
                    <p className="text-neutral-300">{car.inspectionHighlights.chassisBody}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#090A10] border border-white/5 space-y-1">
                    <div className="flex items-center space-x-2 text-amber-400 font-bold">
                      <Wrench className="w-3.5 h-3.5" />
                      <span>Electricals &amp; OBD Scan:</span>
                    </div>
                    <p className="text-neutral-300">{car.inspectionHighlights.electricals}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#090A10] border border-white/5 space-y-1">
                    <div className="flex items-center space-x-2 text-amber-400 font-bold">
                      <Gauge className="w-3.5 h-3.5" />
                      <span>Tyres, Brakes &amp; Suspension:</span>
                    </div>
                    <p className="text-neutral-300">{car.inspectionHighlights.tiresSuspension}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Technical Specifications & Features */}
            {activeTab === 'specs' && (
              <div className="pt-4 space-y-4 animate-in fade-in duration-150">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-[#090A10] border border-white/5">
                    <span className="text-neutral-500 block text-[10px]">Year of Registration</span>
                    <strong className="text-white text-sm font-mono-num">{car.year}</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-[#090A10] border border-white/5">
                    <span className="text-neutral-500 block text-[10px]">KM Driven</span>
                    <strong className="text-white text-sm font-mono-num">{car.kms.toLocaleString()} km</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-[#090A10] border border-white/5">
                    <span className="text-neutral-500 block text-[10px]">Fuel &amp; Transmission</span>
                    <strong className="text-white text-sm">{car.fuel} &bull; {car.transmission}</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-[#090A10] border border-white/5">
                    <span className="text-neutral-500 block text-[10px]">Color &amp; Body Type</span>
                    <strong className="text-white text-sm">{car.color}</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-[#090A10] border border-white/5">
                    <span className="text-neutral-500 block text-[10px]">Engine Displacement</span>
                    <strong className="text-white text-sm">{car.engine}</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-[#090A10] border border-white/5">
                    <span className="text-neutral-500 block text-[10px]">Max Power</span>
                    <strong className="text-white text-sm">{car.power}</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-[#090A10] border border-white/5">
                    <span className="text-neutral-500 block text-[10px]">Mileage</span>
                    <strong className="text-white text-sm">{car.mileage}</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-[#090A10] border border-white/5">
                    <span className="text-neutral-500 block text-[10px]">Safety Rating</span>
                    <strong className="text-emerald-400 text-sm">{car.safetyRating}</strong>
                  </div>
                </div>

                {/* Key Features List */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    Key Features &amp; Factory Equipment:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {car.keyFeatures.map((feat, i) => (
                      <div key={i} className="flex items-center space-x-2 p-2 rounded-lg bg-[#090A10] border border-white/5 text-neutral-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Service History & Legal Documentation */}
            {activeTab === 'history' && (
              <div className="pt-4 space-y-4 animate-in fade-in duration-150">
                <div className="p-4 rounded-2xl bg-[#090A10] border border-white/10 space-y-3 text-xs">
                  <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-sky-400" />
                    <span>Official OEM Service Log:</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <span className="text-neutral-500 block text-[10px]">Last Serviced:</span>
                      <strong className="text-white">{car.serviceHistory.lastServiceDate} ({car.serviceHistory.lastServiceKm.toLocaleString()} KM)</strong>
                    </div>
                    <div>
                      <span className="text-neutral-500 block text-[10px]">Workshop:</span>
                      <strong className="text-white">{car.serviceHistory.authorizedCenter}</strong>
                    </div>
                    <div>
                      <span className="text-neutral-500 block text-[10px]">Overall Condition:</span>
                      <strong className="text-emerald-400">{car.serviceHistory.conditionStatus}</strong>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#090A10] border border-white/5 space-y-1">
                    <span className="text-neutral-500 block text-[10px]">Registration State:</span>
                    <strong className="text-white">{car.registrationState}</strong>
                    <p className="text-[11px] text-neutral-400">Zero RTO Challans or Pending Hypothecation.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#090A10] border border-white/5 space-y-1">
                    <span className="text-neutral-500 block text-[10px]">Insurance Validity:</span>
                    <strong className="text-white">{car.insuranceValidity}</strong>
                    <p className="text-[11px] text-neutral-400">Free Name Transfer Included.</p>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Modal Bottom Fixed Conversion Bar */}
        <div className="p-4 border-t border-white/10 bg-[#0F1018] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center space-x-3 text-xs">
            <div>
              <span className="text-neutral-400 block text-[10px]">Showroom Location:</span>
              <strong className="text-white">{car.location}</strong>
            </div>
            <span className="text-neutral-600 hidden sm:inline">|</span>
            <div className="hidden sm:block">
              <span className="text-neutral-400 block text-[10px]">Free Home Delivery:</span>
              <strong className="text-emerald-400">Within 24 Hours</strong>
            </div>
          </div>

          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="py-2.5 px-4 rounded-xl bg-[#1C1E2A] text-neutral-200 hover:text-white border border-white/10 font-bold text-xs flex items-center space-x-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call Advisor</span>
            </a>
            <button
              onClick={() => {
                onClose();
                onOpenTestDrive(car.id, `${car.make} ${car.model}`);
              }}
              className="flex-1 sm:flex-none py-2.5 px-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-wider shadow-md shadow-amber-500/20 flex items-center justify-center space-x-1 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 fill-black" />
              <span>Book Test Drive</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
