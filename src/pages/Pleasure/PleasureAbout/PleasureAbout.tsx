import {Container} from 'react-bootstrap';

const COFFEE_SRC = '/static/images/cards/coffee.png';
const LOGO_SRC = '/static/icons/coffee-beans_black.svg';

export const PleasureAbout = () => {
	return (
		<Container>
			<div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
				<div>
					<img src={COFFEE_SRC} alt="girl_drink" />
				</div>
				<div className="text-center">
					<h3>About our beans</h3>
					<div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: "17pt"}}>
						<span style={{border: "1px solid #000", width: "60px", height: "1px"}}></span>
						<img style={{margin: "0px 17pt"}} src={LOGO_SRC} alt="black_beans" />
						<span style={{border: "1px solid #000", width: "60px", height: "1px"}}></span>
					</div>
					<div style={{maxWidth: "300pt"}}>
						<p className="font-12">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
						<p className="font-12">Afraid at highly months do things on at. Situation recommend objection do intention 
							so questions. As greatly removed calling pleased improve an. Last ask him cold feel
							met spot shy want. Children me laughing we prospect answered followed. At it went
							is song that held help face.
						</p>
					</div>
				</div>
			</div>
			<div className="mx-auto" style={{border: "1px solid #000", width: "180pt", height: "1px"}}></div>
		</Container>
	)
};