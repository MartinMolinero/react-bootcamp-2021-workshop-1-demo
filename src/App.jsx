import React from "react";
import "./global.css";

const Person = (props) => {
  console.log("Person is rendered");
  return (
    <div className="person-container">
      <h2>{props.name}</h2>
      <div className="person-container__info">
        <p>{props.email}</p>
        <p>{props.telephone}</p>
      </div>
    </div>
  );
};

const Hello = () => <h2>Helloooo there!</h2>;

export default function App() {
  return (
    <div className="App">
      <Hello />
      <Person
        name="Jordan Walkey"
        email="jordan@twitter.com"
        telephone="+1 (234) 567 8910"
      />
    </div>
  );
}
