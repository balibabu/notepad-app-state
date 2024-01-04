import React, { useContext, useEffect, useState } from 'react'
import { updateAppState } from '../app-state-management/updateAppState';
import { create_note, delete_note,update_note } from '../Notepad/NoteCrud';
import GlobalContext from '../Global/GlobalContext';
import { useNavigate } from 'react-router-dom';

export default function NoteappOnclickBinds() {
	const { setApp } = useContext(GlobalContext);
    const [, setIntitalRun] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        setIntitalRun((prev)=>{
            if(!prev){
                updateAppState(setApp, (id)=>navigate(`/editor/${id}`), 'views noteapp renderer noteItem onClick');
                updateAppState(setApp, create_note, 'views noteapp editor button create');
                updateAppState(setApp, update_note, 'views noteapp editor button update');
                updateAppState(setApp, delete_note, 'views noteapp renderer noteItem deleteButton onClick');
            }
            return true;
        })
    }, [])

    return (
        <></>
    )
}
