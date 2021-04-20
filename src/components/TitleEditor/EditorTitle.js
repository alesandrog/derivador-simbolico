import React from 'react';
import styles from './EditorTitle.module.css';

export default function EditorTitle({ title }) {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>{title}</h2>
		</div>
	);
}
