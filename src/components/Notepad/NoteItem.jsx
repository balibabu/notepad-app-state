import React, { useContext, useEffect } from 'react'
import GlobalContext from '../Global/GlobalContext';

export default function NoteItem({ note, views, hierarchy }) {
    const { app,setApp } = useContext(GlobalContext);

    const del = (e, id) => {
        e.stopPropagation();
        app.views.noteapp.renderer.noteItem.deleteButton.onClick(id,setApp);
    }
    return (
        <div style={{ ...views.containerStyle, backgroundColor: note.color }}>
            <div style={views.descriptionStyle}
                onClick={views.onClick}>
                {note.description}
            </div>

            <button style={views.deleteButton.style}
                // onClick={views.deleteButton.onClick}
                onClick={(e) => del(e, note.id)}
            >
                {views.deleteButton.title}
            </button>
        </div>
    )
}
