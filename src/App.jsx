import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  squaringFn,
  increment,
  multiplyByAmount,
  reset,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";

const isNumber = (val) => typeof val === "number" && val === val;

function App() {
  const currentCount = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");

  const handleReset = () => {
    setAmount("");
    dispatch(reset());
  };
  return (
    <>
      <div>
        <a href="https://vitejs.dev" >
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Modern-Redux(2023)</h1>
      <div className="card">
        <button
          style={{ marginRight: "10px" }}
          onClick={() => dispatch(squaringFn())}
        >
          Square
        </button>
        <button
          style={{ marginRight: "10px" }}
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button style={{ marginRight: "10px" }} onClick={handleReset}>
          Reset
        </button>
        <button onClick={() => dispatch(multiplyByAmount(2))}>
          MultiplyBy2
        </button>
        <button
          onClick={() => {
            if (isNumber(Number(amount)))
              dispatch(incrementByAmount(Number(amount)));
          }}
        >
          Incremented Amount
        </button>
        <p>
          <code>count is </code> {currentCount}
        </p>
        <p>👇🏽 This is for  Incremented Amount</p>
        <input
          type="text"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
      </div>
    </>
  );
}

export default App;
