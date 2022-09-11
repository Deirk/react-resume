import React from 'react';

import { TitleInterface } from './interfaces';

import styles from './styles/Title.module.scss';


const Title: React.FC<TitleInterface> = ({ title }) => {
	return <h2 className={styles.Title}>{title.toUpperCase()}</h2>;
};

export default Title;

