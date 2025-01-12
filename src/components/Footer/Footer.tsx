import { Container } from 'react-bootstrap';

import styles from './Footer.module.scss';

const FIRST_LOGO_SRC = '/static/icons/coffee-beans_black.svg';

export const Footer = () => {
	return (
		<Container fluid className='py-4 d-flex flex-column align-items-center'>
			<ul className={`${styles.navigationFooter} font-8`}>
				<li>Coffee house</li>
				<li>Our Coffee</li>
				<li>For your pleasure</li>
			</ul>
			<div style={{ display: 'flex', alignItems: 'center', marginTop: '17pt' }} >
				<span className={styles.spanFooter}></span>
				<img src={FIRST_LOGO_SRC} style={{ margin: '0px 17pt' }} alt='black_beans' />
				<span className={styles.spanFooter}></span>
			</div>
		</Container>
	);
};