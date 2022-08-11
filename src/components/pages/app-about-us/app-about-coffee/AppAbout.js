import {Container} from 'react-bootstrap';

import './appAbout.scss';

import logo from '../../../../resources/icons/coffee-beans_black.svg';

const AppAbout = () => {
	return (
		<Container className="d-flex flex-column align-items-center py-5">
			<h2>About us</h2>
			<div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: "17pt"}}>
 				<span style={{border: "1px solid #000", width: "60px", height: "1px"}}></span>
 				<img style={{margin: "0px 17pt"}} src={logo} alt="black_beans" />
 				<span style={{border: "1px solid #000", width: "60px", height: "1px"}}></span>
 			</div>
			<div style={{fontSize: "14px", textAlign: "center"}}>
 				<p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
					Afraid at highly months do things on at. Situation recommend objection do intention 
					so questions. As greatly removed calling pleased improve an. Last ask him cold feel
					met spot shy want. Children me laughing we prospect answered followed. At it went
					is song that held help face.</p>
 				<p>Now residence dashwoods she excellent you. Shade being under his bed her, Much
 					read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
 					horrible but confined day end marriage. Eagerness furniture set preserved far
 					recommend. Did even but nor are most gave hope. Secure active living depend son
 					repair day ladies now.</p>
 			</div>
		</Container>
	)
}

export default AppAbout;