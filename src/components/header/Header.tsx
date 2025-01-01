import {Container, Navbar, Nav, Offcanvas} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import styles from './Header.module.scss';

const ABOUT_PNG_SRC: string = '/static/images/backgrounds/desk-791178_1920.png';
const OUR_COFFEE_SRC: string = '../resources/images/backgrounds/our-coffee.png';
const PLEASURE_SRC: string = '../resources/images/backgrounds/pleasure_header.png';

const backgroundUrl: Record<string, string> = {
	'/': ABOUT_PNG_SRC,
	'/coffee': OUR_COFFEE_SRC,
	'/pleasure':PLEASURE_SRC
};

export const HeaderStyle = styled.div`
	background: url('${backgroundUrl[window.location.pathname]}') 0 0 no-repeat;
	background-size: cover;
	padding-top: ${() => window.location.pathname === '/' ? "40pt" : "30pt"};
	padding-bottom: ${() => window.location.pathname === '/' ? "150pt" : "0pt"};
	color: #fff;
`;

export const Header = () => {
	return (
		<header className="font-8" style={{ "position": "absolute" }}>
			<Navbar collapseOnSelect expand="md" variant="light" fixed="top">
				<Navbar.Toggle aria-controls="offcanvas-navbar-nav" />
				<Navbar.Offcanvas 
					id="offcanvas-navbar-nav"
					aria-labelledby="offcanvas-navbar-label-nav"
					placement="end">
					<Offcanvas.Header closeButton className='text-white'>
						<Offcanvas.Title id="offcanvas-navbar-label-nav" className='text-white'>Coffee House</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Container>
							<Nav>
								<Nav.Link as={Link} to={"/"} href={"/"} className={`${styles.buttonMenu} text-white`}>Coffee house</Nav.Link>
								<Nav.Link as={Link} to={"/coffee"} href={"/coffee"} className={`${styles.buttonMenu} text-white`}>Our Coffee</Nav.Link>
								<Nav.Link as={Link} to={"/pleasure"} href={"/pleasure"} className={`${styles.buttonMenu} text-white`}>Four your pleasure</Nav.Link>
							</Nav>
						</Container>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Navbar>
		</header>
	);
};