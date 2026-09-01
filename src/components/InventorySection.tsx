import React, { useState, useMemo } from 'react';
import { 
  Search, 
  SlidersHorizontal, 
  Sparkles, 
  ShieldCheck, 
  Fuel, 
  Gauge, 
  Calendar, 
  MapPin, 
  Heart, 
  Layers, 
  MessageSquare, 
  ArrowRight, 
  ChevronRight, 
  Check, 
  X, 
  Zap, 
  Car,
  DollarSign
} from 'lucide-react';
import { CarItem, FilterState } from '../types';
import { CARS_INVENTORY, POPULAR_BRANDS, BUSINESS_CONFIG } from '../data/mockData';

interface InventorySectionProps {
  filters: FilterState;
  onFilterChange: (newFilters: Partial<FilterState>) => void;
  onResetFilters: () => void;
  onSelectCar: (car: CarItem) => void;
  onOpenTestDrive: (carId: string, carName: string) => void;
  onToggleWishlist: (carId: string) => void;
  wishlist: string[];
  onToggleCompare: (car: CarItem) => void;
  comparedCars: CarItem[];
}

export const InventorySection: React.FC<InventorySectionProps> = ({
  filters,
  onFilterChange,
  onResetFilters,
  onSelectCar,
  onOpenTestDrive,
  onToggleWishlist,
  wishlist,
  onToggleCompare,
  comparedCars,
}) => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const makes = ['All', 'BMW', 'Mahindra', 'Hyundai', 'Tata', 'Mercedes-Benz', 'Toyota', 'Kia', 'Honda', 'Audi', 'Maruti Suzuki'];
  const bodyTypes = ['All', 'SUV', 'Luxury', 'Sedan', 'Compact SUV', 'EV'];
  const fuelTypes = ['All', 'Petrol', 'Diesel', 'Electric', 'Hybrid'];
  const transmissions = ['All', 'Automatic', 'Manual'];
  const ownerships = ['All', '1st Owner', '2nd Owner'];

  // Filtered & Sorted Inventory
  const filteredCars = useMemo(() => {
    return CARS_INVENTORY.filter((car) => {
      // Search query
      if (filters.searchQuery) {
        const q = filters.searchQuery.toLowerCase();
        const fullText = `${car.make} ${car.model} ${car.variant} ${car.fuel} ${car.transmission} ${car.bodyType} ${car.keyFeatures.join(' ')}`.toLowerCase();
        if (!fullText.includes(q)) return false;
      }

      // Make
      if (filters.make && filters.make !== 'All') {
        if (car.make.toLowerCase() !== filters.make.toLowerCase()) return false;
      }

      // Body Type
      if (filters.bodyType && filters.bodyType !== 'All') {
        if (car.bodyType.toLowerCase() !== filters.bodyType.toLowerCase()) return false;
      }

      // Budget Max
      if (filters.budgetMax > 0) {
        if (car.price > filters.budgetMax) return false;
      }

      // Fuel
      if (filters.fuelType && filters.fuelType !== 'All') {
        if (car.fuel.toLowerCase() !== filters.fuelType.toLowerCase()) return false;
      }

      // Transmission
      if (filters.transmission && filters.transmission !== 'All') {
        if (car.transmission.toLowerCase() !== filters.transmission.toLowerCase()) return false;
      }

      // Ownership
      if (filters.ownership && filters.ownership !== 'All') {
        if (car.ownership.toLowerCase() !== filters.ownership.toLowerCase()) return false;
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-asc') return a.price - b.price;
      if (filters.sortBy === 'price-desc') return b.price - a.price;
      if (filters.sortBy === 'year-desc') return b.year - a.year;
      if (filters.sortBy === 'kms-asc') return a.kms - b.kms;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [filters]);

  const isFilterActive =
    filters.searchQuery !== '' ||
    filters.make !== '' ||
    filters.bodyType !== '' ||
    filters.budgetMax > 0 ||
    filters.fuelType !== '' ||
    filters.transmission !== '' ||
    filters.ownership !== '';

  return (
    <section id="inventory" className="py-16 sm:py-20 bg-[#090A0F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Available Showroom Inventory</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
              Certified Pre-Owned Cars in Stock
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Showing <strong className="text-white font-bold">{filteredCars.length}</strong> of {CARS_INVENTORY.length} thoroughly inspected luxury and everyday cars.
            </p>
          </div>

          {/* Quick Sort & Mobile Filter Trigger */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="lg:hidden px-4 py-2.5 rounded-xl bg-[#141520] border border-white/10 text-xs font-bold text-neutral-200 flex items-center space-x-2 hover:bg-[#1E202E]"
            >
              <SlidersHorizontal className="w-4 h-4 text-amber-400" />
              <span>Filters {isFilterActive && '(Active)'}</span>
            </button>

            <div className="flex items-center space-x-2">
              <span className="text-xs text-neutral-400 hidden sm:inline">Sort:</span>
              <select
                value={filters.sortBy}
                onChange={(e) => onFilterChange({ sortBy: e.target.value as any })}
                className="p-2.5 rounded-xl bg-[#141520] border border-white/10 text-xs text-white focus:border-amber-400 focus:outline-none"
              >
                <option value="featured">Featured &amp; Best Deals</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="year-desc">Year: Newest First</option>
                <option value="kms-asc">KM Driven: Lowest First</option>
              </select>
            </div>
          </div>
        </div>

        {/* Brand Filter Pills Strip */}
        <div className="mb-6 flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
          {makes.map((m) => (
            <button
              key={m}
              onClick={() => onFilterChange({ make: m === 'All' ? '' : m })}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                (filters.make === m || (m === 'All' && !filters.make))
                  ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                  : 'bg-[#141520] border border-white/10 text-neutral-300 hover:text-white hover:bg-[#1D1F2C]'
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Sidebar Filter Engine (Desktop & Mobile Drawer) */}
          <div
            className={`lg:col-span-3 lg:block ${
              showMobileFilters ? 'block fixed inset-0 z-50 bg-black/90 p-6 overflow-y-auto' : 'hidden'
            }`}
          >
            <div className="p-5 rounded-2xl bg-[#12131C] border border-white/10 space-y-6 shadow-xl sticky top-24">
              
              {/* Filter Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <SlidersHorizontal className="w-4 h-4 text-amber-400" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                    Refine Search
                  </h3>
                </div>
                {isFilterActive && (
                  <button
                    onClick={onResetFilters}
                    className="text-[11px] text-amber-400 hover:underline font-bold"
                  >
                    Reset All
                  </button>
                )}
                {showMobileFilters && (
                  <button
                    onClick={() => setShowMobileFilters(false)}
                    className="lg:hidden p-1 text-neutral-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Keyword Search */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-neutral-300">Keyword Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="e.g. Thar, Sunroof, Diesel..."
                    value={filters.searchQuery}
                    onChange={(e) => onFilterChange({ searchQuery: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#090A10] border border-white/10 text-xs text-white placeholder:text-neutral-500 focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Budget Range Selector */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <label className="font-bold text-neutral-300">Max Budget:</label>
                  <span className="font-bold text-amber-400 font-mono-num">
                    {filters.budgetMax > 0 ? `₹${(filters.budgetMax / 100000).toFixed(1)} Lakh` : 'Any Budget'}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="6000000"
                  step="200000"
                  value={filters.budgetMax}
                  onChange={(e) => onFilterChange({ budgetMax: Number(e.target.value) })}
                  className="w-full accent-amber-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-neutral-500 font-mono-num">
                  <span>Any</span>
                  <span>₹20L</span>
                  <span>₹40L</span>
                  <span>₹60L+</span>
                </div>
              </div>

              {/* Body Type */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-neutral-300">Body Type</label>
                <div className="grid grid-cols-2 gap-1.5">
                  {bodyTypes.map((b) => (
                    <button
                      key={b}
                      onClick={() => onFilterChange({ bodyType: b === 'All' ? '' : b })}
                      className={`p-2 rounded-xl text-xs font-semibold text-center transition-all ${
                        (filters.bodyType === b || (b === 'All' && !filters.bodyType))
                          ? 'bg-amber-500/20 border border-amber-500 text-amber-300'
                          : 'bg-[#090A10] border border-white/5 text-neutral-400 hover:text-white'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Fuel Type */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-neutral-300">Fuel Type</label>
                <div className="grid grid-cols-2 gap-1.5">
                  {fuelTypes.map((f) => (
                    <button
                      key={f}
                      onClick={() => onFilterChange({ fuelType: f === 'All' ? '' : f })}
                      className={`p-2 rounded-xl text-xs font-semibold text-center transition-all ${
                        (filters.fuelType === f || (f === 'All' && !filters.fuelType))
                          ? 'bg-amber-500/20 border border-amber-500 text-amber-300'
                          : 'bg-[#090A10] border border-white/5 text-neutral-400 hover:text-white'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Transmission */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-neutral-300">Transmission</label>
                <div className="grid grid-cols-3 gap-1.5">
                  {transmissions.map((t) => (
                    <button
                      key={t}
                      onClick={() => onFilterChange({ transmission: t === 'All' ? '' : t })}
                      className={`p-2 rounded-xl text-xs font-semibold text-center transition-all ${
                        (filters.transmission === t || (t === 'All' && !filters.transmission))
                          ? 'bg-amber-500/20 border border-amber-500 text-amber-300'
                          : 'bg-[#090A10] border border-white/5 text-neutral-400 hover:text-white'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Ownership */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-neutral-300">Ownership</label>
                <div className="grid grid-cols-3 gap-1.5">
                  {ownerships.map((o) => (
                    <button
                      key={o}
                      onClick={() => onFilterChange({ ownership: o === 'All' ? '' : o })}
                      className={`p-2 rounded-xl text-xs font-semibold text-center transition-all ${
                        (filters.ownership === o || (o === 'All' && !filters.ownership))
                          ? 'bg-amber-500/20 border border-amber-500 text-amber-300'
                          : 'bg-[#090A10] border border-white/5 text-neutral-400 hover:text-white'
                      }`}
                    >
                      {o}
                    </button>
                  ))}
                </div>
              </div>

              {showMobileFilters && (
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="w-full py-3 rounded-xl bg-amber-500 text-black font-extrabold text-xs uppercase tracking-wider"
                >
                  View ({filteredCars.length}) Matching Cars
                </button>
              )}

            </div>
          </div>

          {/* Right Inventory Grid (9 cols) */}
          <div className="lg:col-span-9">
            
            {/* Active Filter Badges */}
            {isFilterActive && (
              <div className="mb-4 flex flex-wrap items-center gap-2 text-xs">
                <span className="text-neutral-400 font-medium">Active Filters:</span>
                {filters.make && (
                  <span className="px-2.5 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 flex items-center space-x-1">
                    <span>Make: {filters.make}</span>
                    <button onClick={() => onFilterChange({ make: '' })}><X className="w-3 h-3" /></button>
                  </span>
                )}
                {filters.bodyType && (
                  <span className="px-2.5 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 flex items-center space-x-1">
                    <span>Type: {filters.bodyType}</span>
                    <button onClick={() => onFilterChange({ bodyType: '' })}><X className="w-3 h-3" /></button>
                  </span>
                )}
                {filters.budgetMax > 0 && (
                  <span className="px-2.5 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 flex items-center space-x-1">
                    <span>Budget &lt; ₹{(filters.budgetMax / 100000).toFixed(0)}L</span>
                    <button onClick={() => onFilterChange({ budgetMax: 0 })}><X className="w-3 h-3" /></button>
                  </span>
                )}
                {filters.fuelType && (
                  <span className="px-2.5 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 flex items-center space-x-1">
                    <span>Fuel: {filters.fuelType}</span>
                    <button onClick={() => onFilterChange({ fuelType: '' })}><X className="w-3 h-3" /></button>
                  </span>
                )}
                {filters.searchQuery && (
                  <span className="px-2.5 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 flex items-center space-x-1">
                    <span>"{filters.searchQuery}"</span>
                    <button onClick={() => onFilterChange({ searchQuery: '' })}><X className="w-3 h-3" /></button>
                  </span>
                )}
                <button
                  onClick={onResetFilters}
                  className="text-xs text-neutral-400 hover:text-white underline ml-2"
                >
                  Clear All
                </button>
              </div>
            )}

            {/* Empty State */}
            {filteredCars.length === 0 ? (
              <div className="p-12 rounded-3xl bg-[#12131C] border border-white/10 text-center space-y-4">
                <Car className="w-12 h-12 text-neutral-600 mx-auto" />
                <h3 className="text-xl font-bold text-white font-heading">
                  No Cars Found Matching Your Criteria
                </h3>
                <p className="text-xs text-neutral-400 max-w-md mx-auto">
                  Try adjusting your budget or clearing some filters to explore our full inventory of certified pre-owned vehicles.
                </p>
                <button
                  onClick={onResetFilters}
                  className="px-6 py-2.5 rounded-xl bg-amber-500 text-black font-extrabold text-xs uppercase tracking-wider"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCars.map((car) => {
                  const isWishlisted = wishlist.includes(car.id);
                  const isCompared = comparedCars.some((c) => c.id === car.id);
                  const savings = car.originalNewPrice - car.price;

                  return (
                    <div
                      key={car.id}
                      className="group relative rounded-2xl bg-[#12131C] border border-white/10 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between overflow-hidden"
                    >
                      {/* Top Image Container */}
                      <div className="relative h-48 sm:h-52 overflow-hidden bg-[#090A10]">
                        <img
                          src={car.images[0]}
                          alt={`${car.make} ${car.model}`}
                          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#12131C] via-transparent to-black/40" />

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                          <span className="px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md text-[10px] font-bold text-amber-400 border border-amber-500/30">
                            {car.dealTag || 'Certified'}
                          </span>

                          <div className="flex items-center space-x-1.5">
                            {/* Wishlist Button */}
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                onToggleWishlist(car.id);
                              }}
                              className="w-8 h-8 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:text-red-400 transition-colors"
                              aria-label="Save to wishlist"
                            >
                              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
                            </button>

                            {/* Compare Checkbox Button */}
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                onToggleCompare(car);
                              }}
                              className={`w-8 h-8 rounded-lg backdrop-blur-md border flex items-center justify-center transition-colors ${
                                isCompared
                                  ? 'bg-amber-500 text-black border-amber-400 font-bold'
                                  : 'bg-black/75 text-white border-white/10 hover:text-amber-300'
                              }`}
                              title={isCompared ? 'Remove from compare' : 'Add to compare'}
                            >
                              <Layers className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        {/* Bottom Image Overlay Strip */}
                        <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] text-white">
                          <span className="flex items-center space-x-1 text-emerald-400 font-bold bg-black/60 px-2 py-0.5 rounded-md backdrop-blur-md">
                            <ShieldCheck className="w-3 h-3" />
                            <span>{car.inspectionScore}/210 Check</span>
                          </span>
                          <span className="text-neutral-300 bg-black/60 px-2 py-0.5 rounded-md backdrop-blur-md">
                            {car.location.split(',')[0]}
                          </span>
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                        
                        {/* Title & Variant */}
                        <div>
                          <div className="flex items-start justify-between gap-1">
                            <h3 
                              onClick={() => onSelectCar(car)}
                              className="text-base font-bold text-white group-hover:text-amber-400 transition-colors cursor-pointer line-clamp-1 font-heading"
                            >
                              {car.make} {car.model}
                            </h3>
                            <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-bold text-neutral-300 shrink-0">
                              {car.ownership}
                            </span>
                          </div>
                          <p className="text-xs text-neutral-400 line-clamp-1 mt-0.5">
                            {car.variant}
                          </p>
                        </div>

                        {/* Specs Grid */}
                        <div className="grid grid-cols-3 gap-1.5 text-center text-[11px] py-2 border-y border-white/5">
                          <div className="p-1 rounded bg-[#090A10]">
                            <div className="text-[9px] text-neutral-500">Year &bull; KM</div>
                            <div className="font-bold text-neutral-200 font-mono-num">{car.year} &bull; {(car.kms / 1000).toFixed(0)}k km</div>
                          </div>
                          <div className="p-1 rounded bg-[#090A10]">
                            <div className="text-[9px] text-neutral-500">Fuel &bull; Gear</div>
                            <div className="font-bold text-neutral-200">{car.fuel} &bull; {car.transmission === 'Automatic' ? 'AT' : 'MT'}</div>
                          </div>
                          <div className="p-1 rounded bg-[#090A10]">
                            <div className="text-[9px] text-neutral-500">Mileage</div>
                            <div className="font-bold text-neutral-200">{car.mileage.split(' ')[0]}</div>
                          </div>
                        </div>

                        {/* Price & EMI Section */}
                        <div className="flex items-end justify-between pt-1">
                          <div>
                            <div className="text-[10px] text-neutral-500">
                              Save ₹{(savings / 100000).toFixed(1)}L vs New
                            </div>
                            <div className="text-lg font-black text-white font-heading">
                              ₹{(car.price / 100000).toFixed(2)} Lakh
                            </div>
                          </div>

                          <div className="text-right">
                            <div className="text-[10px] text-neutral-400">EMI Starting:</div>
                            <div className="text-xs font-bold text-amber-400 font-mono-num">
                              ₹{car.emiStarting.toLocaleString()}/mo
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-2 gap-2 pt-2">
                          <button
                            type="button"
                            onClick={() => onSelectCar(car)}
                            className="py-2 px-2.5 rounded-xl bg-[#1A1C28] hover:bg-[#252838] border border-white/10 text-[11px] font-bold text-neutral-200 hover:text-white transition-colors cursor-pointer text-center"
                          >
                            View 210-Pt Report
                          </button>

                          <button
                            type="button"
                            onClick={() => onOpenTestDrive(car.id, `${car.make} ${car.model}`)}
                            className="py-2 px-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-[11px] uppercase tracking-wide transition-all cursor-pointer text-center flex items-center justify-center space-x-1"
                          >
                            <Sparkles className="w-3 h-3 fill-black" />
                            <span>Test Drive</span>
                          </button>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
