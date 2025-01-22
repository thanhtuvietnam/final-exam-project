import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { PageSlice, createPageSlice } from './slice/pageSlice';
import { FilmUrlSlice, createFilmUrlSlice } from './slice/FilmUrlSlice';

export type Store = FilmUrlSlice & PageSlice;

export const useStore = create<Store>()(
  devtools((...args) => ({
    ...createFilmUrlSlice(...args),
    ...createPageSlice(...args),
  })),
);
