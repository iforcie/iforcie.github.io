import {Component} from 'react';

import AppAboutHeader from '../app-about-header/AppAboutHeader';
import AppAboutCoffee from '../app-about-coffee/AppAboutCoffee';
import AppOurBest from '../app-our-best/AppOurBest';

class AppAboutMain extends Component {
	render() {
		return (
			<>
				<AppAboutHeader/>
				<AppAboutCoffee />
				<AppOurBest />
			</>
		)
	}
}

export default AppAboutMain;