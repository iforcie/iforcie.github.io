import React, { useCallback, useMemo, useState } from 'react';

import { FilterContext, FilterNames } from './FilterController.context';

type Props = {
  children: React.ReactNode;
};

export const FilterController = ({ children }: Props) => {
  const [filter, setFilterState] = useState<FilterNames>('all');
  const [isActiveFilter, setIsActiveFilter] = useState<boolean>(false);

  const handleSetFilter = (newFilter: FilterNames) => {
    setFilterState(newFilter);
    setIsActiveFilter(newFilter !== 'all');
  };

  const filterCards = useCallback(
    (item: any[]) => {
      return filter === 'all' ? item : item.filter(data => data.country === filter);
    },
    [filter]
  );

  const context = useMemo(() => ({ isActiveFilter, filterCards, filter, setFilter: handleSetFilter }), [filter]);

  return <FilterContext.Provider value={context}>{children}</FilterContext.Provider>;
};
