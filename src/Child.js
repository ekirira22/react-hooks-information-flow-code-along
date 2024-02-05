import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";


function Child({ onChangeColor, color }) {

  function changeColor(){
    const newColor = getRandomColor()
    onChangeColor(newColor)
  }

  return <div onClick={changeColor} className="child" style={{ backgroundColor: color }} />;
}

export default Child;
