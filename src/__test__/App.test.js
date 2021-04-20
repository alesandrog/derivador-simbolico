import App from '../App';
import { shallow } from 'enzyme';

describe('<App />', () => {
	test('Renderizacion correcta del componente', () => {
		const component = shallow(<App />);
		expect(component.exists()).toBeTruthy();
	});
});
