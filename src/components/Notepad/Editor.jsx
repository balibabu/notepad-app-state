import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../Global/GlobalContext';

export default function Editor({ views, setEditMode }) {
	const { app, setApp } = useContext(GlobalContext);
	const [description, setDescription] = useState('');

	const onDescriptionChange = (e) => {
		setDescription(e.target.value)
	}

	const onSaveClick = async ()=> {
		await app.views.noteapp.editor.button.onClick({ description: description, color: '#bde0fe' }, setApp, setEditMode);
		setDescription('');
		setEditMode(false);
	}




	return (
		<div style={views.containerStyle}>
			<div ><input disabled placeholder='Title' value={description} style={views.titleStyle} /></div>
			<TextAreaInput
				label='Description'
				id="note-description"
				value={description}
				onchangeFun={onDescriptionChange}
				style={views.descriptionStyle}
			/>
			<button style={views.button.style}
				onClick={onSaveClick}
			>
				{views.button.title}
			</button>
		</div>
	)
}

function TextAreaInput({ label, id, value, onchangeFun, style }) {
	return (
		<div>
			{/* <label htmlFor={id}>{label}</label><br /> */}
			<textarea placeholder={label} id={id} value={value} onChange={onchangeFun} style={style} />
		</div>
	)
}