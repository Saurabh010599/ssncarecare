import React, { useState } from 'react';
import { Star, ShieldCheck, CheckCircle2, MessageSquare, ExternalLink, ThumbsUp } from 'lucide-react';
import { REVIEWS, BUSINESS_INFO } from '../data/mockData';

export const ReviewsSection: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const tags = ['all', 'Best Detailing in Chandrapur', 'Spotless Interior Results', 'Mirror Gloss Reflection', 'Luxury Studio Standard', 'Careful Bike Grooming'];

  const filteredReviews = selectedTag === 'all'
    ? REVIEWS
    : REVIEWS.filter((r) => r.tag === selectedTag);

  return (
    <section id="reviews" className="relative bg-[#0E0E12] py-20 lg:py-28 overflow-hidden border-t border-[#26262B]">
      {/* Background accents */}
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-[#5A8FCB]/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#D42E2E]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#18181D] border border-white/10 text-xs font-semibold text-[#5A8FCB] uppercase tracking-widest">
              <span>Google Verified Reviews</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              What Customers <span className="electric-blue-gradient-text">Say</span>
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              Read real feedback from vehicle owners across Chandrapur who trust our studio with their prized cars and bikes.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#141418] border border-[#2F2F3D] shadow-xl flex items-center space-x-5 self-start md:self-auto">
            <div className="text-center border-r border-white/10 pr-4">
              <div className="text-3xl font-black text-white font-heading">4.5★</div>
              <div className="text-[11px] text-neutral-400 font-medium">Out of 5.0</div>
            </div>
            <div className="space-y-1">
              <div className="flex text-amber-400 space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs font-bold text-white">47 Google Reviews</div>
              <div className="text-[10px] text-emerald-400 font-semibold flex items-center space-x-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>100% Genuine Studio Guests</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter tags */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedTag === tag
                  ? 'bg-[#5A8FCB] text-white shadow-md'
                  : 'bg-[#15151A] text-neutral-400 hover:text-white border border-[#26262B]'
              }`}
            >
              {tag === 'all' ? 'All Reviews (47+)' : tag}
            </button>
          ))}
        </div>

        {/* Review Cards Grid (Glassmorphism design) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="rounded-2xl bg-gradient-to-b from-[#18181E] to-[#111115] border border-[#2A2A35] hover:border-[#5A8FCB]/40 p-6 sm:p-7 transition-all duration-300 shadow-xl flex flex-col justify-between space-y-4 group"
            >
              {/* Top review header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#5A8FCB]/30 to-[#D42E2E]/30 border border-white/20 flex items-center justify-center font-bold text-sm text-white">
                    {rev.avatarText}
                  </div>
                  <div>
                    <div className="flex items-center space-x-1.5">
                      <h4 className="text-sm font-bold text-white">{rev.author}</h4>
                      {rev.verified && (
                        <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[9px] font-bold" title="Google Verified Local Review">
                          ✓
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-neutral-400">{rev.vehicle}</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex text-amber-400 space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(rev.rating) ? 'fill-amber-400 text-amber-400' : 'text-amber-400/40'}`} />
                    ))}
                  </div>
                  <span className="text-[10px] text-neutral-500">{rev.date}</span>
                </div>
              </div>

              {/* Service Tag pill */}
              <div className="inline-block">
                <span className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-[#5A8FCB]/10 text-[#A5C9EB] border border-[#5A8FCB]/20">
                  {rev.service}
                </span>
              </div>

              {/* Review Text */}
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic">
                "{rev.comment}"
              </p>

              {/* Bottom footer */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-400">
                <span className="text-neutral-500">Google Verified Review</span>
                <span className="text-emerald-400 font-medium">★ Recommended</span>
              </div>
            </div>
          ))}
        </div>

        {/* Write a review & Google Map badge CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-[#141418] border border-[#2B2B36] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white">Visited SN CAR CARE recently?</h4>
            <p className="text-xs text-neutral-400">Your genuine review helps car owners in Chandrapur find quality detailing.</p>
          </div>

          <a
            href={BUSINESS_INFO.location.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[#202028] hover:bg-[#282834] text-white border border-[#383848] text-xs font-bold transition-all flex items-center space-x-2 shrink-0"
          >
            <span>Review Us on Google</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#5A8FCB]" />
          </a>
        </div>

      </div>
    </section>
  );
};
