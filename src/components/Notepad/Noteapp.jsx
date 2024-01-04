import React, { useContext } from 'react'
import GlobalContext from '../Global/GlobalContext';
import Renderer from './Renderer';
import NoteAppUI from '../ui-design/NoteAppUI';
import NoteappOnclickBinds from '../onClickBinders/NoteappOnclickBinds';
import { Link } from 'react-router-dom';

export default function Noteapp() {
    const { app } = useContext(GlobalContext);
    const hierarchy = 'views noteapp'

    return (
        <div style={app.views.noteapp.containerStyle}>
            <NoteAppUI />
            <NoteappOnclickBinds />
            <Renderer
                notes={app.modal.notes}
                views={app.views.noteapp.renderer}
                hierarchy={hierarchy + ' renderer'}
            />
            <Link
                to='/editor/x'
                style={app.views.noteapp.addButton.style}
                type="button"
            >{app.views.noteapp.addButton.title}</Link>
        </div>
    )
}
