import React, { useState } from "react";
import "./Form.css";
import { Button } from "../button";

export const Form = () => {
  const [data, setData] = useState([]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [color, setColor] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeAge = (e) => {
    setAge(e.target.value);
    console.log(age);
  };

  const handleChangeColor = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = {
      name: name,
      age: age,
      color: color,
    };

    if (name && age && color) {
      setData([newData]);
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div id="container">
      <form id="form">
        <h2>Survey</h2>

        <label>What is your name?</label>
        <input
          type="text"
          onChange={handleChangeName}
          value={name}
          placeholder="enter name"
        />

        <label>What is your age?</label>
        <input
          type="number"
          onChange={handleChangeAge}
          value={age}
          placeholder="enter age"
        />

        <label>What is your favourite color?</label>
        <input
          type="text"
          onChange={handleChangeColor}
          value={color}
          placeholder="enter color"
        />

        <Button type="submit" onClick={handleSubmit}>
          SUBMIT
        </Button>

        <div id="data">
          {data.map((item, index) => (
            <div key={index}>
              <p>Name: {item.name}</p>
              <p>Age: {item.age}</p>
              <p>Color: {item.color}</p>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};
