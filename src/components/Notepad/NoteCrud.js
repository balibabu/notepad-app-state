import { addNote, deleteNote } from "../HttpRequests/notepad";
export async function createNote(note, setApp) {
    console.log(note);
    if (note.description.length===0) { return; }
    const newNote = await addNote(note);
    
    setApp((prev) => {
        const updatedApp = { ...prev };
        updatedApp.modal.notes = [newNote, ...updatedApp.modal.notes];
        return updatedApp;
    })
}


export const delete_note = async (id, setApp) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this note?");
    if (!confirmDelete) { return; }
    try {
        const isDeleted = await deleteNote(id);
        if (isDeleted) {
            setApp((prev) => {
                const updatedApp = { ...prev };
                updatedApp.modal.notes = updatedApp.modal.notes.filter((note) => note.id !== id);
                return updatedApp;
            })
        } else {
            console.log('Failed to delete note.');
        }
    } catch (error) {
        console.error('An error occurred during the deletion process:', error);
    }
};