import {Container, Row, Col} from 'react-bootstrap';

const AROMISTICO_SRC = '/static/images/cards/aromistico.png';

type Props = {
	data: any[];
}

export const PleasureCards = ({data}: Props) => {
	const elements = data.map(item => {
		return (
			<Col key={item.id} xs={8} md={3} className="cart align-self-auto mb-3 mx-md-4" style={{boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.25)", maxWidth: "220px", cursor: "pointer"}}>
				<img src={AROMISTICO_SRC} alt="solimo" />
				<h3>{item.name}</h3>
				<span className="country">{item.country}</span>
				<span className="price">{item.price}</span>
			</Col>
		)
	});

	return (
		<Container className="mt-5">
			<Row className="d-flex flex-column flex-md-row justify-content-center align-items-center">
				{elements}
			</Row>
		</Container>
	)
}