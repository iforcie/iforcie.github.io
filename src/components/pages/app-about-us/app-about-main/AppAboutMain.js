import {Component} from 'react';

import AppAboutCoffee from '../app-about-coffee/AppAboutCoffee';
import AppGetMoreAbout from '../app-get-more-about/AppGetMoreAbout';
import AppOurBest from '../app-our-best/AppOurBest';

class AppAboutMain extends Component {
	render() {
		return (
			<>
				<AppGetMoreAbout />
				<AppAboutCoffee />
				<AppOurBest />
			</>
		)
	}
}

export default AppAboutMain;