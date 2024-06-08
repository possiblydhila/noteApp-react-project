import React, { useState } from 'react'
import { SafeAreaView } from 'react-native';
import Home from './src/screens/home'
import AddNote from './src/screens/addNote'
import EditNote from './src/screens/editNote'


// Tambahkan function "addNote" sebagai prop
const CurrentPageWidget = ({
  currentPage,
  noteList,
  setCurrentPage,
  addNote,
  deleteNote,
  currentNote,
  updatedNote,
  setCurrentNote,

}) => {
  switch (currentPage) {
    case 'home':
      return <Home 
        noteList={noteList} 
        setCurrentPage={setCurrentPage} 
        deleteNote={deleteNote}
        setCurrentNote={setCurrentNote}
        />
    case 'add':
      // Berikan function "addNote" ke component "AddNote"
      return <AddNote 
        setCurrentPage={setCurrentPage} 
        addNote={addNote} />
    case 'edit':
      return <EditNote 
        setCurrentPage={setCurrentPage}
        updatedNote={updatedNote}
        currentNote={currentNote} />
    default:
      return <Home />
  }
}

const App = () => {
  // tetapkan home sebaga default screen
  const [currentPage, setCurrentPage] = useState('home')
  //tetapkan current note sebagai chosen note
  const [currentNote, setCurrentNote] = useState([])

  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note pertama',
      desc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
  ])

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ]);
  };

  const deleteNote = (id) => {
    const deleteNote = noteList.filter((note) => {
      return note.id !== id
    })

    setNoteList(deleteNote)
  }

  const updatedNote = (id, title, desc) => {
    const updatedNote = noteList.map((note) => {
      if (note.id === id) {
        return {
          id,
          title,
          desc,
        }
      }
      return note
    })
    setNoteList(updatedNote)
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', marginTop: 32 }}>  
      <CurrentPageWidget
        currentPage={currentPage}
        noteList={noteList}
        setCurrentPage={setCurrentPage}
        // Berikan function addNote sebagai prop
        addNote={addNote}
        deleteNote={deleteNote}

        updatedNote={updatedNote}
        currentNote={currentNote}
        setCurrentNote={setCurrentNote}
        
      />
    </SafeAreaView>
  );
};

export default App