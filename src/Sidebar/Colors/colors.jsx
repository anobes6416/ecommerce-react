import React from 'react';
import './colors.css';
import Input from '../../components/Input';

function colors({handleChange}) {
  return (
    <div>
       <h2 className="sidebar-title">Colors</h2>
       
      <label  className="sidebar-label-container">
          <input type="radio" name="test2" onChange={handleChange} value="" />
          <span className="checkmark all"></span>All
      </label>

      <Input 
        handleChange={handleChange}
        value="black"
        title="Black"
        name="test2"
        color="black"
        />

        <Input 
        handleChange={handleChange}
        value="red"
        title="Red"
        name="test2"
        color="red"
        />

        <Input 
        handleChange={handleChange}
        value="white"
        title="White"
        name="test2"
        color="white"
        />

        <Input 
        handleChange={handleChange}
        value="blue"
        title="Blue"
        name="test2"
        color="blue"
        />

 <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="white"
            name="test1"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          White
        </label>
    </div>
  )
}

export default colors