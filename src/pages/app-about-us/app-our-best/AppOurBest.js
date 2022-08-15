import {Container, Row, Col} from 'react-bootstrap';

import './appOurBest.scss';

import solimo from '../../../resources/images/cards/solimo.png';
import presto from '../../../resources/images/cards/presto.png';
import aromistico from '../../../resources/images/cards/aromistico.png';

const AppOurBest = () => {
	return (
		<div className="app-our-best">
			<Container className="d-flex flex-column justify-content-center">
				<h2>Our best</h2>
				<Row className="d-flex flex-column flex-md-row justify-content-md-between justify-content-center align-items-center align-items-md-unset">
					<Col xs={8} md={3} className="cart align-self-auto mb-3 mb-md-0">
						<img src={solimo} alt="solimo" />
						<h3>Solimo Coffee Beans 2kg</h3>
						<span className="price">10.73$</span>
					</Col>
					<Col xs={8} md={3} className="cart align-self-auto mb-3 mb-md-0">
							<img src={presto} alt="presto" />
							<h3>Presto Coffee Beans 1kg</h3>
						<span className="price">15.99$</span>
					</Col>
					<Col xs={8} md={3} className="cart align-self-auto">
						<img src={aromistico} alt="aromistico--" />
						<h3>AROMISTICO Coffee 1 kg</h3>
						<span className="price">6.99$</span>
					</Col>
				</Row>
			</Container>
		</div>
		
	)
}

export default AppOurBest;