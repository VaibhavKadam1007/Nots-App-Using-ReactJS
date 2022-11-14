import React from 'react';
import  Note from './Note';
import AddNote from './AddNote';
const NotesList = ({notes,handleAddNote,deleteNote}) => {
  return (
    <div className='notes-list'>
      {notes.map((note)=><Note id={note.id} text={note.text} date={note.date}   />)}
       <AddNote 
       handleAddNote={handleAddNote}
       deleteNote={deleteNote}
       />
       
    </div>
    )
}

export default NotesList