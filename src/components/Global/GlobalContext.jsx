import { createContext, useEffect, useState } from "react";
import { updateAppState } from "../app-state-management/updateAppState";
import { getAllNotes } from "../HttpRequests/notepad";

const GlobalContext = createContext();
export default GlobalContext;

const modal = {
    notes: [
        { id: 1, description: "dasf", color: "#96ffff" },
        { id: 2, description: "sadf", color: "#96ffff" },
    ]
}


const artitecture = {
    modal,
    views: {
        noteapp: {
            containerStyle: {},
            editor: {
                containerStyle: {},
                titleStyle:{ overflow: "hidden", whiteSpace: "nowrap" },
                descriptionStyle:{height:"300px"},
                button:{
                    title:"insert",
                    style:{},
                    onClick:alert
                }
            },
            renderer: {
                containerStyle: {},
                noteItem: {
                    containerStyle: {},
                    descriptionStyle: {},
                    timestampStyle: {},
                    deleteButton: {
                        title: "x",
                        style: {},
                        onClick:()=>alert('deleteButton')
                    },
                    onClick:()=>alert('noteitemClicked')

                }
            },
            addButton: {
                title: "+",
                style: {},
                onClick: ()=>alert('addButton')
            }
        }
    }
}

export const GlobalProvider = ({ children }) => {
    const [app, setApp] = useState(artitecture);
    const [, setInitialFetch] = useState(false);


    useEffect(() => {
        const fetchNotes=async ()=>{
            const notes=await getAllNotes();
            updateAppState(setApp, notes,'modal notes');
        }

        setInitialFetch((prev)=>{
            if(!prev){
                fetchNotes();
            }
            return true;
        })
        // eslint-disable-next-line
    }, [])


    return (
        <GlobalContext.Provider value={{ app, setApp }}>
            {children}
        </GlobalContext.Provider>
    );
}

