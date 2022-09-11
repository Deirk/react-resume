
import { Grid } from '@mui/material';
import { SkillItem } from '../SkillItem';
import { SkillsContainerInterface } from './interfaces';

const SkillsContainer: React.FC<SkillsContainerInterface> = ({options}) => {
	return (
		<Grid container item xs={12}>
			{
				options.map((option, index) => <SkillItem key={`skill-${option.skill}-${index}`} skill={option.skill} percentage={option.percentage}/>)
			}
		</Grid>
	);
};

export default SkillsContainer;

