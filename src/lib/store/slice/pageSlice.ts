import { StateCreator } from 'zustand';

import { Store } from '../store';

export type PageSlice = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  previousCategory: string | null;
  setPreviousCategory: (cat: string) => void;
  navClickedEffect: string | null;
  setNavClickedEffect: (label: string) => void;
};

const initialPageState: Pick<
  PageSlice,
  'currentPage' | 'previousCategory' | 'navClickedEffect'
> = {
  currentPage: 1,
  previousCategory: null,
  navClickedEffect: null,
};

export const createPageSlice: StateCreator<
  Store,
  [['zustand/devtools', never]],
  [],
  PageSlice
> = (set) => ({
  ...initialPageState,
  setCurrentPage: (page: number) =>
    set({ currentPage: page }, false, 'Store:page/setCurrentPage'),

  setPreviousCategory: (cat: string) =>
    set({ previousCategory: cat }, false, 'Store:page/setPreviousCategory'),

  setNavClickedEffect: (label: string) =>
    set({ navClickedEffect: label }, false, 'Store:page/setNavClicedEffect'),
});
