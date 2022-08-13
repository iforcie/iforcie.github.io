import {Component} from 'react';

import AppAboutCoffee from '../app-about-coffee/AppAboutCoffee';
import AppGetMoreAbout from '../app-get-more-about/AppGetMoreAbout';
import AppOurBest from '../app-our-best/AppOurBest';

class AppAboutMain extends Component {

	changePageType = (newPageType) => {
		this.props.changePageType(newPageType);
	}

	render() {
		return (
			<>
				<AppGetMoreAbout changePageType={this.changePageType} />
				<AppAboutCoffee />
				<AppOurBest />
			</>
		)
	}
}

export default AppAboutMain;