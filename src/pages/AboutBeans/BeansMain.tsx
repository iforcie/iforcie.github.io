import { Container } from 'react-bootstrap';

import { BeansAbout } from './BeansAbout/BeansAbout';
import { BeansCardsSection } from './BeansCardsSection/BeansCardsSection';
import { BeansFilters } from './BeansFilters/BeansFilters';
import { BeansHeader } from './BeansHeader/BeansHeader';
import { BeansSearch } from './BeansSearch/BeansSearch';
import { useFilter } from '../../hooks/useFilter';

type Props = {
  data: any[];
};

export const BeansMain = ({ data }: Props) => {
  const { filterCards, filter } = useFilter();

  return (
    <>
      <BeansHeader />
      <BeansAbout />

      <Container>
        <div className='d-flex flex-column flex-md-row align-items-center justify-content-center my-5'>
          <BeansSearch />
          <span className='mx-4 my-3'>Or filter</span>
          <BeansFilters />
        </div>
      </Container>

      <BeansCardsSection data={filterCards(data, filter)} />
    </>
  );
};
