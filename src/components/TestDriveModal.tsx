import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  Phone, 
  Car, 
  ShieldCheck, 
  Check,
  Building,
  Home
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CARS_INVENTORY, DEALERSHIP_HUBS, BUSINESS_CONFIG } from '../data/mockData';

interface TestDriveModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCarId?: string;
  initialCarName?: string;
}

export const TestDriveModal: React.FC<TestDriveModalProps> = ({
  isOpen,
  onClose,
  initialCarId,
  initialCarName,
}) => {
  const [selectedCarId, setSelectedCarId] = useState(initialCarId || CARS_INVENTORY[0].id);
  const [testDriveType, setTestDriveType] = useState<'doorstep' | 'hub'>('doorstep');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('Tomorrow, 11:00 AM');
  const [addressOrHub, setAddressOrHub] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const currentCar = CARS_INVENTORY.find((c) => c.id === selectedCarId) || CARS_INVENTORY[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });

    const msg = `*Best Car Deal - Test Drive Booking*\n\n*Customer:* ${name || 'Guest'}\n*Phone:* ${phone}\n*Vehicle:* ${currentCar.make} ${currentCar.model} (${currentCar.variant})\n*Type:* ${testDriveType === 'doorstep' ? '🏡 Free Doorstep Test Drive' : '🏢 Dealership Studio Hub Visit'}\n*Slot:* ${date}\n*Address/Location:* ${addressOrHub || currentCar.location}\n\n_Please confirm test drive slot schedule._`;
    window.open(`https://wa.me/${BUSINESS_CONFIG.phoneRaw}?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-3xl bg-[#12131C] border border-amber-500/40 shadow-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#1A1C28] text-neutral-400 hover:text-white"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mx-auto flex items-center justify-center">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white font-heading">
              Test Drive Scheduled!
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
              Your test drive for <strong className="text-white">{currentCar.make} {currentCar.model}</strong> has been booked. Our concierge will arrive with the sterilized, fully fueled car.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-amber-500 text-black font-extrabold text-xs uppercase tracking-wider"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Header */}
            <div>
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-widest text-amber-400 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Zero Commitment &bull; 100% Free</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white font-heading">
                Book A Test Drive
              </h3>
              <p className="text-xs text-neutral-400 mt-0.5">
                Experience the car at your home, office, or our flagship studio.
              </p>
            </div>

            {/* Car Selector Box */}
            <div className="p-3 rounded-2xl bg-[#090A10] border border-white/10 flex items-center space-x-3">
              <img
                src={currentCar.images[0]}
                alt={currentCar.model}
                className="w-16 h-12 object-cover rounded-xl shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-white truncate font-heading">
                  {currentCar.make} {currentCar.model}
                </div>
                <div className="text-[11px] text-amber-400 font-bold">
                  ₹{(currentCar.price / 100000).toFixed(2)} Lakh &bull; {currentCar.fuel}
                </div>
              </div>
              <select
                value={selectedCarId}
                onChange={(e) => setSelectedCarId(e.target.value)}
                className="p-2 rounded-xl bg-[#141520] border border-white/10 text-xs text-neutral-200 focus:border-amber-400 focus:outline-none"
              >
                {CARS_INVENTORY.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.make} {c.model} ({c.year})
                  </option>
                ))}
              </select>
            </div>

            {/* Test Drive Type Tabs */}
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setTestDriveType('doorstep')}
                className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center space-x-2 transition-all cursor-pointer ${
                  testDriveType === 'doorstep'
                    ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                    : 'bg-[#090A10] border-white/10 text-neutral-400'
                }`}
              >
                <Home className="w-4 h-4" />
                <span>Doorstep Delivery</span>
              </button>

              <button
                type="button"
                onClick={() => setTestDriveType('hub')}
                className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center space-x-2 transition-all cursor-pointer ${
                  testDriveType === 'hub'
                    ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                    : 'bg-[#090A10] border-white/10 text-neutral-400'
                }`}
              >
                <Building className="w-4 h-4" />
                <span>Visit Studio Hub</span>
              </button>
            </div>

            {/* Contact Details */}
            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-400" />
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#090A10] border border-white/10 text-xs text-white placeholder:text-neutral-500 focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-400" />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#090A10] border border-white/10 text-xs text-white placeholder:text-neutral-500 focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Preferred Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-neutral-400 block mb-1 text-[11px]">Preferred Time Slot:</label>
                  <select
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-[#090A10] border border-white/10 text-xs text-white focus:border-amber-400 focus:outline-none"
                  >
                    <option value="Today (Within 2 Hours)">Today (Within 2 Hours)</option>
                    <option value="Tomorrow, 11:00 AM">Tomorrow, 11:00 AM</option>
                    <option value="Tomorrow, 03:00 PM">Tomorrow, 03:00 PM</option>
                    <option value="Tomorrow, 06:00 PM">Tomorrow, 06:00 PM</option>
                    <option value="This Weekend (Saturday Morning)">This Weekend (Saturday Morning)</option>
                    <option value="This Weekend (Sunday Evening)">This Weekend (Sunday Evening)</option>
                  </select>
                </div>

                <div>
                  <label className="text-neutral-400 block mb-1 text-[11px]">
                    {testDriveType === 'doorstep' ? 'Your Delivery Address:' : 'Select Dealership Hub:'}
                  </label>
                  {testDriveType === 'doorstep' ? (
                    <input
                      type="text"
                      placeholder="e.g. Bandra West, Mumbai"
                      value={addressOrHub}
                      onChange={(e) => setAddressOrHub(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-[#090A10] border border-white/10 text-xs text-white placeholder:text-neutral-500 focus:border-amber-400 focus:outline-none"
                    />
                  ) : (
                    <select
                      value={addressOrHub}
                      onChange={(e) => setAddressOrHub(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-[#090A10] border border-white/10 text-xs text-white focus:border-amber-400 focus:outline-none"
                    >
                      {DEALERSHIP_HUBS.map((h) => (
                        <option key={h.id} value={h.hubName}>
                          {h.hubName}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              </div>
            </div>

            {/* Assurance Note */}
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-300 flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>Valid driving license required at the time of test drive. Zero charges.</span>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 transition-all cursor-pointer flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-4 h-4 fill-black" />
              <span>Confirm Free Test Drive</span>
            </button>

          </form>
        )}

      </div>
    </div>
  );
};
