import { Component } from 'react';

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
			<header>
					<nav>
						<ul className='navigation'>
							<li>Coffee house</li>
							<li>Our Coffee</li>
							<li>For your pleasure</li>
						</ul>
					</nav>
				</header>
			
		);
	}
}

export default Header;