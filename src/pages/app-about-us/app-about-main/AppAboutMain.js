import {Component} from 'react';

import AppAboutCoffee from '../app-about-coffee/AppAboutCoffee';
import AppOurBest from '../app-our-best/AppOurBest';

class AppAboutMain extends Component {
	render() {
		return (
			<>
				<AppAboutCoffee />
				<AppOurBest />
			</>
		)
	}
}

export default AppAboutMain;