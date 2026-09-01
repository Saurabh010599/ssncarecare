import React, { useState } from 'react';
import { X, Sparkles, Check, Phone, MessageSquare, Car, Bike, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { SERVICES, VEHICLE_SEGMENTS, BUSINESS_INFO } from '../data/mockData';

interface BookingQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const BookingQuoteModal: React.FC<BookingQuoteModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
}) => {
  const [selectedSegment, setSelectedSegment] = useState<string>('csuv');
  const [selectedServiceId, setSelectedServiceId] = useState<string>(initialServiceId || 'ceramic-coating');
  const [addOns, setAddOns] = useState<string[]>(['Windshield Rain Repellent']);
  const [carModelName, setCarModelName] = useState<string>('');
  const [preferredDate, setPreferredDate] = useState<string>('Tomorrow');
  const [userName, setUserName] = useState<string>('');
  const [userPhone, setUserPhone] = useState<string>('');

  if (!isOpen) return null;

  const currentSegment = VEHICLE_SEGMENTS.find((s) => s.id === selectedSegment) || VEHICLE_SEGMENTS[2];
  const currentService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[4];

  // Base numerical parsing from price string (e.g. "₹7,999" -> 7999)
  const baseNum = parseInt(currentService.startingPrice.replace(/[^0-9]/g, ''), 10) || 1000;
  const estimatedTotal = Math.round((baseNum * currentSegment.multiplier) / 50) * 50;

  const addOnOptions = [
    { id: 'rain-shield', name: 'Windshield Hydrophobic Rain Coat', price: 499 },
    { id: 'engine-dress', name: 'Engine Bay Foam & Dressing', price: 599 },
    { id: 'leather-nourish', name: 'Premium Leather Deep Conditioner', price: 799 },
    { id: 'ac-sanitization', name: 'AC Duct Ozone Sanitization', price: 399 },
  ];

  const toggleAddOn = (name: string) => {
    if (addOns.includes(name)) {
      setAddOns(addOns.filter((a) => a !== name));
    } else {
      setAddOns([...addOns, name]);
    }
  };

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const addOnText = addOns.length > 0 ? `\n- Add-ons: ${addOns.join(', ')}` : '';
    const message = `*SN CAR CARE Studio Booking Request*\n\n*Customer:* ${userName || 'Guest'}\n*Phone:* ${userPhone || 'Provided via WhatsApp'}\n*Vehicle:* ${carModelName || currentSegment.name} (${currentSegment.name})\n*Selected Service:* ${currentService.title}\n*Estimated Starting:* ₹${estimatedTotal}${addOnText}\n*Preferred Slot:* ${preferredDate}\n\n_Please confirm availability at Chandrapur Studio._`;
    
    window.open(`https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent(message)}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#141418] border border-[#30303D] p-6 sm:p-8 shadow-2xl space-y-6 max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#202026] text-neutral-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1">
          <div className="inline-flex items-center space-x-2 text-[11px] font-bold text-[#5A8FCB] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Instant Estimate &amp; Slot Request</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white font-heading">
            Book Your Detailing Slot
          </h3>
          <p className="text-xs text-neutral-400">
            Get an instant estimate for your vehicle and directly lock your preferred slot at our Chandrapur studio.
          </p>
        </div>

        <form onSubmit={handleWhatsAppBooking} className="space-y-6">
          
          {/* Step 1: Select Vehicle Segment */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider block">
              1. Select Vehicle Category:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {VEHICLE_SEGMENTS.map((seg) => (
                <button
                  type="button"
                  key={seg.id}
                  onClick={() => setSelectedSegment(seg.id)}
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                    selectedSegment === seg.id
                      ? 'bg-[#5A8FCB]/15 border-[#5A8FCB] text-white shadow-md'
                      : 'bg-[#0E0E12] border-white/5 text-neutral-400 hover:text-neutral-200 hover:bg-[#18181D]'
                  }`}
                >
                  <div className="text-xs font-bold flex items-center justify-between">
                    <span>{seg.name}</span>
                    {selectedSegment === seg.id && <Check className="w-3.5 h-3.5 text-[#5A8FCB]" />}
                  </div>
                  <div className="text-[10px] text-neutral-500 truncate mt-0.5">{seg.examples}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Select Detailing Package */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider block">
              2. Select Service Package:
            </label>
            <select
              value={selectedServiceId}
              onChange={(e) => setSelectedServiceId(e.target.value)}
              className="w-full p-3.5 rounded-xl bg-[#0E0E12] border border-white/10 text-white text-sm font-medium focus:border-[#5A8FCB] focus:outline-none"
            >
              {SERVICES.map((s) => (
                <option key={s.id} value={s.id} className="bg-[#141418] text-white">
                  {s.title} (Starting {s.startingPrice} &bull; {s.duration})
                </option>
              ))}
            </select>
          </div>

          {/* Optional Add-on Boosters */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">
              Optional Studio Add-ons:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {addOnOptions.map((opt) => (
                <button
                  type="button"
                  key={opt.id}
                  onClick={() => toggleAddOn(opt.name)}
                  className={`p-2.5 rounded-xl text-left border text-xs flex items-center justify-between transition-all cursor-pointer ${
                    addOns.includes(opt.name)
                      ? 'bg-[#5A8FCB]/10 border-[#5A8FCB]/50 text-white'
                      : 'bg-[#0E0E12] border-white/5 text-neutral-400 hover:text-neutral-300'
                  }`}
                >
                  <span>{opt.name}</span>
                  <span className="text-[11px] font-bold text-[#5A8FCB]">+₹{opt.price}</span>
                </button>
              ))}
            </div>
          </div>

          {/* User Details inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="text-[11px] font-medium text-neutral-400 block mb-1">Your Name</label>
              <input
                type="text"
                placeholder="e.g. Rahul Sharma"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-[#0E0E12] border border-white/10 text-xs text-white placeholder:text-neutral-600 focus:border-[#5A8FCB] focus:outline-none"
              />
            </div>
            <div>
              <label className="text-[11px] font-medium text-neutral-400 block mb-1">Car Model / Number</label>
              <input
                type="text"
                placeholder="e.g. Creta / Fortuner"
                value={carModelName}
                onChange={(e) => setCarModelName(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-[#0E0E12] border border-white/10 text-xs text-white placeholder:text-neutral-600 focus:border-[#5A8FCB] focus:outline-none"
              />
            </div>
            <div>
              <label className="text-[11px] font-medium text-neutral-400 block mb-1">Preferred Slot</label>
              <select
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-[#0E0E12] border border-white/10 text-xs text-white focus:border-[#5A8FCB] focus:outline-none"
              >
                <option value="Today (Morning 10 AM)">Today (Morning 10 AM)</option>
                <option value="Today (Afternoon 2 PM)">Today (Afternoon 2 PM)</option>
                <option value="Tomorrow (Morning 10 AM)">Tomorrow (Morning 10 AM)</option>
                <option value="This Weekend (Saturday)">This Weekend (Saturday)</option>
                <option value="This Weekend (Sunday)">This Weekend (Sunday)</option>
              </select>
            </div>
          </div>

          {/* Pricing Estimation Summary Card */}
          <div className="p-4 rounded-2xl bg-[#0B0B0D] border border-[#5A8FCB]/30 flex items-center justify-between">
            <div>
              <span className="text-[11px] text-neutral-400 block">Estimated Studio Base:</span>
              <div className="text-2xl font-black text-white font-heading">
                ₹{estimatedTotal.toLocaleString('en-IN')}{' '}
                <span className="text-xs font-normal text-neutral-400">approx.</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-medium">
                Includes two-bucket wash &amp; handoff inspection
              </span>
            </div>
            
            <div className="text-right text-xs text-neutral-400">
              <div>Duration: <strong className="text-white">{currentService.duration}</strong></div>
              <div>Bay: <strong className="text-[#5A8FCB]">Datala Rd. Studio</strong></div>
            </div>
          </div>

          {/* Submit Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button
              type="submit"
              className="py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20BE5C] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-lg shadow-[#25D366]/20"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Confirm on WhatsApp</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="py-3.5 rounded-xl bg-[#1D1D24] hover:bg-[#252530] text-neutral-200 hover:text-white border border-[#2F2F3D] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4 text-[#5A8FCB]" />
              <span>Call +91 84592 43238</span>
            </a>
          </div>

        </form>

      </div>
    </div>
  );
};
