import { Grid, LinearProgress } from '@mui/material';
import React from 'react';
import { SkillsDataModel } from '../../interfaces';
import styles from './styles/SkillItem.module.scss';

const SkillItem: React.FC<SkillsDataModel> = ({skill, percentage}) => {
	return (
		<Grid item xs={11} ml='1%'>
			<label className={styles.SkillItem__label} >{skill}</label>
			<LinearProgress variant="determinate" className={styles.SkillItem__progress} value={percentage} color="inherit" />
		</Grid>
	);
};

export default SkillItem;

