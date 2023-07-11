
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const[count , setCount] = useState;
  const handleClick =()=>{
    setButtonClick(count + 1)
  }
  return (
    <div>
       <p>Button Clicked {count} times </p>
       <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default App
