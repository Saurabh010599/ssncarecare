import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickTrustStrip } from './components/QuickTrustStrip';
import { InventorySection } from './components/InventorySection';
import { InspectionAssuranceSection } from './components/InspectionAssuranceSection';
import { SellCarSection } from './components/SellCarSection';
import { EmiCalculatorSection } from './components/EmiCalculatorSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ExperienceHubsSection } from './components/ExperienceHubsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CarDetailModal } from './components/CarDetailModal';
import { TestDriveModal } from './components/TestDriveModal';
import { ReserveCarModal } from './components/ReserveCarModal';
import { CarComparisonDrawer } from './components/CarComparisonDrawer';
import { FilterState, CarItem } from './types';
import { CARS_INVENTORY } from './data/mockData';

export function App() {
  // Global Filter State
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    make: '',
    bodyType: '',
    budgetMax: 0,
    fuelType: '',
    transmission: '',
    ownership: '',
    sortBy: 'featured',
  });

  const [selectedCity, setSelectedCity] = useState('Mumbai');
  const [selectedCarForModal, setSelectedCarForModal] = useState<CarItem | null>(null);
  const [selectedCarForReserve, setSelectedCarForReserve] = useState<CarItem | null>(null);

  // Test Drive Modal State
  const [testDriveModalOpen, setTestDriveModalOpen] = useState(false);
  const [testDriveCarId, setTestDriveCarId] = useState<string | undefined>(undefined);
  const [testDriveCarName, setTestDriveCarName] = useState<string | undefined>(undefined);

  // Wishlist State (car IDs)
  const [wishlist, setWishlist] = useState<string[]>(['1', '3']);

  // Comparison State (car items)
  const [comparedCars, setComparedCars] = useState<CarItem[]>([]);

  // Filter Updates
  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const handleResetFilters = () => {
    setFilters({
      searchQuery: '',
      make: '',
      bodyType: '',
      budgetMax: 0,
      fuelType: '',
      transmission: '',
      ownership: '',
      sortBy: 'featured',
    });
  };

  // Wishlist toggle
  const handleToggleWishlist = (carId: string) => {
    setWishlist((prev) =>
      prev.includes(carId) ? prev.filter((id) => id !== carId) : [...prev, carId]
    );
  };

  // Compare toggle
  const handleToggleCompare = (car: CarItem) => {
    setComparedCars((prev) => {
      const exists = prev.some((c) => c.id === car.id);
      if (exists) {
        return prev.filter((c) => c.id !== car.id);
      }
      if (prev.length >= 3) {
        alert('You can compare up to 3 cars at a time.');
        return prev;
      }
      return [...prev, car];
    });
  };

  const handleRemoveCompare = (carId: string) => {
    setComparedCars((prev) => prev.filter((c) => c.id !== carId));
  };

  const handleClearCompare = () => {
    setComparedCars([]);
  };

  // Test drive open
  const handleOpenTestDrive = (carId?: string, carName?: string) => {
    setTestDriveCarId(carId);
    setTestDriveCarName(carName);
    setTestDriveModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#090A0F] text-white flex flex-col selection:bg-amber-500 selection:text-black">
      
      {/* Top Luxury Navigation */}
      <Navbar
        selectedCity={selectedCity}
        onSelectCity={setSelectedCity}
        onOpenTestDrive={() => handleOpenTestDrive()}
        wishlistCount={wishlist.length}
        compareCount={comparedCars.length}
        onOpenWishlist={() => {
          // Scroll to inventory and filter to wishlist if desired or open inventory
          const el = document.getElementById('inventory');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <main className="flex-1">
        {/* Hero Section with Live Search Engine & Spotlight Car */}
        <Hero
          onSearchApply={(f) => handleFilterChange(f)}
          onOpenTestDrive={(id, name) => handleOpenTestDrive(id, name)}
          onSelectCar={(car) => setSelectedCarForModal(car)}
        />

        {/* 4 Trust Pillars & Live Dealership Metrics */}
        <QuickTrustStrip />

        {/* Main Inventory Section with Multi-Filter Grid */}
        <InventorySection
          filters={filters}
          onFilterChange={handleFilterChange}
          onResetFilters={handleResetFilters}
          onSelectCar={(car) => setSelectedCarForModal(car)}
          onOpenTestDrive={(id, name) => handleOpenTestDrive(id, name)}
          onToggleWishlist={handleToggleWishlist}
          wishlist={wishlist}
          onToggleCompare={handleToggleCompare}
          comparedCars={comparedCars}
        />

        {/* 210-Point Technical Inspection Assurance & Diagnostics */}
        <InspectionAssuranceSection />

        {/* Sell Your Car with Instant Algorithmic Valuation */}
        <SellCarSection />

        {/* Smart Auto Loan & EMI Calculator */}
        <EmiCalculatorSection />

        {/* Google 4.9★ Customer Reviews & Experiences */}
        <ReviewsSection />

        {/* Dealership Experience Centers & Pan-India Hubs */}
        <ExperienceHubsSection
          selectedCity={selectedCity}
          onSelectCity={setSelectedCity}
        />

        {/* FAQ Accordion Section */}
        <FaqSection />
      </main>

      {/* Luxury Footer with Pan-India Directory & Floating Mobile Dock */}
      <Footer
        onOpenTestDrive={() => handleOpenTestDrive()}
        onOpenSellCar={() => {
          const el = document.getElementById('sell-car');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onFilterMake={(make) => handleFilterChange({ make })}
      />

      {/* Car Detailed 210-Pt Report Modal */}
      <CarDetailModal
        car={selectedCarForModal}
        onClose={() => setSelectedCarForModal(null)}
        onOpenTestDrive={(id, name) => handleOpenTestDrive(id, name)}
        onOpenReserve={(car) => setSelectedCarForReserve(car)}
        isWishlisted={selectedCarForModal ? wishlist.includes(selectedCarForModal.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* Book Test Drive Modal */}
      <TestDriveModal
        isOpen={testDriveModalOpen}
        onClose={() => setTestDriveModalOpen(false)}
        initialCarId={testDriveCarId}
        initialCarName={testDriveCarName}
      />

      {/* ₹999 Refundable 48-Hour Vehicle Reservation Modal */}
      <ReserveCarModal
        car={selectedCarForReserve}
        onClose={() => setSelectedCarForReserve(null)}
      />

      {/* Interactive Floating Comparison Bar & Side-by-Side Matrix */}
      <CarComparisonDrawer
        comparedCars={comparedCars}
        onRemoveCompare={handleRemoveCompare}
        onClearCompare={handleClearCompare}
        onOpenTestDrive={(id, name) => handleOpenTestDrive(id, name)}
        onSelectCar={(car) => setSelectedCarForModal(car)}
      />

    </div>
  );
}
export default App;
