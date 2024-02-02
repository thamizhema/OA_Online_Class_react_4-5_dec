import React, { useContext } from "react";
import Box from "./Box";
import Circle from "./Circle";
import RoundedBox from "./RoundedBox";
import "./state_task.scss";
import { CountContext } from "../../App";

export default function StateTask() {
  const cc = useContext(CountContext);
  console.log(cc);
  return (
    <div className="states">
      <div className="c_state">
        <button
          onClick={() => {
            cc.setState({ ...cc.state, count: cc.state.count - 1 });
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            cc.setState({ ...cc.state, count: cc.state.count + 1 });
          }}
        >
          Increment
        </button>
        <h1>{cc.state.count}</h1>
        <div style={{ display: "flex" }}></div>
        <div className="o_state">
          <Box />
          <Circle />
          <RoundedBox />
        </div>
      </div>
    </div>
  );
}
