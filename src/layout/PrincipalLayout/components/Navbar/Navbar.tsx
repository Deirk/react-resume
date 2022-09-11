import { Grid } from '@mui/material';
import { navItemData } from './data';
import { NavbarInterface } from './interfaces';
import NavItem from './NavItem';

import styles from './styles/Navbar.module.scss';

const Navbar: React.FC<NavbarInterface> = () => {
	return (
		<Grid item container xs={12} component='span' className={styles.Navbar}>
			{
				navItemData.map((navItem, index) => <NavItem to={navItem.to} text={navItem.text} key={`navItem-${index}`} xs={3} />)
			}
		</Grid>
	);
};

export default Navbar;

