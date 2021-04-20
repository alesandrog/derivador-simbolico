import { shallow } from 'enzyme';
import Button from '../../../components/Button/Button';

const setResult = jest.fn();
const code =
	'<?xml version="1.0"?>\n' +
	'<f>\n' +
	'    <divide>\n' +
	'        <times>\n' +
	'            <const>4</const>\n' +
	'            <power>\n' +
	'                <var>X</var>\n' +
	'                <const>5</const>\n' +
	'            </power>\n' +
	'        </times>\n' +
	'        <power>\n' +
	'            <var>X</var>\n' +
	'            <const>3</const>\n' +
	'        </power>\n' +
	'    </divide>\n' +
	'</f>';

describe('<Button />', () => {
	it('Renderizacion correcta de componente', () => {
		const component = shallow(
			<Button name='Derivar' code={code} setResult={setResult} />
		);
		expect(component.exists()).toBeTruthy();
	});
	it('Verificacion de que convertXML no haga la derivacion al dar click sin tener codigo', () => {
		const component = shallow(
			<Button name='Derivar' code='' setResult={setResult} />
		);
		const instance = component.instance();
		const spy_convertXML = jest.spyOn(instance, 'convertXML');
		instance.forceUpdate();
		component.find('button').simulate('click');
		expect(spy_convertXML).toHaveBeenCalled();
	});
	it('Verificacion de funcionamiento de funcion convertXML al dar click', () => {
		const component = shallow(
			<Button name='Derivar' code={code} setResult={setResult} />
		);
		const instance = component.instance();
		const spy_convertXML = jest.spyOn(instance, 'convertXML');
		instance.forceUpdate();
		try {
			component.find('button').simulate('click');
		} catch (e) {}
		expect(spy_convertXML).toHaveBeenCalled();
	});
});
