import React, { useContext } from "react";
import Box from "./Box";
import Circle from "./Circle";
import RoundedBox from "./RoundedBox";
import "./state_task.scss";
import { CountContext } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "../../features/counter/counterSlice";

export default function StateTask() {
  const counterState = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  const byValue = 50;

  // const cc = useContext(CountContext);

  return (
    <div className="states">
      <div className="c_state">
        <button
          onClick={() => {
            dispatch(decrement());
          }}
          // onClick={() => {
          //   cc.setState({ ...cc.state, count: cc.state.count - 1 });
          // }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatch(increment());
          }}
          // onClick={() => {
          //   cc.setState({ ...cc.state, count: cc.state.count + 1 });
          // }}
        >
          Increment
        </button>

        <button
          onClick={() => {
            dispatch(incrementByValue(byValue));
          }}
        >
          Increment By {byValue}
        </button>
        <h1>{counterState.count}</h1>
        {/* <h1>{cc.state.count}</h1> */}
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
