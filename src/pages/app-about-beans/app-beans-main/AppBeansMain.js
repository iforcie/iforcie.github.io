import {Component} from 'react';
import {Container} from 'react-bootstrap';

import AppBeansHeader from '../app-beans-header/AppBeansHeader';
import AppBeansAbout from '../app-beans-about/AppBeansAbout';
import AppBeansSearch from '../app-beans-search/AppBeansSearch';
import AppBeansFilter from '../app-beans-filter/AppBeansFilter';
import AppBeansCards from '../app-beans-cards/AppBeansCards';

class AppBeansMain extends Component {

	changePageType = (newPageType) => {
		this.props.changePageType(newPageType);
	}

	render() {
		return (
			<>
				<AppBeansHeader changePageType={this.changePageType}/>
				<AppBeansAbout />
				<Container>
					<div className="d-flex flex-column flex-md-row align-items-center justify-content-center my-5">
						<AppBeansSearch />
						<span className="mx-4 my-3">Or filter</span>
						<AppBeansFilter />
					</div>
				</Container>
				<AppBeansCards />
			</>
		)
	}
}

export default AppBeansMain;