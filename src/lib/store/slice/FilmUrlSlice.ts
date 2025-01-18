import { StateCreator } from 'zustand';

import { Store } from '../store';

export type FilmUrlSlice = {
  filmUrl: string | null;
  episode: string | null;
  addUrl: (url: string, slug: string) => void;
};

const initialFilmUrlState: Pick<FilmUrlSlice, 'filmUrl' | 'episode'> = {
  filmUrl: '',
  episode: '',
};

export const createFilmUrlSlice: StateCreator<
  Store,
  [['zustand/devtools', never]],
  [],
  FilmUrlSlice
> = (set) => ({
  ...initialFilmUrlState,

  addUrl: (url: string, episode: string) =>
    set({ filmUrl: url, episode }, false, 'Store:filmUrl/addFilmUrl'),
});
