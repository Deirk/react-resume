
import { Grid } from '@mui/material';
import { Section } from '../../shared/components';
import { contactMeData } from './data';
import { ContactMeInterface, quoteInterface } from './interface';

import styles from './styles/ContactMe.module.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ContactMe: React.FC<ContactMeInterface> = () => {

	const [phrase, setPhrase] = useState<quoteInterface>({
		author: '',
		content: '',
	});

	const getPhrase = async () => {
		try {
			const response = await axios.get('https://api.quotable.io/random');
			if (!!response) {
				const {data} = response;
				const newData = {
					author: data?.author,
					content: data?.content,
				}
				setPhrase(newData);
			}
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
	  getPhrase()
	
	  return () => {
	  }
	}, []);

	return (
		<Grid container item xs={12} className={styles.AboutMe}>
			<Section
				title={contactMeData.title}
			/>
			<p className={styles.ContactMe__author}>{phrase?.author}<br/><q className={styles.ContactMe__quote}>{phrase?.content}</q></p>
		</Grid>
	);
};

export default ContactMe;

