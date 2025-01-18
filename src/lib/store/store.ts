import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { FilmUrlSlice, createFilmUrlSlice } from './slice/FilmUrlSlice';

export type Store = FilmUrlSlice;

export const useStore = create<Store>()(
  devtools((...args) => ({
    ...createFilmUrlSlice(...args),
  })),
);
