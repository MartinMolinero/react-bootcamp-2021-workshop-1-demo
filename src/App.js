import React from "react";
import "./global.css";

const Person = (props) => {
  // let counter = 0;
  return (<div className="person-container">
    <h2>{props.name}</h2>
    <div className="person-container__info">
      <p>{props.email}</p>
      <p>{props.telephone}</p>
    </div>
    {/* <button onClick={() => counter += 1 }>Click Me</button>
    <div><p>{counter}</p></div> */}
  </div>)
};

const Hello = () => <h2>Helloooo ⚛️!</h2>;

export default function App() {
  return (
    <div className="App">
      {/* <Person
        name="Jordan Walke"
        email="jordan@facebook.com"
        telephone="+1 (234) 567 8910"
      /> */}
      <Hello />
    </div>
  );
}
