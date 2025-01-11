import { useCallback, useState } from 'react';

export const useSearch = () => {
  const [search, setSearch] = useState<string>('');

  const searchCard = useCallback((items: any[], search: string) => {
    if (search.length === 0) {
      return items;
    }

    return items.filter(item => item.country.indexOf(search) > -1);
  }, []);

  return {
    search,
    searchCard,
  } as const;
};
