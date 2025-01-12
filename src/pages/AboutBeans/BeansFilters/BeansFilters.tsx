import { Row } from 'react-bootstrap';

import { useFilter } from '../../../hooks/useFilter';

import styles from './BeansFilters.module.scss';

export const BeansFilters = () => {
  const { setFilter, isActiveFilter } = useFilter();

  return (
    <Row className='align-items-center mx-3'>
      <div className='buttons'>
        <button className={styles.button} onClick={() => setFilter('Brazil')}>
          Brazil
        </button>
        <button className={styles.button} onClick={() => setFilter('Kenya')}>
          Kenya
        </button>
        <button className={styles.button} onClick={() => setFilter('Columbia')}>
          Columbia
        </button>

        {isActiveFilter && (
          <button className={`${styles.button} ${styles.buttonClose}`} onClick={() => setFilter('all')}>
            x
          </button>
        )}
      </div>
    </Row>
  );
};
