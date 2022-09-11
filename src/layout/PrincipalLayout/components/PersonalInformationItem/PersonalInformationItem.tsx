import React from 'react';

import { PersonalInformationItemInterface } from './interfaces';

import styles from './styles/PersonalInformationItem.module.scss';


const PersonalInformationItem: React.FC<PersonalInformationItemInterface> = ({head, text}) => {
	return <p className={styles['personal-information__information']}><b>{head.toUpperCase()}:</b>{` ${text}`}</p>;
};

export default PersonalInformationItem;

