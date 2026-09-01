import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServicesShowcase } from './components/ServicesShowcase';
import { BrandStory } from './components/BrandStory';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocalSeoSection } from './components/LocalSeoSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { BookingQuoteModal } from './components/BookingQuoteModal';
import { StickyConversionBar } from './components/StickyConversionBar';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [initialServiceId, setInitialServiceId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceId?: string) => {
    setInitialServiceId(serviceId);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setInitialServiceId(undefined);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-[#F5F5F5] font-sans antialiased selection:bg-[#5A8FCB]/30 selection:text-white pb-16 md:pb-0">
      {/* 1. Header & Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main>
        {/* Section 1: Premium Cinematic Hero (100vh) */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Section 2: Trust & Stats with Chrome Dividers */}
        <StatsSection />

        {/* Section 3: Why Choose SN CAR CARE (5 Glass Cards) */}
        <WhyChooseUs onOpenBooking={() => handleOpenBooking()} />

        {/* Section 4: Premium Services Showcase (9 Complete Solutions) */}
        <ServicesShowcase
          onSelectService={(serviceId) => handleOpenBooking(serviceId)}
          onOpenBooking={handleOpenBooking}
        />

        {/* Section 5: About The Brand ("More Than Just A Car Wash") */}
        <BrandStory onOpenBooking={() => handleOpenBooking()} />

        {/* Section 6: Before & After Transformation Interactive Slider */}
        <BeforeAfterSection />

        {/* Section 7: Google Reviews (4.5★ & 47 Reviews) */}
        <ReviewsSection />

        {/* Section 8: Local SEO & Chandrapur Studio Map */}
        <LocalSeoSection />

        {/* Section 9: Final Metallic CTA Section */}
        <FinalCtaSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Quotation & Slot Calculator Modal */}
      <BookingQuoteModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        initialServiceId={initialServiceId}
      />

      {/* Floating & Mobile Sticky Conversion CTA Elements */}
      <StickyConversionBar onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
}
