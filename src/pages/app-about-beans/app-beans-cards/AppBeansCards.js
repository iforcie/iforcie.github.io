import {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import aromistico from '../../../resources/images/cards/aromistico.png';

class AppBeansCards extends Component {
	render() {
		const {data} = this.props;

		const elements = data.map(item => {
			return (
				<Col key={item.id} xs={8} md={3} className="cart align-self-auto mb-3 mx-md-4" style={{boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.25)", maxWidth: "220px", cursor: "pointer"}}>
					<img src={aromistico} alt="solimo" />
					<h3>{item.name}</h3>
					<span className="country">{item.country}</span>
					<span className="price">{item.price}</span>
				</Col>
			)
		});

		return(
			<Container>
				<Row className="d-flex flex-column flex-md-row justify-content-center align-items-center">
					{elements}
				</Row>
			</Container>
		)
	}
}

export default AppBeansCards;