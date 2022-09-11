import { Grid } from '@mui/material';
import { Section } from '../../shared/components';

import { ExperienceInterface } from './interfaces';

import styles from './styles/Experience.module.scss';

import { experienceData } from './data';
import {ExperienceStepper} from './components';

const Experience: React.FC<ExperienceInterface> = () => {
	return (
		<Grid container item xs={12} className={styles.AboutMe}>
			<Section
				title={experienceData.title}
				children={<ExperienceStepper options={experienceData.optiones}/>}
			/>
		</Grid>
	);
};

export default Experience;

