import React, { useEffect } from 'react'
import { updateAppState } from '../app-state-management/updateAppState';

export default function RendererUI({setApp,isSmallScreen}) {
    useEffect(() => {
        updateAppState(setApp, { ...noteContainerStyle, width: isSmallScreen ? "80%" : "20%" }, 'views noteapp renderer noteItem containerStyle');
        updateAppState(setApp, renderContainerStyle, 'views noteapp renderer containerStyle');
        updateAppState(setApp, noteDescriptionStyle, 'views noteapp renderer noteItem descriptionStyle');
        updateAppState(setApp, noteDeleteButtonStyle, 'views noteapp renderer noteItem deleteButton style');
    }, [isSmallScreen])

    return (
        <></>
    )
}


const noteContainerStyle = {
    display: "inline-block",
    margin: "5px 0px",
    marginLeft: "15px",
    padding: "20px",
    border: "1px solid rgb(100, 100, 100)",
    borderRadius: "10px",
    backgroundColor: '#bde0fe',
};

const noteDescriptionStyle = {
    display: "inline-block",
    overflow: "hidden",
    whiteSpace: "nowrap",
    width: "90%",
    fontSize: '20px',
    fontWeight: 'bold',
    fontFamily: 'monospace',
}

const noteDeleteButtonStyle = {
    backgroundColor: '#f08080',
    // border: 'none',
    border: "3px groove red",
    borderRadius: "10px",
    cursor: 'pointer',

};

const renderContainerStyle = {
    // display: "inline-block",
    // 	margin: "5px 0px",
    // 	marginLeft: "15px",
    // 	padding: "20px",
    // 	border: "1px solid rgb(100, 100, 100)",
    // 	borderRadius: "10px",
}