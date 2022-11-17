import {Container, Navbar, Nav, Offcanvas} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import './header.scss';

import headerBackgroundAbout from '../../resources/images/backgrounds/desk-791178_1920.png';
import headerBackgroundCoffee from '../../resources/images/backgrounds/our-coffee.png';
import headerBackgroundPleasure from '../../resources/images/backgrounds/pleasure_header.png';

const HeaderStyle = styled.div`
	background: url(${() => {
		if (window.location.pathname === '/') {
			return headerBackgroundAbout;
		} else if (window.location.pathname === '/coffee') {
			return headerBackgroundCoffee;
		} else if (window.location.pathname === '/pleasure') {
			return headerBackgroundPleasure;
		}
	}}) 0 0 no-repeat;
	background-size: cover;
	padding-top: ${() => window.location.pathname === '/' ? "40pt" : "30pt"};
	padding-bottom: ${() => window.location.pathname === '/' ? "150pt" : "0pt"};
	color: #fff;
`;

const Header = () => {
	console.log(window.location.pathname);

	return (
		<header className="font-8" style={{"position": "absolute"}}>
			<Navbar collapseOnSelect expand="md" variant="light" fixed="top">
				<Navbar.Toggle aria-controls="offcanvas-navbar-nav" />
				<Navbar.Offcanvas 
					id="offcanvas-navbar-nav"
					aria-labelledby="offcanvas-navbar-label-nav"
					placement="end">
					<Offcanvas.Header closeButton className="text-white">
						<Offcanvas.Title id="offcanvas-navbar-label-nav" className="text-white">Coffee House</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Container>
							<Nav>
								<Nav.Link as={Link} to={"/"} href={"/"} className="button_menu text-white">Coffee house</Nav.Link>
								<Nav.Link as={Link} to={"/coffee"} href={"/coffee"} className="button_menu text-white">Our Coffee</Nav.Link>
								<Nav.Link as={Link} to={"/pleasure"} href={"/pleasure"} className="button_menu text-white">Four your pleasure</Nav.Link>
							</Nav>
						</Container>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Navbar>
		</header>
	);
}

export {Header, HeaderStyle};