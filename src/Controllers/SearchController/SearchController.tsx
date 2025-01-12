import { useCallback, useMemo, useState } from 'react';
import { SearchContext } from './SearchController.context';

type Props = {
  children: React.ReactNode;
};

export const SearchController = ({ children }: Props) => {
  const [search, setSearch] = useState<string>('');

  const handleUpdateSearch = (newSearch: string) => {
    setSearch(newSearch);
  };

  const searchCard = useCallback(
    (data: any[]) => {
      return search.length === 0 ? data : data.filter(item => item.country.indexOf(search) > -1 || item.name.indexOf(search) > -1);
    },
    [search]
  );

  const context = useMemo(() => ({ setSearch: handleUpdateSearch, searchCard }), [search]);

  return <SearchContext.Provider value={context}>{children}</SearchContext.Provider>;
};
