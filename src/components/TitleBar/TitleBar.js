import React from 'react';
import styles from './TitleBar.module.css';

export default function TitleBar() {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Derivador Simbólico</h1>
		</div>
	);
}
