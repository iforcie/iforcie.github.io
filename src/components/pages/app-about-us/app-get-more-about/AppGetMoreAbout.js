import { Component } from "react";
import { Container, Col } from 'react-bootstrap';

import Header from '../../../app-header/AppHeader';

import logo from '../../../../resources/icons/coffee-beans_white.png';
import headerBackground from '../../../../resources/images/backgrounds/desk-791178_1920.png';


class AppGetMoreAbout extends Component {
	render() {
		return(
			<div style={{background: `url(${headerBackground}) 0 0 no-repeat`, backgroundSize: "cover", paddingBottom: "150pt", color: "#fff"}}>
				<Container fluid>
					<Header />
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
			</div>
		)
	}
}

export default AppGetMoreAbout;