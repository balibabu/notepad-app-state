import React from 'react'
import NoteItem from './NoteItem'

export default function Renderer({ notes, views, hierarchy }) {

	return (
		<div style={views.containerStyle}>
			{notes.map((note)=>(
				<NoteItem key={note.id} note={note} views={views.noteItem} hierarchy={hierarchy+' noteItem'}/>
			))}
		</div>
	)
}
