import React, { Component } from 'react';
import EditorTitle from '../TitleEditor/EditorTitle';
import { Controlled as CodeMirror } from 'react-codemirror2';
import styles from './Editor.module.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/xml-hint';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/anyword-hint';
import 'codemirror/keymap/sublime';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/comment-fold';
import 'codemirror/addon/fold/foldgutter.css';

export default class Editor extends Component {
	render() {
		const { title, readOnly, setCode, code } = this.props;
		return (
			<div className={styles.container}>
				<EditorTitle title={title} />
				<CodeMirror
					value={code}
					options={{
						mode: 'xml',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						smartIndent: true,
						foldGutter: true,
						gutters: [
							'CodeMirror-linenumbers',
							'CodeMirror-foldgutter',
						],
						autoCloseTags: true,
						keyMap: 'sublime',
						matchBrackets: true,
						autoCloseBrackets: true,
						extraKeys: {
							'Ctrl-Space': 'autocomplete',
						},
						indentWithTabs: true,
						hintOptions: true,
						readOnly: readOnly,
						tabSize: 2,
						viewportMargin: 25,
					}}
					onBeforeChange={this.onBeforeChange}
				/>
			</div>
		);
	}
	onBeforeChange = (editor, data, value) => this.props.setCode(value);
}
