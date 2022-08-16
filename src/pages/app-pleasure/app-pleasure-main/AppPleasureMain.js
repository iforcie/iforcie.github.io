import {Component} from 'react';

import AppPleasureAbout from '../app-pleasure-about/AppPleasureAbout';
import AppPleasureCards from '../app-pleasure-cards/AppPleasureCards';

class AppPleasureMain extends Component {
	render() {
		return (
			<>
				<AppPleasureAbout />
				<AppPleasureCards />
			</>
		)
	}
}

export default AppPleasureMain;