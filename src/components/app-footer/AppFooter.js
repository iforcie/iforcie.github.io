import { Component } from "react";

import firstLogo from '../../resources/icons/coffee-beans_black.svg';

import './appFooter.scss';

class AppFooter extends Component {
	render() {
		return (
			<div className="app-footer">
				<div className="wrapper">
					<ul className='navigation-footer'>
						<li>Coffee house</li>
						<li>Our Coffee</li>
						<li>For your pleasure</li>
					</ul>
					<div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: "17pt"}}>
						<span style={{border: "1px solid #000", width: "60px", height: "1px"}}></span>
						<img style={{margin: "0px 17pt"}} src={firstLogo} alt="black_beans" />
						<span style={{border: "1px solid #000", width: "60px", height: "1px"}}></span>
					</div>
				</div>
			</div>
		)
	}
}

export default AppFooter;