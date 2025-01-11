import { Container, Row, Col } from 'react-bootstrap';

import styles from './OurBest.module.scss';

const SOLIMO_SRC = '/static/images/cards/solimo.png';
const PRESTO_SRC = '/static/images/cards/presto.png';
const AROMISTICO_SRC = '/static/images/cards/aromistico.png';

export const OurBest = () => {
  return (
    <div className={styles.ourBest}>
      <Container className='d-flex flex-column justify-content-center'>
        <h2>Our best</h2>
        <Row className='d-flex flex-column flex-md-row justify-content-md-between justify-content-center align-items-center align-items-md-unset'>
          <Col xs={8} md={3} className='cart align-self-auto mb-3 mb-md-0'>
            <img src={SOLIMO_SRC} alt='solimo' />
            <h3>Solimo Coffee Beans 2kg</h3>
            <span className='price'>10.73$</span>
          </Col>
          <Col xs={8} md={3} className='cart align-self-auto mb-3 mb-md-0'>
            <img src={PRESTO_SRC} alt='presto' />
            <h3>Presto Coffee Beans 1kg</h3>
            <span className='price'>15.99$</span>
          </Col>
          <Col xs={8} md={3} className='cart align-self-auto'>
            <img src={AROMISTICO_SRC} alt='aromistico' />
            <h3>AROMISTICO Coffee 1 kg</h3>
            <span className='price'>6.99$</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
