import {Component} from 'react';
import {Container, Col, Navbar, Nav, Offcanvas} from 'react-bootstrap';
import styled from 'styled-components';

import './header.scss';

import logo from '../../resources/icons/coffee-beans_white.png';
import headerBackgroundAbout from '../../resources/images/backgrounds/desk-791178_1920.png';
import headerBackgroundCoffee from '../../resources/images/backgrounds/our-coffee.png';
import headerBackgroundPleasure from '../../resources/images/backgrounds/pleasure_header.png';

const HeaderStyle = styled.div`
	background: url(${(props) => {
		if (props.pageType === 'coffeeHouse') {
			return headerBackgroundAbout;
		} else if (props.pageType === 'ourCoffee') {
			return headerBackgroundCoffee;
		} else if (props.pageType === 'pleasure') {
			return headerBackgroundPleasure;
		}
	}}) 0 0 no-repeat;
	background-size: cover;
	padding-bottom: ${(props) => props.pageType === 'coffeeHouse' ? "150pt" : "0pt"};
	color: #fff;
`;

const HeaderNav = ({changePageType}) => {
	return (
		<header className="font-8" >
			<Navbar expand="md" variant="light" fixed="top">
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
								<Nav.Link onClick={() => changePageType("coffeeHouse")} className="button_menu text-white">Coffee house</Nav.Link>
								<Nav.Link onClick={() => changePageType("ourCoffee")} className="button_menu text-white">Our Coffee</Nav.Link>
								<Nav.Link onClick={() => changePageType("pleasure")} className="button_menu text-white">Four your pleasure</Nav.Link>
							</Nav>
						</Container>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Navbar>
		</header>
	);
}

class Header extends Component {

	changePageType = (newPageType) => {
		this.props.changePageType(newPageType);
	}

	render() {
		const {pageType} = this.props;

		const content = () => {
			if (pageType === 'coffeeHouse') {
				return (
					<HeaderStyle pageType={pageType}>
						<Container>
							<HeaderNav changePageType={this.changePageType} />
							<Col>
								<div style={{textAlign: "center", marginTop: "90pt"}}>
									<h1>Everything You Love About Coffee</h1>
									<div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: "17pt"}}>
										<span style={{border: "1px solid #fff", width: "60px", height: "1px"}}></span>
										<img style={{margin: "0px 17pt"}} src={logo} alt="" />
										<span style={{border: "1px solid #fff", width: "60px", height: "1px"}}></span>
									</div>
									<div>
										<p>We makes every day full of energy and taste</p>
										<p>Want to try our beans?</p>
										<button>More</button>
									</div>
								</div>
							</Col>
						</Container>
					</HeaderStyle>
				)
			} else if (pageType === 'ourCoffee') {
				return (
					<HeaderStyle pageType={pageType}>
						<Container>
							<HeaderNav changePageType={this.changePageType} />
							<h1 className="text-center" style={{padding: "30pt 0pt"}}>Our Coffee</h1>
						</Container>
					</HeaderStyle>
				)
			} else if (pageType === 'pleasure') {
				return (
					<HeaderStyle pageType={pageType}>
						<Container>
							<HeaderNav changePageType={this.changePageType} />
							<h1 className="text-center" style={{padding: "30pt 0pt"}}>For your pleasure</h1>
						</Container>
					</HeaderStyle>
				)
			}
		}

		return (
			<>
				{content()}
			</>
		)
	}
}

export default Header;