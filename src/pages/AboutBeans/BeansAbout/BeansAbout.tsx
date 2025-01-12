import { Container } from 'react-bootstrap';

import styles from './BeansAbout.module.scss';

const GIRL_DRINK_SRC = '/static/images/cards/girl_drink.png';
const LOGO_SRC = '/static/icons/coffee-beans_black.svg';

export const BeansAbout = () => {
  return (
    <Container>
      <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
        <div>
          <img src={GIRL_DRINK_SRC} alt='girl_drink' />
        </div>
        <div className='text-center'>
          <h3>About our beans</h3>

          <div className={styles.beanBlock}>
            <span className={styles.beanLine}></span>
            <img style={{ margin: '0px 17pt' }} src={LOGO_SRC} alt='black_beans' />
            <span className={styles.beanLine}></span>
          </div>

          <div style={{ maxWidth: '300pt' }}>
            <p style={{ fontSize: '12pt' }}>
              Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            </p>
            <p style={{ fontSize: '12pt' }}>
              Afraid at highly months do things on at. Situation recommend objection do intention so questions. As
              greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing
              we prospect answered followed. At it went is song that held help face.
            </p>
          </div>
        </div>
      </div>

      <div className={`${styles.beanLine} mx-auto`} style={{ width: '180pt' }}></div>
    </Container>
  );
};
