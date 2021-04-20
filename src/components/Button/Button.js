import React, { Component } from 'react';
import styles from './Button.module.css';
import { xsltCode } from '../../assets/xslt';
import beautify from 'xml-beautifier';
import xslt from 'xslt';

export default class Button extends Component {
	// Opciones de configuracion para el procesador de xslt
	options = {
		fullDocument: true,
		cleanup: true,
		xmlHeaderInOutput: true,
		normalizeHeader: true,
		encoding: 'UTF-8',
		preserveEncoding: false,
		removeDupNamespace: true,
		removeDupAttrs: false,
		removeNullNamespace: true,
		removeAllNamespaces: false,
		removeNamespacedNamespace: true,
		moveNamespacesToRoot: false,
		collapseEmptyElements: true,
		expandCollapsedElements: false,
	};
	convertXML = () => {
		// Si no hay codigo para aplicar, se termina
		if (!!!this.props.code) return;
		// Aplicacion de codigo xslt
		const outputXmlString = xslt(this.props.code, xsltCode, this.options);
		// Aplicacion de beautify para ordenar el codigo xml resultado
		const xml = beautify(outputXmlString);
		// Colocacion de codigo xml transformado en el segundo editor
		this.props.setResult(xml);
	};
	render() {
		const { name } = this.props;
		return (
			<>
				<button onClick={this.convertXML} className={styles.button}>
					{name}
				</button>
			</>
		);
	}
}
