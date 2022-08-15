import {Component} from 'react';
import {Navbar, Nav, Offcanvas} from 'react-bootstrap';

import './header.scss';

class Header extends Component {
	render() {
		const {changePageType} = this.props;
		return (
			<header className="font-8" >
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
							<Nav>
								<Nav.Link onClick={() => changePageType("coffeeHouse")} className="button_menu text-white">Coffee house</Nav.Link>
								<Nav.Link onClick={() => changePageType("ourCoffee")} className="button_menu text-white">Our Coffee</Nav.Link>
								<Nav.Link onClick={() => changePageType("pleasure")} className="button_menu text-white">Four your pleasure</Nav.Link>
							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Navbar>
			</header>
		);
	}
}

export default Header;