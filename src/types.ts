export interface ServiceItem {
  id: string;
  title: string;
  category: 'wash' | 'detailing' | 'coating' | 'interior' | 'bike';
  shortBenefit: string;
  tagline: string;
  duration: string;
  startingPrice: string;
  features: string[];
  description: string;
  iconName: string;
  image: string;
  popular?: boolean;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  vehicle: string;
  serviceType: string;
  beforeImage: string;
  afterImage: string;
  beforeDescription: string;
  afterDescription: string;
  keyHighlights: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  vehicle: string;
  rating: number;
  date: string;
  service: string;
  comment: string;
  tag: string;
  avatarText: string;
  verified: boolean;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  shortDesc: string;
  detail: string;
  iconName: string;
  highlightStat: string;
}
