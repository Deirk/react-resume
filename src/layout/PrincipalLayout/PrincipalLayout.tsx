import React from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import profilePicture from './../../assets/images/jose_profile_picture.png'
import { Navbar, PersonalInformationItem } from './components';
import { personalInformationData } from './data';


import { PrincipalLayoutInterface } from './interfaces';

import styles from './styles/PrincipalLayout.module.scss';
const PrincipalLayout: React.FC<PrincipalLayoutInterface> = ({ children }) => {
	return (
		<>
			<Grid container spacing={0} className={styles.PrincipalLayout}>
				<Grid container item xs={5} md={5} sm={12} padding='4% 0 8%' justifyContent='flex-end' >
					<Grid item xs={7}>
						<h1 className={styles.layout__name}>
							JOSE
							<br />
							DEVERA
						</h1>
					</Grid>
					<Grid item xs={7}>
						<h3 className={styles.layout__degree}>
							Interactive media
							<br />
							designer
						</h3>
					</Grid>
					<Grid item xs={7}>
						<img src={profilePicture} alt='Author' className={styles.layout__picture} />
					</Grid>
				</Grid>
				<Grid container item xs={7} md={7} sm={12} padding='4% 0 4%'>
					<Grid item xs={10}>
						<Navbar />
						{children}
					</Grid>
				</Grid>
				<Box component='div' className={styles['personal-information__card']}>
					<Box component='div' mt='8%'>
						{
							personalInformationData.map((data, index) => <PersonalInformationItem key={`personal-information-${data.head}-${index}`} head={data.head} text={data.text} />)
						}
					</Box>
				</Box>
			</Grid>
		</>
	);
};


export default PrincipalLayout;

