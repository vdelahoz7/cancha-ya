export interface Field {
  id: string;
  name: string;
  location: string;
  price: number;
  rating: number;
  image: string;
  features: string[];
  availability: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface Testimonial {
  id: string;
  name: string;
  comment: string;
  rating: number;
  avatar: string;
}

export interface PricePlan {
  id: string;
  name: string;
  price: number;
  period: string;
  features: string[];
  popular?: boolean;
}

export interface Booking {
  id: string;
  fieldId: string;
  userId: string;
  date: string;
  startTime: string;
  endTime: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}