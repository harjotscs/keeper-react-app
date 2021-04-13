import React from "react";

import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "../notes";
import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const addNote = (note) => {
    console.log(note);
    setNotes((prevValue) => {
      return [...prevValue, note];
    });
    console.log(notes);
  };

  const deleteNote = (id) => {
    setNotes((prevValue) => {
      return prevValue.filter((note) => {
        return note.id !== id;
      });
    });
  };

  return (
    <React.Fragment>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((note) => {
        return (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            delete={deleteNote}
          />
        );
      })}
      <Footer />
    </React.Fragment>
  );
}

export default App;
