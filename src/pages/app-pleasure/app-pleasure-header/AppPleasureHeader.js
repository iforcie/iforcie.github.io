import {Container} from 'react-bootstrap';

import Header from '../../../components/header/Header';

import headerBackground from '../../../resources/images/backgrounds/pleasure_header.png';

const AppPleasureHeader = (props) => {
	const {changePageType} = props;
	return (
		<div style={{background: `url(${headerBackground}) 0 0 no-repeat`, backgroundSize: "cover", color: "#fff"}}>
			<Container fluid>
				<Header changePageType={changePageType} />
				<h1 className="text-center" style={{padding: "30pt 0pt"}}>For your pleasure</h1>
			</Container>
		</div>
	)
}

export default AppPleasureHeader;