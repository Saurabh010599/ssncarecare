import React from 'react';
import { Phone, MapPin, Clock, Star, Shield, MessageSquare, ArrowUp, ChevronRight, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/mockData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070709] text-neutral-400 text-xs border-t border-[#202026]">
      {/* Top Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Brand & Tagline (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1C1C22] to-[#0E0E12] border border-[#5A8FCB]/40 flex items-center justify-center shadow-lg">
                <span className="font-brand font-bold text-lg text-white">SN</span>
              </div>
              <div>
                <span className="font-brand text-base font-extrabold tracking-wider text-white block">
                  SN CAR CARE
                </span>
                <span className="text-[10px] tracking-widest text-[#5A8FCB] uppercase font-bold">
                  Detailing Studio
                </span>
              </div>
            </div>

            <p className="text-neutral-300 text-sm font-semibold tracking-wide text-white">
              "{BUSINESS_INFO.tagline}"
            </p>

            <p className="text-neutral-400 leading-relaxed text-xs">
              Chandrapur’s destination for high-precision automotive detailing, 9H/10H nano-ceramic coatings, active foam wash, and deep steam extraction.
            </p>

            {/* Google Rating Badge */}
            <div className="p-3.5 rounded-xl bg-[#121216] border border-[#252530] flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center font-bold text-[#4285F4] text-base">
                  G
                </div>
                <div>
                  <div className="flex items-center space-x-1 text-amber-400">
                    <span className="font-extrabold text-white text-sm">4.5★</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <div className="text-[10px] text-neutral-400">47 Verified Google Reviews</div>
                </div>
              </div>
              <a
                href={BUSINESS_INFO.location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-bold text-[#5A8FCB] hover:text-white"
              >
                View &rarr;
              </a>
            </div>
          </div>

          {/* Col 2: Services Directory (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Detailing Services
            </h4>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors flex items-center space-x-1.5 text-neutral-300"
                  >
                    <ChevronRight className="w-3 h-3 text-[#5A8FCB]" />
                    <span>{s.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links & Local Areas (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Studio Links
            </h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services Showcase</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#transformations" className="hover:text-white transition-colors">Before &amp; After</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Studio</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Google Reviews</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Studio Location</a></li>
            </ul>

            <div className="pt-2">
              <h5 className="text-[11px] font-bold text-neutral-300 mb-1.5 uppercase">Areas Served:</h5>
              <p className="text-[11px] text-neutral-500 leading-tight">
                Datala Road &bull; Jagannath Baba Nagar &bull; Chandrapur City &bull; Babupeth &bull; Tukum &bull; Ramnagar &bull; Ballarpur Rd.
              </p>
            </div>
          </div>

          {/* Col 4: Contact & Studio Info (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Studio Details
            </h4>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#5A8FCB] shrink-0 mt-0.5" />
                <span className="text-neutral-300 leading-relaxed text-xs">
                  {BUSINESS_INFO.location.address}, {BUSINESS_INFO.location.city}, Maharashtra {BUSINESS_INFO.location.pincode}
                </span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#5A8FCB] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-white hover:text-[#5A8FCB] font-bold text-sm">
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-[#5A8FCB] shrink-0" />
                <span className="text-neutral-300 text-xs">
                  {BUSINESS_INFO.timings}
                </span>
              </div>

              {/* Direct Quick WhatsApp link */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${BUSINESS_INFO.whatsappPrefill()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border border-[#25D366]/30 font-bold flex items-center justify-center space-x-2 transition-all text-xs"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Direct WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright & Legal Strip */}
      <div className="border-t border-[#181820] bg-[#050507] py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} <strong className="text-neutral-300">SN CAR CARE Detailing Studio</strong>. All rights reserved. | Chandrapur, Maharashtra.
          </div>

          <div className="flex items-center space-x-6">
            <span>Keep Your Car Feel New</span>
            <span>&bull;</span>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 text-neutral-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
