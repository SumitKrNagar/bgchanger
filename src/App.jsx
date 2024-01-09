import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState();

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <div className="cont">
        <button className="bt" onClick={() => setColor("black")}>
          Black
        </button>
        <button className="bt" onClick={() => setColor("blue")}>
          Blue
        </button>
        <button className="bt" onClick={() => setColor("green")}>
          Green
        </button>
        <button className="bt" onClick={() => setColor("red")}>
          Red
        </button>
        <button className="bt" onClick={() => setColor("yellow")}>
          Yellow
        </button>
        <button className="bt" onClick={() => setColor("violet")}>
          Violet
        </button>
        <button className="bt" onClick={() => setColor("pink")}>
          Pink
        </button>
      </div>
    </div>
  );
}

export default App;
