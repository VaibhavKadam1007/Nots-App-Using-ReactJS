import React, {useState} from 'react'

const AddNote = ({handleAddNote}) => {
  const [noteText,setNoteText]=useState(''); 
  const charTextLimit=200;
  const handleChange=(event)=>{
    //   console.log(event.target.value);
    if (charTextLimit - event.target.value.length>=0){
        setNoteText(event.target.value);
    }

  };
   
  const handlesaveclks=()=>{
    if (noteText.trim().length>0) { 
      handleAddNote(noteText);
      setNoteText("");
  }};



  return (
    <div className='note new'>
       <textarea
       rows='8'
       cols='15'
       placeholder='addcontent'
       onChange={handleChange}
       >
       </textarea>
       <div className='note-footer'>
         <small>{charTextLimit-noteText.length}</small>
         <button className='save'onClick={handlesaveclks} >save</button>
       </div>
    </div>
  )
}

export default AddNote