import {Component} from 'react';
import {Container} from 'react-bootstrap';

import AppBeansHeader from '../app-beans-header/AppBeansHeader';
import AppBeansAbout from '../app-beans-about/AppBeansAbout';
import AppBeansSearch from '../app-beans-search/AppBeansSearch';
import AppBeansFilter from '../app-beans-filter/AppBeansFilter';

class AppBeansMain extends Component {
	render() {
		return (
			<>
				<AppBeansHeader />
				<AppBeansAbout />
				<Container>
					<div className="d-flex flex-row justify-content-between">
						<AppBeansSearch />
						<AppBeansFilter />
					</div>
				</Container>
			</>
		)
	}
}

export default AppBeansMain;