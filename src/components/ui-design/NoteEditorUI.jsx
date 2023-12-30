import React, { useEffect } from 'react'
import { updateAppState } from '../app-state-management/updateAppState';

export default function NoteEditorUI({ setApp }) {

    useEffect(() => {
        updateAppState(setApp, containerStyle, 'views noteapp editor containerStyle');
        updateAppState(setApp, titleStyle, 'views noteapp editor titleStyle');
        updateAppState(setApp, descriptionStyle, 'views noteapp editor descriptionStyle');
        updateAppState(setApp, floatingButtonStyle, 'views noteapp editor button style');
        
    }, [])

    return (
        <></>
    )
}


// editor: {
//     containerStyle: {},
//     titleStyle:{ overflow: "hidden", whiteSpace: "nowrap" },
//     descriptionStyle:{height:"300px"},
//     button:{
//         title:"insert",
//         style:{},
//         onClick:alert
//     }
// },

const containerStyle={
    background: '#219ebc',
    margin: '0px',
    padding: '0px',
    height: '88dvh',
}
const descriptionStyle = {
    width: '90dvw',
    height: '78%',
    border: 'none',
    outline: 'none',
    fontSize: '16px',
    padding: '5px',
    padding: '10px',
    backgroundColor: '#8ecae6',
    position: 'fixed',
    left: '50%',
    transform: 'translateX(-50%)',
    borderRadius: '10px',
};

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

const titleStyle={
    fontSize: '28px',
    fontWeight: 'bold',
    fontFamily: 'monospace',
    marginRight: 'auto', 
    border: 'none',
    outline: 'none',
    padding:'0.4rem',
    marginLeft:'2vw',
    backgroundColor:"transparent"
}