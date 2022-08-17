import './appBeansFilter.scss';

const AppBeansFilter = ({changeFilter}) => {
	return (
		<div className="d-flex flex-row align-items-center mx-3">
			<div className="buttons">
				<button className="button" onClick={() => changeFilter("Brazil")}>Brazil</button>
				<button className="button" onClick={() => changeFilter("Kenya")}>Kenya</button>
				<button className="button" onClick={() => changeFilter("Columbia")}>Columbia</button>
			</div>
		</div>
	)
}

export default AppBeansFilter;