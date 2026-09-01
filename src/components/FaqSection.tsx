import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Sparkles, 
  ShieldCheck, 
  MessageSquare, 
  Phone
} from 'lucide-react';
import { FAQS, BUSINESS_CONFIG } from '../data/mockData';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-[#090A0F] border-t border-white/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-2 mb-12">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-widest text-amber-400">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
            Frequently Asked <span className="gold-gradient-text">Questions</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400">
            Everything you need to know about our 210-point inspection, 7-day return policy, warranty, and easy RC transfer.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#12131C] border border-white/10 overflow-hidden transition-colors hover:border-white/20"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-white font-heading">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-xl bg-[#1B1D2C] text-amber-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-amber-500 text-black' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-white/5 pt-3 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Help Callout */}
        <div className="mt-12 p-6 rounded-3xl bg-[#141522] border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-white font-heading">Still have questions?</h4>
            <p className="text-xs text-neutral-400 mt-0.5">
              Speak directly with our senior automotive advisor. No automated bots.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="py-2.5 px-4 rounded-xl bg-[#1C1E2A] hover:bg-[#252838] border border-white/10 text-white font-bold text-xs flex items-center space-x-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call Helpline</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.phoneRaw}?text=Hi%20Best%20Car%20Deal,%20I%20have%20a%20question%20regarding%20buying/selling%20a%20car.`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-wider flex items-center space-x-1.5 shadow-md shadow-amber-500/20"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-black" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
