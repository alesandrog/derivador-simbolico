import { mount, shallow } from 'enzyme';
import Editor from '../../../components/Editor/Editor';

describe('<Editor />', () => {
	test('Renderizacion correcta del componente', () => {
		const component = mount(
			<Editor title='Test' readOnly={true} setCode={jest.fn()} code='' />
		);
		expect(component.exists()).toBeTruthy();
	});
});
