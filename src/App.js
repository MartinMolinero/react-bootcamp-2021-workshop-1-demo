import React from "react";
import DriversList from "./components/DriversList";
import mockedData from "./f1-pilots.json";

const { items } = mockedData;

export default function App() {
  return (
    <div className="App">
      <DriversList items={items} filter="" title="F1 2020 Standings" />
    </div>
  );
}
