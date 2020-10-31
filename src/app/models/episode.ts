import { Character } from './character';
export interface Episode {
  season: number;
  title: string;
  rating: number;
  episode_number: number;
  is_sad: boolean;
  screenshot_url: string;
  characters: Character[];
}
