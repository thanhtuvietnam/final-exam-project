export interface ApiMovieDetails {
  data: Data;
}

export interface Data {
  seoOnPage: SEOOnPage;
  breadCrumb: BreadCrumb[];
  params: Params;
  item: Item;
}

export interface BreadCrumb {
  name: string;
  slug?: string;
  position: number;
  isCurrent?: boolean;
}

export interface Item {
  tmdb: Tmdb;
  imdb: Imdb;
  created: Created;
  modified: Created;
  _id: string;
  name: string;
  origin_name: string;
  content: string;
  type: string;
  status: string;
  thumb_url: string;
  is_copyright: boolean;
  trailer_url: string;
  time: string;
  episode_current: string;
  episode_total: string;
  quality: string;
  lang: string;
  notify: string;
  showtimes: string;
  slug: string;
  year: number;
  view: number;
  actor: string[];
  director: string[];
  category: Category[];
  country: Category[];
  chieurap: boolean;
  poster_url: string;
  sub_docquyen: boolean;
  episodes: Episode[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Created {
  time: Date;
}

export interface Episode {
  server_name: string;
  server_data: ServerDatum[];
}

export interface ServerDatum {
  name: string;
  slug: string;
  filename: string;
  link_embed: string;
  link_m3u8: string;
}

export interface Imdb {
  id: null;
}

export interface Tmdb {
  type: string;
  id: string;
  season: null;
  vote_average: number;
  vote_count: number;
}

export interface Params {
  slug: string;
}

export interface SEOOnPage {
  og_type: string;
  titleHead: string;
  seoSchema: SEOSchema;
  descriptionHead: string;
  og_image: string[];
  updated_time: number;
  og_url: string;
}

export interface SEOSchema {
  '@context': string;
  '@type': string;
  name: string;
  dateModified: Date;
  dateCreated: Date;
  url: string;
  datePublished: Date;
  image: string;
  director: string;
}
