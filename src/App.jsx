import { useState } from "react";

function App() {
  const [num, setNum] = useState(1);
  return (
    <div className="container">
      <button
        onClick={() => {
          console.log("add horaha hai");
          setNum(num + 1);
        }}
      >
        Add
      </button>
      <p>{num}</p>
      <button
        onClick={() => {
          console.log("subt horaha hai");
          setNum(num - 1);
        }}
      >
        Subtract
      </button>
    </div>
  );
}

export default App;
