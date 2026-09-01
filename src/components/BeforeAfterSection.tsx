import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, MoveHorizontal, CheckCircle2, Eye, ShieldCheck, ArrowRight } from 'lucide-react';
import { BEFORE_AFTER_ITEMS } from '../data/mockData';

export const BeforeAfterSection: React.FC = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [galleryModalOpen, setGalleryModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeItem = BEFORE_AFTER_ITEMS[activeItemIndex];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="transformations" className="relative bg-[#0B0B0D] py-20 lg:py-28 overflow-hidden border-t border-[#26262B]">
      {/* Background accents */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-[#5A8FCB]/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#D42E2E]/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#18181D] border border-white/10 text-xs font-semibold text-[#5A8FCB] uppercase tracking-widest">
            <span>Visual Evidence</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            See The <span className="electric-blue-gradient-text">Difference</span>
          </h2>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            Professional detailing results that speak for themselves. Drag the comparison slider below to inspect the transformation.
          </p>
        </div>

        {/* Vehicle Case Selector Chips */}
        <div className="flex items-center justify-center space-x-2 sm:space-x-3 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {BEFORE_AFTER_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveItemIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                activeItemIndex === idx
                  ? 'bg-gradient-to-r from-[#5A8FCB] to-[#3B71AC] text-white border border-[#5A8FCB] shadow-lg shadow-[#5A8FCB]/20'
                  : 'bg-[#15151A] text-neutral-400 hover:text-white hover:bg-[#1C1C22] border border-[#26262B]'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Main Interactive Before/After Component */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#131317] p-4 sm:p-8 rounded-3xl border border-[#262630] shadow-2xl">
          
          {/* Left / Center: The Slider Canvas */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden cursor-ew-resize select-none border border-white/10 shadow-2xl"
            >
              {/* "AFTER" Image (Full background layer) */}
              <img
                src={activeItem.afterImage}
                alt={`${activeItem.title} - After SN CAR CARE Detailing`}
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none filter brightness-100 contrast-105"
              />

              {/* "BEFORE" Image (Clipped container on top) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={activeItem.beforeImage}
                  alt={`${activeItem.title} - Before Detailing`}
                  className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none filter brightness-90 saturate-75"
                  style={{
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                    maxWidth: 'none',
                  }}
                />
              </div>

              {/* Vertical Slider Handle Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)] z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Center Circular Controller */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0B0B0D] border-2 border-white flex items-center justify-center text-white shadow-xl">
                  <MoveHorizontal className="w-5 h-5 text-[#5A8FCB]" />
                </div>
              </div>

              {/* Corner Badges */}
              <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-xs font-bold text-neutral-300 uppercase tracking-wider">
                &larr; Before Treatment
              </div>
              <div className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-lg bg-[#5A8FCB]/90 backdrop-blur-md border border-white/20 text-xs font-bold text-white uppercase tracking-wider">
                After Studio Finish &rarr;
              </div>

              {/* Bottom Drag Instruction */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] text-neutral-300 pointer-events-none flex items-center space-x-1.5">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Drag slider or click anywhere to compare</span>
              </div>
            </div>
          </div>

          {/* Right: Detailed Case Inspection Info */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#5A8FCB] font-bold">
                {activeItem.serviceType}
              </span>
              <h3 className="text-2xl font-black text-white mt-1">
                {activeItem.vehicle}
              </h3>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-[#0E0E12] border border-white/5 space-y-1">
                <span className="text-[11px] uppercase font-bold text-[#FF6B6B]">Pre-Service Condition:</span>
                <p className="text-neutral-300 leading-relaxed font-normal">{activeItem.beforeDescription}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0E0E12] border border-[#5A8FCB]/20 space-y-1">
                <span className="text-[11px] uppercase font-bold text-[#5A8FCB]">Studio Outcome:</span>
                <p className="text-neutral-200 leading-relaxed font-medium">{activeItem.afterDescription}</p>
              </div>
            </div>

            {/* Key highlights checklist */}
            <div className="space-y-2 pt-1">
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Key Transformation Points:</span>
              <div className="grid grid-cols-2 gap-2">
                {activeItem.keyHighlights.map((point, idx) => (
                  <div key={idx} className="flex items-center space-x-1.5 text-xs text-neutral-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={() => setGalleryModalOpen(true)}
                className="w-full py-3 rounded-xl bg-[#1B1B22] hover:bg-[#252530] text-neutral-200 hover:text-white border border-[#2F2F3D] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2"
              >
                <Eye className="w-4 h-4 text-[#5A8FCB]" />
                <span>View Full Gallery ({BEFORE_AFTER_ITEMS.length} Transformations)</span>
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Gallery Modal */}
      {galleryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl rounded-2xl bg-[#141418] border border-[#30303D] p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h3 className="text-2xl font-black text-white">Transformation Showcase Gallery</h3>
                <p className="text-xs text-neutral-400">Real customer vehicles detailed at SN CAR CARE Chandrapur studio</p>
              </div>
              <button
                onClick={() => setGalleryModalOpen(false)}
                className="p-2 rounded-lg bg-[#202026] text-neutral-300 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {BEFORE_AFTER_ITEMS.map((item) => (
                <div key={item.id} className="rounded-xl bg-[#0B0B0D] border border-white/10 overflow-hidden space-y-3 p-3">
                  <div className="grid grid-cols-2 gap-2 aspect-[16/9]">
                    <div className="relative rounded-lg overflow-hidden">
                      <img src={item.beforeImage} alt="Before" className="w-full h-full object-cover" />
                      <span className="absolute bottom-2 left-2 bg-black/80 px-2 py-0.5 text-[10px] text-white font-bold rounded">BEFORE</span>
                    </div>
                    <div className="relative rounded-lg overflow-hidden">
                      <img src={item.afterImage} alt="After" className="w-full h-full object-cover" />
                      <span className="absolute bottom-2 left-2 bg-[#5A8FCB] px-2 py-0.5 text-[10px] text-white font-bold rounded">AFTER</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-neutral-400">{item.vehicle} &bull; {item.serviceType}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-4 border-t border-white/10">
              <button
                onClick={() => setGalleryModalOpen(false)}
                className="px-6 py-2.5 rounded-xl bg-[#5A8FCB] text-white text-xs font-bold uppercase tracking-wider"
              >
                Close Gallery
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
