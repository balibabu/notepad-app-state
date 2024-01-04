import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../Global/GlobalContext';
import { useNavigate, useParams } from 'react-router-dom';
import { updateAppState } from '../app-state-management/updateAppState';
import currentDateToColor from './RandomColor';


const dummyDetails = { description: "", color: currentDateToColor() };
export default function Editor() {
	const { noteId } = useParams();
	const [formDetails, setFormDetails] = useState(dummyDetails);
	const { app, setApp } = useContext(GlobalContext);
	const [, setInitialFetch] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		setInitialFetch((prev) => {
			if (!prev) {
				if (!isNaN(noteId)) {
					updateAppState(setApp, app.views.noteapp.editor.button.update, 'views noteapp editor button onClick');
					const foundNote = app.modal.notes.find((note) => note.id === parseInt(noteId));
					setFormDetails(foundNote);
				} else {
					updateAppState(setApp, app.views.noteapp.editor.button.create, 'views noteapp editor button onClick');
				}
			}

			return true;
		})
	}, [app.modal.notes, noteId])

	const onFromDetailsChange = (e) => {
		const { name, value } = e.target;
		setFormDetails((prev) => ({ ...prev, [name]: value }));
	}

	const onSaveClick = async () => {
		await app.views.noteapp.editor.button.onClick(formDetails, setApp);
		setFormDetails(dummyDetails);
		navigate(-1);
	}


	return (
		<div style={app.views.noteapp.editor.containerStyle}>
			<div style={app.views.noteapp.editor.header.containerStyle}>
				<input disabled placeholder='Title'
					value={formDetails.description}
					style={app.views.noteapp.editor.header.titleStyle} />
				<input type="color" name='color'
					style={app.views.noteapp.editor.header.colorpicker.style}
					value={formDetails.color}
					onChange={onFromDetailsChange} />
			</div>
			<textarea
				name='description'
				value={formDetails.description}
				onChange={onFromDetailsChange}
				style={app.views.noteapp.editor.descriptionStyle} />

			<button style={app.views.noteapp.editor.button.style}
				onClick={onSaveClick}
			>
				{app.views.noteapp.editor.button.title}
			</button>
		</div>
	)
}
