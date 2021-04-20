import { mount } from 'enzyme';
import EditorTitle from '../../../components/TitleEditor/EditorTitle';

describe('<EditorTitle />', () => {
	test('Renderizacion correcta del componente', () => {
		const component = mount(<EditorTitle title='Test' />);
		expect(component.exists()).toBeTruthy();
	});
});
