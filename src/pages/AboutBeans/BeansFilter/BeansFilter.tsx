import styles from './BeansFilter.module.scss';

const changeFilter = (country: string) => {
	console.log(country);
}

export const BeansFilter = () => {
	return (
		<div className="d-flex flex-row align-items-center mx-3">
			<div className={styles.buttons}>
				<button className="button" onClick={() => changeFilter("Brazil")}>Brazil</button>
				<button className="button" onClick={() => changeFilter("Kenya")}>Kenya</button>
				<button className="button" onClick={() => changeFilter("Columbia")}>Columbia</button>
			</div>
		</div>
	);
};