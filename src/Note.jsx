import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Button } from "@mui/material";
const Note = (props) => {
  const deleteNote = (props) => {
    props.deleteItem(props.id);
  };

  return (
    <div className="note">
      <h1> {props.title}</h1>
      <br />
      <p> {props.content}</p>
      <Button
        style={{ position: " absolute", bottom: "0", left: "173px" }}
        className="btn"
        onclick={deleteNote}
      >
        <DeleteForeverIcon className="deleteIcon" />
      </Button>
    </div>
  );
};
export default Note;
