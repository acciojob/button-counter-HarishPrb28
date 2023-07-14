import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [count, setCount] = useState(1);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>Button clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default App;
