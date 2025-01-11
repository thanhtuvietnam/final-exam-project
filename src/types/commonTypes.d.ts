// types/commonTypes.d.ts

/**
 * Base interface for components with optional className
 */
export interface Base {
  className?: string;
}

/**
 * Props for components with border effects
 */
export interface BorderEffectProps extends Base {
  isActive: boolean;
  topClassName?: string;
  bottomClassName?: string;
}

/**
 * Props for displaying side information about a movie
 */
export interface SideInfoProps {
  title: string;
  originalName: string;
  episodeCurrent: string;
  qua: string;
  lang: string;
  actor: string;
  director: string;
  category: string[];
  country: string[];
  year: number;
  time: string;
  view: number;
  imdbScore: number;
  newestEpisode: string;
}
