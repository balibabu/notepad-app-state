import React, { useContext, useEffect } from 'react'
import GlobalContext from '../Global/GlobalContext';
import { updateAppState } from '../app-state-management/updateAppState';
import { useMediaQuery } from 'react-responsive';
import RendererUI from './RendererUI';
import NoteEditorUI from './NoteEditorUI';

export default function NoteAppUI() {
    const isSmallScreen = useMediaQuery({ maxWidth: 767 });
    const { setApp } = useContext(GlobalContext);
    useEffect(() => {
        // note 1level design -> addButton, container
        updateAppState(setApp, floatingButtonStyle, 'views noteapp addButton style');
        updateAppState(setApp, containerStyle, 'views noteapp containerStyle');

    }, [])

    return (
        <>
            <RendererUI setApp={setApp} isSmallScreen={isSmallScreen} />
            <NoteEditorUI setApp={setApp} isSmallScreen={isSmallScreen} />
        </>
    )
}

const containerStyle = {
    height: '100dvh',
    overflow: "auto",
    backgroundColor: "grey",
}

const floatingButtonStyle = {
    position: 'fixed',
    bottom: '20px', // Adjust as needed
    right: '10px', // Adjust as needed
    padding: '10px',
    fontSize: "20px",
    fontWeight: "bolder",
    borderRadius: "50px",
    border: "5px groove #0077b6",
    backgroundColor: "#90e0ef",
    boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)"

}