import { useSearch } from '../../../hooks/useSearch';

import styles from './BeansSearch.module.scss';

export const BeansSearch = () => {
  const { setSearch } = useSearch();

  return (
    <div>
      <span className='mx-2'>Looking for</span>
      <input
        onChange={e => setSearch(e.currentTarget.value)}
        className={styles.input}
        type='text'
        placeholder='start typing here...'
      />
    </div>
  );
};
