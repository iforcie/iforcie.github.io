import { useContext } from 'react';

import { FilterContext } from '../Controllers/FilterController/FilterController.context';

export const useFilter = () => useContext(FilterContext);
