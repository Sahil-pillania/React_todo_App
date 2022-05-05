import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
const CreateNote = (props) => {
  const [Note, setNote] = useState({
    title: "",
    content: "",
  });

  const [expand, setExpand] = useState(false);
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

  const expandIt = () => {
    setExpand(true);
  };
  const unExpandIt = () => {
    setExpand(false);
  };

  return (
    <>
      <div className="main_note">
        <form>
          {expand ? (
            <input
              type="text"
              placeholder="Title"
              autoComplete="off"
              name="title"
              onChange={input}
              value={Note.title}
            />
          ) : null}
          <textarea
            rows=""
            column=""
            placeholder="Write a note..."
            name="content"
            onChange={input}
            value={Note.content}
            onClick={expandIt}
            onDoubleClick={unExpandIt}
          ></textarea>

          {expand ? (
            <Button onClick={addEvent}>
              <AddIcon className="plus_sign" />
            </Button>
          ) : null}
        </form>
      </div>
    </>
  );
};
export default CreateNote;
