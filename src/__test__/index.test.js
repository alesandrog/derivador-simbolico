import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

jest.mock('react-dom', () => ({ render: jest.fn() }));
describe('Application root', () => {
	it('Renderizacion correcta de el index', () => {
		const root = document.createElement('div');
		root.id = 'root';
		document.body.appendChild(root);
		require('../index.js');
		expect(ReactDOM.render).toHaveBeenCalledWith(
			<React.StrictMode>
				<App />
			</React.StrictMode>,
			root
		);
	});
});
