import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  squaringFn,
  squareRootFn,
  multiplyByAmount,
} from "./redux/features/counter/counterSlice";

function App() {
  const currentCount = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Modern-Redux(2023)</h1>
      <div className="card">
        <button
          style={{ marginRight: "20px" }}
          onClick={() => dispatch(squaringFn())}
        >
          Square
        </button>
        <button
          style={{ marginRight: "20px" }}
          onClick={() => dispatch(squareRootFn())}
        >
          SquareRoot
        </button>
        <button onClick={() => dispatch(multiplyByAmount(2))}>
          MultiplyBy2
        </button>
        <p>
          <code>count is </code> {currentCount}
        </p>
      </div>
    </>
  );
}

export default App;
