import { createContext } from 'react';

export interface ISearchContext {
  searchCard: (data: any[]) => any[];
  setSearch: (search: string) => void;
}

export const SearchContext = createContext<ISearchContext>({
  searchCard: () => [],
  setSearch: () => {},
});
