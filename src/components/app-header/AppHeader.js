import {Component} from 'react';

import './appHeader.scss';

class Header extends Component {
	render() {
		const {changePageType} = this.props;
		return (
			<header className="font-8">
				<nav>
					<div className='navigation'>
						<button type="button" onClick={() => changePageType("coffeeHouse")} className="button_menu">Coffee house</button>
						<button type="button" onClick={() => changePageType("ourCoffee")} className="button_menu">Our Coffee</button>
						<button type="button" className="button_menu">For your pleasure</button>
					</div>
				</nav>
			</header>
		);
	}
}

export default Header;