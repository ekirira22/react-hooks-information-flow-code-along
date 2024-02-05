import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childColor, setChildColor] = useState("#FFF");

  function handleChangeColor(child){
    const newRandomColor = getRandomColor()
    setColor(newRandomColor)
    setChildColor(child)
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={handleChangeColor} color={childColor}/>
      <Child onChangeColor={handleChangeColor} color={childColor}/>
    </div>
  );
}

export default Parent;
