import data from "@/data/listings.json";

export type ListingProperty = {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  beds: number;
  rest: number;
  sqft: string;
  type: string;
  yearBuilt: number;
  lotSize: string;
  description: string;
  features: string[];
  amenities: string[];
  carousel?: string[];
};

export const listingsProperties: ListingProperty[] = data;
