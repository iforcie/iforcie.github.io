import {Container} from 'react-bootstrap';

import Header from '../../../app-header/AppHeader';

import headerBackground from '../../../../resources/images/backgrounds/our-coffee.png';

const AppBeansHeader = () => {
	return (
		<div style={{background: `url(${headerBackground}) 0 0 no-repeat`, backgroundSize: "cover", color: "#fff"}}>
			<Container fluid>
				<Header />
				<h1 className="text-center" style={{padding: "30pt 0pt"}}>Our Coffee</h1>
			</Container>
		</div>
	)
}

export default AppBeansHeader;