import { useContext } from 'react';

import { SearchContext } from '../Controllers/SearchController/SearchController.context';

export const useSearch = () => useContext(SearchContext);
