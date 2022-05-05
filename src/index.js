import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
function Comp1() {
  return (
    <>
      <button onClick={Comp4}>Hide List</button>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
        <li>Item 6</li>
        <li>Item 7</li>
      </ul>
    </>
  );
}

function Comp2() {
  return (
    <>
      <button onClick={Comp3}>Show List</button>
    </>
  );
}

function Comp3() {
  root.render(
    <>
      {" "}
      <Comp1 />{" "}
    </>
  );
}

function Comp4() {
  root.render(
    <>
      {" "}
      <Comp2 />{" "}
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Comp2 />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
