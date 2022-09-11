import React from 'react';
import { Grid } from '@mui/material';

import { SectionInterface } from './interfaces';

import { Title } from '../Title';


const Section: React.FC<SectionInterface> = ({title, children}) => {
	return (
	<Grid item container xs={12} mt='3%'>
		<Title title={title}/>
		{children}
	</Grid>
	);
};

export default Section;

