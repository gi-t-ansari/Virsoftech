import React, { useState } from "react";

const UserInput = (d) => {
  const [age, setAge] = useState(2);
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState(24);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [bmiStatus, setBmiStatus] = useState("");

  const captureAge = (e) => {
    setAge(e.target.value);
  };

  const captureHeight = (e) => {
    setHeight(e.target.value);
  };

  const captueWeight = (e) => {
    setWeight(e.target.value);
  };

  const captureGender = (e) => {
    setGender(e.target.value);
  };

  const calculateBmi = () => {
    const heightInMeter = (height * 2.45) / 1000;
    const heightSquare = heightInMeter * heightInMeter;
    const bmi = weight / heightSquare;
    setBmi(bmi);
  };

  if (gender === "male") {
    if (bmi < 18.5) {
      setBmiStatus("Underweight");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setBmiStatus("Normal Weight");
    } else if (bmi >= 25 && bmi <= 29.9) {
      setBmiStatus("Overweight");
    } else if (bmi >= 30) {
      setBmiStatus("Obesity");
    }
  }

  if (gender === "female") {
    if (bmi < 20.5) {
      setBmiStatus("Underweight");
    } else if (bmi >= 20.5 && bmi <= 26.9) {
      setBmiStatus("Normal Weight");
    } else if (bmi >= 27 && bmi <= 31.9) {
      setBmiStatus("Overweight");
    } else if (bmi >= 32) {
      setBmiStatus("Obesity");
    }
  }

  console.log(bmiStatus);

  return (
    <div className="userInput">
      <div className="inputAge">
        <label for="age">Age : </label>
        <input
          name="age"
          id="age"
          type="number"
          value={age}
          min={2}
          max={100}
          onChange={captureAge}
        />
      </div>
      <div className="inputAge">
        <label for="gender">Gender : </label>
        <select name="gender" id="gender" onChange={captureGender}>
          <option>Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="inputAge">
        <label for="height">Height : </label>
        <input
          name="height"
          id="height"
          type="number"
          value={height}
          min={24}
          max={96}
          onChange={captureHeight}
        />
        <span>inches</span>
      </div>
      <div className="inputAge">
        <label for="weight">Weight : </label>
        <input
          name="weight"
          id="weight"
          type="number"
          value={weight}
          onChange={captueWeight}
        />
        <span>kg</span>
      </div>
      <div className="compute">
        <button onClick={calculateBmi}>Compute</button>
      </div>
      <div>{`BMI Statue : ${bmiStatus}`}</div>
    </div>
  );
};

export default UserInput;
