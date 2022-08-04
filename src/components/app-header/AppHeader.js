import { Component } from 'react';

import logo from '../../resources/icons/coffee-beans_white.png';
import headerBackground from '../../resources/images/headers/desk-791178_1920.png';

import './appHeader.scss';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: 'house'
		}
	}

	render() {
		return (
			<div style={{background: `url(${headerBackground}) 0 0 no-repeat`, backgroundSize: "cover", paddingBottom: "150pt", color: "#fff", width: "100%"}}>
				<header>
					<nav>
						<ul className='navigation'>
							<li>Coffee house</li>
							<li>Our Coffee</li>
							<li>For your pleasure</li>
						</ul>
					</nav>
				</header>
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
			</div>
		);
	}
}

export default Header;