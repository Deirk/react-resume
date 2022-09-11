

import { Grid } from '@mui/material';
import { DataGrid, Section } from '../../shared/components';
import { SkillsContainer } from './components';
import { skillsData } from './data';
import { SkillsInterface } from './interfaces';

import styles from './styles/Skills.module.scss';

const Skills: React.FC<SkillsInterface> = () => {

	const {skills, softSkills} = skillsData;

	return (
		<Grid container item xs={12} className={styles.AboutMe}>
			<Section
				title={skills.title}
				children={<SkillsContainer options={skills.options}/>}
			/>
			<Section
				title={softSkills.title}
				children={<DataGrid columns={3} options={softSkills.options}/>}
			/>
		</Grid>
	);

};

export default Skills;

