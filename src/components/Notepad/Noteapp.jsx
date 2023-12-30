import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../Global/GlobalContext';
import Renderer from './Renderer';
import Editor from './Editor';
import { updateAppState } from '../app-state-management/updateAppState';
import NoteAppUI from '../ui-design/NoteAppUI';
import NoteappOnclickBinds from './NoteappOnclickBinds';

export default function Noteapp() {
    const { app, setApp } = useContext(GlobalContext);
    const [editMode, setEditMode] = useState(false);
    const hierarchy = 'views noteapp'

    useEffect(() => {
        updateAppState(setApp, () => setEditMode(true), hierarchy + ' addButton onClick');
        // eslint-disable-next-line
    }, [])



    return (
        <div style={app.views.noteapp.containerStyle}>
            <NoteAppUI/>
            <NoteappOnclickBinds/>
            {
                editMode ?
                    <Editor
                        notes={app.modal.notes}
                        views={app.views.noteapp.editor}
                        setEditMode={setEditMode}
                        hierarchy={hierarchy + ' editor'}
                        />
                    :
                    <>
                        <Renderer
                            notes={app.modal.notes}
                            views={app.views.noteapp.renderer}
                            hierarchy={hierarchy + ' renderer'}
                        />
                        
                        <button style={app.views.noteapp.addButton.style}
                            onClick={app.views.noteapp.addButton.onClick}>
                            {app.views.noteapp.addButton.title}
                        </button>
                    </>
            }
        </div>
    )
}
