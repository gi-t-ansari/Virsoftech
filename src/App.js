import { React, useState } from "react";
import "./styles.css";
import UserInput from "./UserInput/UserInput";

export default function App() {
  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <UserInput />
    </div>
  );
}
