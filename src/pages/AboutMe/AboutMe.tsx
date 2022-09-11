import React from 'react';
import { Grid } from '@mui/material';

import { AboutMeInterface } from './interfaces';

import styles from './styles/AboutMe.module.scss';
import { DataGrid, Section } from '../../shared/components';
import { aboutMeData } from './data';


const AboutMe: React.FC<AboutMeInterface> = () => {

	const { aboutMe, hobbies } = aboutMeData;

	return (
		<Grid container item xs={12} className={styles.AboutMe}>
			<Section
				title={aboutMe.title}
				children={<p className={styles.AboutMe__text}>{aboutMe.text}</p>}
			/>
			<Section
				title={hobbies.title}
				children={<DataGrid columns={3} options={hobbies.information}/>}
			/>
		</Grid>
	);
};

export default AboutMe;

