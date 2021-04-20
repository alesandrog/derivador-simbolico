import { useState } from 'react';
import styles from './App.module.css';
import Button from './components/Button/Button';
import Editor from './components/Editor/Editor';
import TitleBar from './components/TitleBar/TitleBar';

function App() {
	const [code, setCode] = useState('');
	const [result, setResult] = useState('');
	return (
		<div className={styles.container}>
			<TitleBar />
			<div className={styles.sub_container}>
				<Editor
					title='Editor:'
					readOnly={false}
					setCode={setCode.bind(this)}
					code={code}
				/>
				<Editor
					title='Resultado:'
					readOnly={true}
					setCode={setResult.bind(this)}
					code={result}
				/>
			</div>
			<div className={styles.buttonGroup}>
				<Button
					name='Derivar'
					code={code}
					setResult={setResult.bind(this)}
				/>
			</div>
		</div>
	);
}

export default App;
