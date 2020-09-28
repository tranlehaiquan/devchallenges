export interface Stay {
  id: string;
  city: string;
  country: string;
  superHost: boolean;
  title: string;
  rating: number;
  maxGuests: number;
  type: string;
  beds: number;
  photo: string;
  remoteImage: any;
}

export interface Location {
  id: string;
  city: string;
  country: string;
}

export type Guests = {
  adults: number;
  children: number;
};
