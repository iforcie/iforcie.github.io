import './appOurBest.scss';

import solimo from '../../resources/images/cards/solimo.png';
import presto from '../../resources/images/cards/presto.png';
import aromistico from '../../resources/images/cards/aromistico.png';


const AppOurBest = () => {
	return (
		<div className="app-our-best">
			<div className="wrapper">
				<h2>Our best</h2>
				<div className="cards">
					<div className="card">
						<div className="card__column">
							<img src={solimo} alt="solimo" />
							<h3>Solimo Coffee Beans 2kg</h3>
							<span className="price">10.73$</span>
						</div>
					</div>
					<div className="card">
						<div className="card__column">
							<img src={presto} alt="presto" />
							<h3>Presto Coffee Beans 1kg</h3>
							<span className="price">15.99$</span>
						</div>
					</div>
					<div className="card">
						<div className="card__column">
							<img src={aromistico} alt="aromistico--" />
							<h3>AROMISTICO Coffee 1 kg</h3>
							<span className="price">6.99$</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AppOurBest;