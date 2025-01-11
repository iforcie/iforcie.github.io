import { FilterController } from '../../Controllers/FilterController/FilterController';

type Props = {
  children: React.ReactNode;
};

export const GlobalSetup = ({ children }: Props) => {
  return <FilterController>{children}</FilterController>;
};
