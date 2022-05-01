import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
const CreateNote = (props) => {
  const [Note, setNote] = useState({
    title: "",
    content: "",
  });
  const input = (event) => {
    // const value = event.target.value;
    // const name = event.target.name;

    const { name, value } = event.target;

    setNote((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
    //console.log(Note);
  };

  const addEvent = () => {
    props.passNote(Note);
    setNote({
      title: "",
      content: "",
    });
  };

  return (
    <>
      <div className="main_note">
        <form>
          <input
            type="text"
            placeholder="Title"
            autoComplete="off"
            name="title"
            onChange={input}
            value={Note.title}
          />
          <textarea
            rows=""
            column=""
            placeholder="Write a note..."
            name="content"
            onChange={input}
            value={Note.content}
          ></textarea>
          <Button onClick={addEvent}>
            <AddIcon className="plus_sign" />
          </Button>
        </form>
      </div>
    </>
  );
};
export default CreateNote;
