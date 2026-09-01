import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  Clock, 
  CreditCard, 
  QrCode, 
  User, 
  Phone,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CarItem } from '../types';
import { BUSINESS_CONFIG } from '../data/mockData';

interface ReserveCarModalProps {
  car: CarItem | null;
  onClose: () => void;
}

export const ReserveCarModal: React.FC<ReserveCarModalProps> = ({ car, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card'>('upi');
  const [submitted, setSubmitted] = useState(false);

  if (!car) return null;

  const handleReserve = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 },
    });

    const msg = `*Best Car Deal - ₹999 Vehicle Reservation*\n\n*Buyer:* ${name || 'Guest'}\n*Phone:* ${phone}\n*Reserved Vehicle:* ${car.make} ${car.model} (${car.variant})\n*Price:* ₹${car.price.toLocaleString('en-IN')}\n*Reservation Amount:* ₹999 (100% Refundable Hold)\n*Payment Mode:* ${paymentMethod.toUpperCase()}\n\n_Please block this vehicle for 48 hours and send official reservation slip._`;
    window.open(`https://wa.me/${BUSINESS_CONFIG.phoneRaw}?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#12131C] border border-amber-500/40 shadow-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto">
        
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
            <div className="w-16 h-16 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/40 mx-auto flex items-center justify-center">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white font-heading">
              Vehicle Reserved for 48 Hours!
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
              We have locked <strong className="text-white">{car.make} {car.model}</strong> exclusively for you. Your ₹999 booking deposit is 100% refundable anytime.
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
          <form onSubmit={handleReserve} className="space-y-5">
            
            {/* Header */}
            <div>
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-widest text-amber-400 mb-1">
                <Lock className="w-3.5 h-3.5" />
                <span>48-Hour Exclusive Hold</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white font-heading">
                Reserve Online For ₹999
              </h3>
              <p className="text-xs text-neutral-400 mt-0.5">
                Lock this certified car before anyone else. 100% refundable if you change your mind.
              </p>
            </div>

            {/* Car Snapshot Card */}
            <div className="p-3.5 rounded-2xl bg-[#090A10] border border-white/10 flex items-center space-x-3">
              <img
                src={car.images[0]}
                alt={car.model}
                className="w-16 h-14 object-cover rounded-xl shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-white truncate font-heading">
                  {car.make} {car.model}
                </div>
                <div className="text-[11px] text-neutral-400 truncate">{car.variant}</div>
                <div className="text-xs font-black text-amber-400 font-mono-num mt-0.5">
                  ₹{car.price.toLocaleString('en-IN')}
                </div>
              </div>
            </div>

            {/* Guarantees Strip */}
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-2.5 rounded-xl bg-[#141520] border border-white/5 flex items-center space-x-2 text-neutral-300">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>48-Hour Exclusive Lock</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#141520] border border-white/5 flex items-center space-x-2 text-neutral-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>100% Instant Refund</span>
              </div>
            </div>

            {/* Inputs */}
            <div className="space-y-3 text-xs">
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-400" />
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
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
                  placeholder="Your Phone Number (For Reservation SMS)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#090A10] border border-white/10 text-xs text-white placeholder:text-neutral-500 focus:border-amber-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Payment Mode Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-neutral-300 block">Select Deposit Method:</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center space-x-2 cursor-pointer ${
                    paymentMethod === 'upi'
                      ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                      : 'bg-[#090A10] border-white/10 text-neutral-400'
                  }`}
                >
                  <QrCode className="w-4 h-4" />
                  <span>GooglePay / PhonePe UPI</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center space-x-2 cursor-pointer ${
                    paymentMethod === 'card'
                      ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                      : 'bg-[#090A10] border-white/10 text-neutral-400'
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Debit / Credit Card</span>
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 transition-all cursor-pointer flex items-center justify-center space-x-2"
            >
              <Lock className="w-4 h-4 fill-black" />
              <span>Lock Car Now (Pay ₹999)</span>
            </button>

          </form>
        )}

      </div>
    </div>
  );
};
