import { FilterController } from '../../Controllers/FilterController/FilterController';
import { SearchController } from '../../Controllers/SearchController/SearchController';

type Props = {
  children: React.ReactNode;
};

export const GlobalSetup = ({ children }: Props) => {
  return (
    <FilterController>
      <SearchController>{children}</SearchController>
    </FilterController>
  );
};
