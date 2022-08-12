import {Component} from 'react';

import AppAboutCoffee from '../app-about-coffee/AppAboutCoffee';
import AppGetMoreAbout from '../app-get-more-about/AppGetMoreAbout';
import AppOurBest from '../app-our-best/AppOurBest';
import AppFooter from '../../../app-footer/AppFooter';

class AppAboutMain extends Component {
	render() {
		return (
			<div>
				<AppGetMoreAbout />
				<AppAboutCoffee />
				<AppOurBest />
				<AppFooter />
			</div>
		)
	}
}

export default AppAboutMain;