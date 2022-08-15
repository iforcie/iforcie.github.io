import { Component } from "react";
import { Container } from 'react-bootstrap';

import firstLogo from '../../resources/icons/coffee-beans_black.svg';

import './footer.scss';

class Footer extends Component {
	render() {
		return (
			<Container fluid className="py-4 d-flex flex-column align-items-center">
				<ul className='navigation-footer font-8'>
					<li>Coffee house</li>
					<li>Our Coffee</li>
					<li>For your pleasure</li>
				</ul>
				<div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: "17pt"}}>
					<span style={{border: "1px solid #000", width: "60px", height: "1px"}}></span>
					<img style={{margin: "0px 17pt"}} src={firstLogo} alt="black_beans" />
					<span style={{border: "1px solid #000", width: "60px", height: "1px"}}></span>
				</div>
			</Container>
		)
	}
}

export default Footer;