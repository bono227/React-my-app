 import React, { useState } from 'react'
import "./Form.css"

export const Form = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };


  return (
    <div id="container">
      <div id="form">
        <h2>Survey</h2>

        <input type="text" onChange={handleChange}/>

        {`you typed: ${text}`}
      </div>
    </div>
  )
}
