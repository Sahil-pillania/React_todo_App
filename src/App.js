import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
import "./App.css";
import { ContactlessOutlined } from "@mui/icons-material";
import { valueToPercent } from "@mui/base";

function App() {
  const [addItem, setAddItem] = useState([]);

  const addNote = (Note) => {
    // alert("clicked");
    setAddItem((oldData) => {
      return [...oldData, Note];
    });
    //console.log(Note);
  };

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      {/* //<Note /> */}
      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
          />
        );
      })}
      <Footer />
    </>
  );
}

export default App;
