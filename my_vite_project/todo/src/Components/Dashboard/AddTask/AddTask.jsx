import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddTask() {
  const [taskInfo, setTaskInfo] = useState({ task: "" });
  const navigator = useNavigate();

  function onChangeHandler(e) {
    const { name, value } = e.target;
    setTaskInfo({ ...taskInfo, [name]: value });
  }
  return (
    <div>
      <h1>Add Task</h1>
      <input
        type="text"
        name="task"
        value={taskInfo.task}
        onChange={onChangeHandler}
      />
      <button
        onClick={() => {
          console.log(taskInfo);
          navigator("/view_task", { state: taskInfo });
        }}
      >
        Add Task
      </button>
    </div>
  );
}
