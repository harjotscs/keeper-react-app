import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddIcon from "@material-ui/icons/Add";
import { Fab, Zoom } from "@material-ui/core";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
    id: uuidv4(),
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(note);

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
    // console.log(note);
  };
  const handleClick = (event) => {
    event.preventDefault();
    props.addNote(note);
    setNote({
      title: "",
      content: "",
      id: uuidv4(),
    });
  };
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          return false;
        }}
        className="create-note"
      >
        {isExpanded ? (
          <Zoom in={isExpanded}>
            <input
              name="title"
              onChange={handleChange}
              value={note.title}
              placeholder="Title"
            />
          </Zoom>
        ) : null}

        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          onClick={() => {
            setExpanded(true);
          }}
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
