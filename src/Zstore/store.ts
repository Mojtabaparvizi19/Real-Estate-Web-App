import { create } from "zustand";
import { CardProp } from "../components/HomeCard";

export interface SearchQuery {
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  type?: string;
}

interface Props {
  isLogged: boolean;
  setLogged: (bool: boolean) => void;

  savedItems: CardProp[];
  setSavedItems: (item: CardProp) => void;
  removeItem: (item: CardProp) => void;

  filterQuery: SearchQuery;
  setType: (type: string) => void;
  setLocation: (location: string) => void;
  setMinPrice: (minPrice: number) => void;
  setMaxPrice: (maxPrice: number) => void;
}

const useDataStore = create<Props>((set) => ({
  isLogged: false,
  setLogged: (bool) => set(() => ({ isLogged: bool })),

  savedItems: [],
  setSavedItems: (item) =>
    set((store) => ({ savedItems: [...store.savedItems, item] })),

  filterQuery: {
    maxPrice: 1000000,
    minPrice: 0,
  },
  removeItem: (removeItem) =>
    set((store) => ({
      savedItems: [
        ...store.savedItems.filter((item) => item.id !== removeItem.id),
      ],
    })),
  setType: (type) =>
    set((store) => ({ filterQuery: { ...store.filterQuery, type } })),
  setLocation: (location) =>
    set((store) => ({ filterQuery: { ...store.filterQuery, location } })),
  setMaxPrice: (maxPrice) =>
    set((store) => ({ filterQuery: { ...store.filterQuery, maxPrice } })),
  setMinPrice: (minPrice) =>
    set((store) => ({ filterQuery: { ...store.filterQuery, minPrice } })),
}));

export default useDataStore;
