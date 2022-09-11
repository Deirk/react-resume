import { Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { NavItemInterface } from './interfaces';

import styles from './styles/Navbar.module.scss';

const NavItem: React.FC<NavItemInterface> = ({to, text, xs}) => {
	return (
			<Grid item xs={xs} className={styles.NavItem}>
				<NavLink to={to} className={({isActive}) => `${styles.NavItem__a} ${isActive && styles['NavItem__a--active']}`}>{text}</NavLink>
			</Grid>
	);
};

export default NavItem;
