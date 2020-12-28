import { Media } from './media';
import { Gender } from './shoe-filters';

export interface ShoeResponse {
  count: number;
  results: Shoe[];
}

export interface Shoe {
  brand: string;
  colorway: string;
  gender: Gender;
  id: string;
  media: Media;
  name: string;
  releaseDate: string;
  retailPrice: number;
  shoe: string;
  styleId: string;
  title: string;
  year: number;
  inWishlist?: boolean;
}
