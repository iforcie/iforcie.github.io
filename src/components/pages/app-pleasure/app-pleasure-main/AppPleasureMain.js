import {Component} from 'react';

import AppPleasureHeader from '../app-pleasure-header/AppPleasureHeader';
import AppPleasureAbout from '../app-pleasure-about/AppPleasureAbout';
import AppPleasureCards from '../app-pleasure-cards/AppPleasureCards';

class AppPleasureMain extends Component {

	changePageType = (newPageType) => {
		this.props.changePageType(newPageType);
	}

	render() {
		return (
			<>
				<AppPleasureHeader changePageType={this.changePageType}/>
				<AppPleasureAbout />
				<AppPleasureCards />
			</>
		)
	}
}

export default AppPleasureMain;