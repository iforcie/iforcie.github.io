import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap';

import { HeaderStyle } from './HeaderStyle';

import styles from './Header.module.scss';
import '../../style/navbar.scss';

export const Header = () => {
  return (
    <header className='font-8' style={{ position: 'absolute' }}>
      <Navbar collapseOnSelect expand='md' variant='light' fixed='top'>
        <Navbar.Toggle aria-controls='offcanvas-navbar-nav' />
        <Navbar.Offcanvas id='offcanvas-navbar-nav' aria-labelledby='offcanvas-navbar-label-nav' placement='end'>
          <Offcanvas.Header closeButton className='text-white'>
            <Offcanvas.Title id='offcanvas-navbar-label-nav' className='text-white'>
              Coffee House
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Container>
              <Nav>
                <Nav.Link as={Link} to={'/'} href={'/'} className={`${styles.buttonMenu} text-white`}>
                  Coffee house
                </Nav.Link>
                <Nav.Link as={Link} to={'/coffee'} href={'/coffee'} className={`${styles.buttonMenu} text-white`}>
                  Our Coffee
                </Nav.Link>
                <Nav.Link as={Link} to={'/pleasure'} href={'/pleasure'} className={`${styles.buttonMenu} text-white`}>
                  Four your pleasure
                </Nav.Link>
              </Nav>
            </Container>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </header>
  );
};

Header.Style = HeaderStyle;
