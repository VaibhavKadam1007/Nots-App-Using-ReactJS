import React from "react";
import NotesList from "./components/NotesList";
import {useState,useEffect} from 'react';
import Search from './components/search';
import Header from "./components/Header";
function App() {
  const [notes,setNotes]=useState([
    { 
      id:1,
      text:'first note',
      date:"12/13/14"

     },
     { 
      id:2,
      text:'second note',
      date:"12/13/14"

     },
     { 
      id:3,
      text:'third note',
      date:"12/13/14"

     },


]);
useEffect(()=>{
const saveNotes=JSON.parse(
  localStorage.getItem('react-notes-app-data')
)
if(saveNotes){
  setNotes(saveNotes);  
}
},[])



useEffect(()=>{
  localStorage.setItem('react-note-app-data',JSON.stringify(notes))
},[])

const [searchText,setSearchText]=useState('');
const addNote=(text)=>{
  // console.log(text);
  const date=new Date();
  const newNote={
     id:7,
     text:text,
     date:date.toLocaleDateString()
  };

 const newNotes=[...notes,newNote];
 setNotes(newNotes);
};
const deleteNote = (id)=>{
  const newNote=notes.filter((note)=>note.id!==id); 
  setNotes(newNote);
}

const[darkMode,setDarkMdoe]=useState(false);

  return (
     <div className={`${darkMode && 'dark-mode'} `}> 
       
       <div className="container">
     <Header handledarkmode={setDarkMdoe}/>
    <Search handleSearchNote={setSearchText}/>
    <NotesList 
    notes={notes.filter((note)=>
     note.text.toLowerCase().includes(searchText)
     )} 
    handleAddNote={addNote}
   //  handledeletenote={deleteNote}
   deleteNote={deleteNote}
    />
   </div>
     </div>
    
  );
}

export default App;
