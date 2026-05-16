import React, { useState } from "react";
import "./App.css";

function App() {
  // Step 3: Create state variable
  const [count, setCount] = useState(0);

  // Step 6: Event handlers
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <div className="card">
        <h2>React Counter Application</h2>

        {/* Step 4: Display counter value */}
        <h1>{count}</h1>

        {/* Step 5: Buttons */}
        <div className="buttons">
          <button onClick={increment}>Increment (+)</button>
          <button onClick={decrement}>Decrement (-)</button>
        </div>

        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;