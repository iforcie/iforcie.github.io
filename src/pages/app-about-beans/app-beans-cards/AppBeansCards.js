import {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import aromistico from '../../../resources/images/cards/aromistico.png';


class AppBeansCards extends Component {
	render() {
		return(
			<Container>
				<Row className="d-flex flex-column flex-md-row justify-content-center align-items-center">
					<Col xs={8} md={3} className="cart align-self-auto mb-3 mx-md-4" style={{boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.25)", maxWidth: "220px", cursor: "pointer"}}>
						<img src={aromistico} alt="solimo" />
						<h3>Solimo Coffee Beans 2kg</h3>
						<span className="country">Brazil</span>
						<span className="price">6.99$</span>
					</Col>
					<Col xs={8} md={3} className="cart align-self-auto mb-3 mx-md-4" style={{boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.25)", maxWidth: "220px", cursor: "pointer"}}>
						<img src={aromistico} alt="solimo" />
						<h3>Solimo Coffee Beans 2kg</h3>
						<span className="country">Kenya</span>
						<span className="price">6.99$</span>
					</Col>
					<Col xs={8} md={3} className="cart align-self-auto mb-3 mx-md-4" style={{boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.25)", maxWidth: "220px", cursor: "pointer"}}>
						<img src={aromistico} alt="solimo" />
						<h3>Solimo Coffee Beans 2kg</h3>
						<span className="country">Columbia</span>
						<span className="price">6.99$</span>
					</Col>
					<Col xs={8} md={3} className="cart align-self-auto mb-3 mx-md-4" style={{boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.25)", maxWidth: "220px", cursor: "pointer"}}>
						<img src={aromistico} alt="solimo" />
						<h3>Solimo Coffee Beans 2kg</h3>
						<span className="country">Brazil</span>
						<span className="price">6.99$</span>
					</Col>
					<Col xs={8} md={3} className="cart align-self-auto mb-3 mx-md-4" style={{boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.25)", maxWidth: "220px", cursor: "pointer"}}>
						<img src={aromistico} alt="solimo" />
						<h3>Solimo Coffee Beans 2kg</h3>
						<span className="country">Brazil</span>
						<span className="price">6.99$</span>
					</Col>
					<Col xs={8} md={3} className="cart align-self-auto mb-3 mx-md-4" style={{boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.25)", maxWidth: "220px", cursor: "pointer"}}>
						<img src={aromistico} alt="solimo" />
						<h3>Solimo Coffee Beans 2kg</h3>
						<span className="country">Brazil</span>
						<span className="price">6.99$</span>
					</Col>
				</Row>
			</Container>
		)
	}
}

export default AppBeansCards;