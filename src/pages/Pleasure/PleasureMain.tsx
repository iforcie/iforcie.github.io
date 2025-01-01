import { PleasureHeader } from './PleasureHeader/PleasureHeader';
import { PleasureAbout } from './PleasureAbout/PleasureAbout';
import { PleasureCards } from './PleasureCards/PleasureCards';

type Props = {
	data: any[];
}

export const PleasureMain = ({ data }: Props) => {
		return (
			<>
				<PleasureHeader />
				<PleasureAbout />
				<PleasureCards data={data}/>
			</>
		);
};