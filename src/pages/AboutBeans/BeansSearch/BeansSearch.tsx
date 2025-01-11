import { useState } from 'react';

import styles from './BeansSearch.module.scss';

export const BeansSearch = () => {
  const [, setSearch] = useState('');

  return (
    <div>
      <span className='mx-2'>Looking for</span>
      <input onChange={() => setSearch} className={styles.input} type='text' placeholder='start typing here...' />
    </div>
  );
};
