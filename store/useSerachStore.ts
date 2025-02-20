import { create } from "zustand";

interface ISearchStore {
  query: string;
  setQuery: (value: string) => void;
}

export const useSearchStore = create<ISearchStore>((set) => ({
  query: "",
  setQuery: (value) => set({ query: value }),
}));
