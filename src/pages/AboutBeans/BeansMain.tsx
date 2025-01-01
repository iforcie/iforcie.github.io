import {Container} from 'react-bootstrap';

import { BeansAbout } from './BeansAbout/BeansAbout';
import { BeansHeader } from './BeansHeader/BeansHeader';
import { BeansSearch } from './BeansSearch/BeansSearch';
import { BeansFilter } from './BeansFilter/BeansFilter';
import { BeansCards } from './BeansCards/BeansCards';

type Props = {
	data: any[];
}

export const BeansMain = ({ data }: Props) => {
	// changeFilter = (newFilter) => {
	// 	this.props.changeFilter(newFilter);
	// }

	return (
		<>
			<BeansHeader />
			<BeansAbout />

			<Container>
				<div className="d-flex flex-column flex-md-row align-items-center justify-content-center my-5">
					<BeansSearch />
					<span className="mx-4 my-3">Or filter</span>
					<BeansFilter />
				</div>
			</Container>
			<BeansCards data={data}/>
		</>
	);
}