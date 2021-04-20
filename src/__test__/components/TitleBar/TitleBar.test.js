import { mount } from 'enzyme';
import TitleBar from '../../../components/TitleBar/TitleBar';

describe('<TitleBar />', () => {
	test('Renderizacion correcta del componente', () => {
		const component = mount(<TitleBar />);
		expect(component.exists()).toBeTruthy();
	});
});
