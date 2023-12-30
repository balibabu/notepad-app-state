import React, { useContext, useEffect, useState } from 'react'
import { updateAppState } from '../app-state-management/updateAppState';
import { createNote, delete_note } from './NoteCrud';
import GlobalContext from '../Global/GlobalContext';

export default function NoteappOnclickBinds() {
	const { setApp } = useContext(GlobalContext);
    const [, setIntitalRun] = useState(false);
    useEffect(() => {
        setIntitalRun((prev)=>{
            if(!prev){
                updateAppState(setApp, createNote, 'views noteapp editor button onClick');
                updateAppState(setApp, delete_note, 'views noteapp renderer noteItem deleteButton onClick');
            }
            return true;
        })
    }, [])

    return (
        <></>
    )
}
