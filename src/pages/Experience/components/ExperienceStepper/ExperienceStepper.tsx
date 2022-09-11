import { Box, Button, Grid, Step, StepContent, StepLabel, Stepper } from '@mui/material';
import { useState } from 'react';
import { ExperienceStepperInterface } from './interfaces';
import styles from './styles/ExperienceStepper.module.scss';



const ExperienceStepper: React.FC<ExperienceStepperInterface> = ({ options }) => {

	const [activeStep, setActiveStep] = useState(0);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};


	return (
		<Grid item xs={11} >
			<Stepper activeStep={activeStep} orientation="vertical">
				{options.map((option, index) => (
					<Step key={option.label}>
						<StepLabel className={styles.ExperienceStepper__label}
						>
							<span className={styles.ExperienceStepper__label}>{option.label}</span>
						</StepLabel>
						<StepContent>
							<p className={styles.ExperienceStepper__description}>{option.description}</p>
							<Box sx={{ mb: 2 }}>
								<div>
									<Button
										disabled={index === options.length - 1}
										variant="outlined"
										className={styles.ExperienceStepper__button}
										onClick={handleNext}
										sx={{ mt: 1, mr: 1 }}
									>
										Continue
									</Button>
									<Button
										disabled={index === 0}
										variant="outlined"
										className={styles.ExperienceStepper__button}
										onClick={handleBack}
										sx={{ mt: 1, mr: 1 }}
									>
										Back
									</Button>
								</div>
							</Box>
						</StepContent>
					</Step>
				))}
			</Stepper>
		</Grid>
	);
};

export default ExperienceStepper;

