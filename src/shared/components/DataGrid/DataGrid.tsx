import { Grid } from '@mui/material';

import { DataGridInterface } from './interface';

import styles from './styles/DataGrid.module.scss';

const DataGrid: React.FC<DataGridInterface> = ({ options, columns }) => {

	const newColumns = 12 / columns;

	return (
		<Grid item container xs={12} className={styles.DataGrid}>
			{
				options.map((option, index) => <Grid item xs={newColumns} key={`information-${option}-${index}`}>
					<p className={styles.DataGrid__text}>{option}</p>
				</Grid>)
			}
		</Grid>
	);
};

export default DataGrid;

