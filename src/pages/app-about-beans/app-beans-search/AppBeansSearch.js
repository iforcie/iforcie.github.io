import {Component} from 'react'

import './appBeansSearch.scss';

class AppBeansSearch extends Component {
	updateSearch = (e) => {
		this.props.updateSearch(e.target.value);
	}

	render() {
		return (
			<div>
				<span className="mx-2">Looking for</span>
				<input onChange={this.updateSearch} className="input" type="text" placeholder="start typing here..."/>
			</div>
		)
	}
}

export default AppBeansSearch;