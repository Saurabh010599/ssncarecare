import React, { useState } from 'react';
import { 
  Star, 
  Sparkles, 
  ShieldCheck, 
  Quote, 
  CheckCircle2, 
  MapPin, 
  Award,
  ThumbsUp
} from 'lucide-react';
import { TESTIMONIALS, BUSINESS_CONFIG } from '../data/mockData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-20 bg-[#090A0F] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-widest text-amber-400 mb-1">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>Real Buyer Experiences</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
              Rated <span className="gold-gradient-text">4.9/5 Stars</span> by 14,800+ Drivers
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Hear why car buyers and sellers across India rate Best Car Deal as their #1 certified automotive choice.
            </p>
          </div>

          {/* Aggregate Rating Badge */}
          <div className="p-4 rounded-2xl bg-[#141520] border border-amber-500/30 flex items-center space-x-4 shadow-xl shrink-0">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-black text-xl">
              G
            </div>
            <div>
              <div className="flex items-center space-x-1 text-amber-400">
                <span className="font-extrabold text-white text-base">4.9★</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <div className="text-[11px] text-neutral-400">
                {BUSINESS_CONFIG.stats.verifiedReviews} Verified Google &amp; Trustpilot Reviews
              </div>
            </div>
          </div>
        </div>

        {/* 4 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-3xl bg-[#12131C] border border-white/10 hover:border-amber-500/40 transition-all duration-300 shadow-xl space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Author Avatar + Name & Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={rev.avatar}
                      alt={rev.author}
                      className="w-12 h-12 rounded-full object-cover border-2 border-amber-400/40"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center space-x-1.5">
                        <span>{rev.author}</span>
                        {rev.verifiedBadge && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" />
                        )}
                      </h4>
                      <div className="text-[11px] text-neutral-400 flex items-center space-x-1">
                        <MapPin className="w-3 h-3 text-amber-400" />
                        <span>{rev.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Car Purchased & Savings Badge */}
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-lg bg-[#090A10] border border-white/5 text-neutral-200 font-bold">
                    🚗 {rev.carPurchased}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold text-[11px]">
                    💰 {rev.savings}
                  </span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Verified Date */}
              <div className="text-[10px] text-neutral-500 pt-2 border-t border-white/5 flex items-center justify-between">
                <span>Verified Buyer &bull; {rev.date}</span>
                <span className="text-amber-400 font-bold flex items-center space-x-1">
                  <ThumbsUp className="w-3 h-3" />
                  <span>100% Recommended</span>
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
