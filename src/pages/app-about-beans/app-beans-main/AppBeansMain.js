import {Component} from 'react';
import {Container} from 'react-bootstrap';

import AppBeansHeader from '../app-beans-header/AppBeansHeader';
import AppBeansAbout from '../app-beans-about/AppBeansAbout';
import AppBeansSearch from '../app-beans-search/AppBeansSearch';
import AppBeansFilter from '../app-beans-filter/AppBeansFilter';
import AppBeansCards from '../app-beans-cards/AppBeansCards';

class AppBeansMain extends Component {
	changeFilter = (newFilter) => {
		this.props.changeFilter(newFilter);
	}

	updateSearch = (search) => {
		this.props.updateSearch(search);
	}

	render() {
		const {data} = this.props;
		return (
			<>
				<AppBeansHeader />
				<AppBeansAbout />
				<Container>
					<div className="d-flex flex-column flex-md-row align-items-center justify-content-center my-5">
						<AppBeansSearch updateSearch={this.updateSearch}/>
						<span className="mx-4 my-3">Or filter</span>
						<AppBeansFilter changeFilter={this.changeFilter}/>
					</div>
				</Container>
				<AppBeansCards data={data}/>
			</>
		)
	}
}

export default AppBeansMain;