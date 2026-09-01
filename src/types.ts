export interface CarItem {
  id: string;
  make: string;
  model: string;
  variant: string;
  year: number;
  price: number;
  originalNewPrice: number;
  emiStarting: number;
  kms: number;
  fuel: 'Petrol' | 'Diesel' | 'Electric' | 'CNG' | 'Hybrid';
  transmission: 'Automatic' | 'Manual';
  bodyType: 'SUV' | 'Luxury' | 'Sedan' | 'Hatchback' | 'Compact SUV' | 'MUV' | 'EV';
  ownership: '1st Owner' | '2nd Owner' | '3rd Owner';
  location: string;
  registrationState: string;
  insuranceValidity: string;
  inspectionScore: number; // e.g. 206 out of 210
  color: string;
  mileage: string;
  engine: string;
  power: string;
  safetyRating: string;
  images: string[];
  featured?: boolean;
  dealTag?: string;
  keyFeatures: string[];
  inspectionHighlights: {
    engineTransmission: string;
    chassisBody: string;
    electricals: string;
    tiresSuspension: string;
    airConditioning: string;
  };
  serviceHistory: {
    lastServiceDate: string;
    lastServiceKm: number;
    authorizedCenter: string;
    conditionStatus: 'Pristine' | 'Excellent' | 'Superb';
  };
}

export interface FilterState {
  searchQuery: string;
  bodyType: string;
  make: string;
  budgetMax: number;
  fuelType: string;
  transmission: string;
  ownership: string;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'year-desc' | 'kms-asc';
}

export interface ValuationFormState {
  make: string;
  model: string;
  year: number;
  fuel: string;
  transmission: string;
  kms: number;
  ownership: string;
  city: string;
  condition: 'Excellent' | 'Good' | 'Fair';
  sellerName: string;
  sellerPhone: string;
}

export interface TestDriveBookingState {
  carId: string;
  carName: string;
  bookingType: 'doorstep' | 'hub';
  fullName: string;
  phone: string;
  email: string;
  city: string;
  address: string;
  date: string;
  timeSlot: string;
  hasDrivingLicense: boolean;
}

export interface ReserveCarState {
  carId: string;
  carName: string;
  price: number;
  fullName: string;
  phone: string;
  email: string;
  city: string;
  tokenAmount: number; // 999
  paymentMethod: 'upi' | 'card' | 'netbanking';
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  carPurchased: string;
  rating: number;
  date: string;
  comment: string;
  savings: string;
  avatar: string;
  verifiedBadge: boolean;
}

export interface DealershipHub {
  id: string;
  city: string;
  hubName: string;
  address: string;
  carsInStock: number;
  phone: string;
  timings: string;
  mapEmbedUrl: string;
}
