import {Component} from 'react';

import AppPleasureHeader from '../app-pleasure-header/AppPleasureHeader';
import AppPleasureAbout from '../app-pleasure-about/AppPleasureAbout';
import AppPleasureCards from '../app-pleasure-cards/AppPleasureCards';

class AppPleasureMain extends Component {
	render() {
		const {data} = this.props;
		return (
			<>
				<AppPleasureHeader />
				<AppPleasureAbout />
				<AppPleasureCards data={data}/>
			</>
		)
	}
}

export default AppPleasureMain;