import { createContext } from 'react';

export type FilterNames = 'all' | 'Kenya' | 'Brazil' | 'Columbia';

export interface IFilterContext {
  isActiveFilter: boolean;
  filter: FilterNames;
  setFilter: (filter: FilterNames) => void;
  filterCards: (data: any[], filter: FilterNames) => any[];
}

export const FilterContext = createContext<IFilterContext>({
  isActiveFilter: false,
  filter: 'all',
  setFilter: () => {},
  filterCards: () => [],
});
