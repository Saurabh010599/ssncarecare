import React from 'react';
import { MapPin, Navigation, Phone, Clock, ShieldCheck, CheckCircle2, Car, Sparkles, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

export const LocalSeoSection: React.FC = () => {
  const seoKeywords = [
    'Auto Detailing Chandrapur',
    'Car Wash Chandrapur',
    'Ceramic Coating Chandrapur',
    'Foam Wash Chandrapur',
    'Paint Protection Chandrapur',
    'Datala Road Detailing Studio',
    'Jagannath Baba Nagar Car Wash',
    'Interior Steam Cleaning Chandrapur',
  ];

  return (
    <section id="location" className="relative bg-[#0B0B0D] py-20 lg:py-28 overflow-hidden border-t border-[#26262B]">
      {/* Background accents */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-[#5A8FCB]/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-[#D42E2E]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#18181D] border border-white/10 text-xs font-semibold text-[#5A8FCB] uppercase tracking-widest">
            <span>Studio Headquarters</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Trusted Across <span className="electric-blue-gradient-text">Chandrapur</span>
          </h2>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            Conveniently located on Datala Road, Jagannath Baba Nagar. Serving vehicle enthusiasts with precision auto detailing, ceramic coatings, and premium car wash services across Chandrapur.
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address Card & Landmark Details */}
          <div className="lg:col-span-5 rounded-3xl bg-[#141418] border border-[#2B2B36] p-7 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl">
            
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-[#5A8FCB]/15 border border-[#5A8FCB]/30 flex items-center justify-center text-[#5A8FCB]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">SN CAR CARE Detailing Studio</h3>
                    <span className="text-xs text-neutral-400">Chandrapur, Maharashtra</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[11px] font-bold">
                  Open Now
                </span>
              </div>

              {/* Exact Address */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Studio Address:</span>
                <p className="text-sm text-neutral-200 leading-relaxed font-medium bg-[#0E0E12] p-4 rounded-xl border border-white/5">
                  {BUSINESS_INFO.location.address}, {BUSINESS_INFO.location.city}, {BUSINESS_INFO.location.state} – {BUSINESS_INFO.location.pincode}
                </p>
              </div>

              {/* Landmark Guidance */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Nearby Landmarks:</span>
                <ul className="space-y-1.5 text-xs text-neutral-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5A8FCB]" />
                    <span>Opposite Jagannath Baba Temple, Datala Road</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5A8FCB]" />
                    <span>Beside Aakar Apartment, Jagannath Baba Nagar</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5A8FCB]" />
                    <span>Easy access with spacious vehicle entry &amp; waiting lounge</span>
                  </li>
                </ul>
              </div>

              {/* Operating Hours */}
              <div className="p-4 rounded-xl bg-[#0E0E12] border border-white/5 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2 text-neutral-300">
                  <Clock className="w-4 h-4 text-[#5A8FCB]" />
                  <span>Hours: <strong>9:00 AM – 8:30 PM</strong></span>
                </div>
                <span className="text-neutral-400">Monday to Sunday</span>
              </div>
            </div>

            {/* Direct Directions Action */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={BUSINESS_INFO.location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 rounded-xl bg-[#5A8FCB] hover:bg-[#4A80BB] text-white font-bold text-xs uppercase tracking-wider text-center transition-all flex items-center justify-center space-x-2 shadow-lg shadow-[#5A8FCB]/20"
              >
                <Navigation className="w-4 h-4" />
                <span>Start Navigation</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="py-3 rounded-xl bg-[#1D1D24] hover:bg-[#252530] text-neutral-200 hover:text-white border border-[#2F2F3D] font-bold text-xs uppercase tracking-wider text-center transition-all flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4 text-[#5A8FCB]" />
                <span>Call Studio</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Preview + SEO Keywords */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Map Frame */}
            <div className="relative rounded-3xl overflow-hidden border border-[#2B2B36] bg-[#141418] shadow-xl min-h-[300px] flex-1">
              <iframe
                title="SN CAR CARE Chandrapur Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15024.123456789!2d79.2891!3d19.9615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd2d5ae1234567%3A0x123456789!2sDatala%20Rd%2C%20Chandrapur%2C%20Maharashtra%20442401!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                className="w-full h-full min-h-[320px] filter invert-[90%] hue-rotate-180 contrast-[90%]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Overlay Badge on Map */}
              <div className="absolute top-4 left-4 bg-[#0B0B0D]/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15 shadow-xl flex items-center space-x-2 text-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D42E2E] animate-ping" />
                <span className="font-bold text-white">SN CAR CARE Detailing Studio</span>
              </div>
            </div>

            {/* Local SEO Tags & Discoverability Block */}
            <div className="p-5 rounded-2xl bg-[#141418] border border-white/5 space-y-3">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-neutral-400">
                <Sparkles className="w-3.5 h-3.5 text-[#5A8FCB]" />
                <span>Premier Detailing Hub for Chandrapur &amp; Surrounding Districts:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {seoKeywords.map((kw, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-medium px-3 py-1 rounded-lg bg-[#0E0E12] text-neutral-300 border border-white/5"
                  >
                    #{kw}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
