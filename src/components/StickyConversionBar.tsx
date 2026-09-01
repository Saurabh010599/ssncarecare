import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Sparkles, Navigation, ChevronUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface StickyConversionBarProps {
  onOpenBooking: () => void;
}

export const StickyConversionBar: React.FC<StickyConversionBarProps> = ({ onOpenBooking }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop & Tablet Floating Action Buttons (Right Bottom Corner) */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col items-end space-y-3">
        
        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[#1A1A22]/90 backdrop-blur-md border border-white/10 text-neutral-300 hover:text-white flex items-center justify-center shadow-lg transition-all hover:scale-110"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        )}

        {/* Floating Call Button */}
        <a
          id="floating-call-btn"
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="group px-4 py-3 rounded-full bg-[#18181F] hover:bg-[#22222B] text-white border border-[#353545] shadow-2xl flex items-center space-x-2.5 transition-all hover:scale-105 active:scale-95"
        >
          <div className="w-8 h-8 rounded-full bg-[#5A8FCB]/20 text-[#5A8FCB] flex items-center justify-center">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold pr-1">Call Studio</span>
        </a>

        {/* Floating WhatsApp Button with Notification Ping */}
        <a
          id="floating-whatsapp-btn"
          href={`https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${BUSINESS_INFO.whatsappPrefill()}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative px-5 py-3.5 rounded-full bg-gradient-to-r from-[#25D366] to-[#1EBE5D] hover:from-[#28E06D] hover:to-[#22CC64] text-white shadow-2xl shadow-[#25D366]/40 flex items-center space-x-2.5 transition-all hover:scale-105 active:scale-95"
        >
          {/* Notification Ping Badge */}
          <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500 text-[9px] font-black text-black items-center justify-center">
              1
            </span>
          </span>

          <MessageSquare className="w-5 h-5 fill-current" />
          <div className="text-left">
            <span className="text-xs font-extrabold uppercase tracking-wide block leading-tight">
              Chat on WhatsApp
            </span>
            <span className="text-[10px] text-white/80 font-medium block leading-tight">
              Instant Quote &bull; Online
            </span>
          </div>
        </a>

      </div>

      {/* Mobile Sticky Bottom Conversion Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0F0F13]/95 backdrop-blur-xl border-t border-[#262630] px-3 py-2.5 shadow-2xl safe-area-bottom">
        <div className="grid grid-cols-3 gap-2 items-center">
          
          {/* Mobile Call Button */}
          <a
            id="mobile-sticky-call"
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="py-2.5 px-2 rounded-xl bg-[#1C1C24] text-white text-xs font-bold flex flex-col items-center justify-center border border-[#2D2D3A]"
          >
            <Phone className="w-4 h-4 text-[#5A8FCB] mb-0.5" />
            <span className="text-[10px]">Call Studio</span>
          </a>

          {/* Mobile WhatsApp Button */}
          <a
            id="mobile-sticky-whatsapp"
            href={`https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${BUSINESS_INFO.whatsappPrefill()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-2 rounded-xl bg-[#25D366] text-white text-xs font-bold flex flex-col items-center justify-center shadow-lg shadow-[#25D366]/20"
          >
            <MessageSquare className="w-4 h-4 fill-current mb-0.5" />
            <span className="text-[10px]">WhatsApp</span>
          </a>

          {/* Mobile Quick Estimate Booking Button */}
          <button
            id="mobile-sticky-booking"
            onClick={onOpenBooking}
            className="py-2.5 px-2 rounded-xl bg-gradient-to-r from-[#5A8FCB] to-[#3B71AC] text-white text-xs font-bold flex flex-col items-center justify-center shadow-lg shadow-[#5A8FCB]/20"
          >
            <Sparkles className="w-4 h-4 mb-0.5 text-amber-300" />
            <span className="text-[10px]">Get Quote</span>
          </button>

        </div>
      </div>
    </>
  );
};
