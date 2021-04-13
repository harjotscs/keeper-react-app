import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
const Note = (props) => {
  const { title, content, id } = props;
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button
        onClick={() => {
          props.delete(id);
        }}
      >
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Note;
