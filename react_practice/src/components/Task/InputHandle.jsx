import React, { useState } from "react";

export default function InputHandle() {
  const [values, setValues] = useState({ email: "", number: "" });
  const [tasks, setTask] = useState([]);

  function addTask() {
    setTask([...tasks, values.email]);
    console.log(tasks);
  }

  function logState() {
    console.log(values);
  }
  function inputChange(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }
  //   function updateEmail(event) {
  //     setValues({ ...values, email: event.target.value });
  //   }
  //   function updateNumber(event) {
  //     setValues({ ...values, number: event.target.value });
  //   }

  return (
    <div>
      <input
        type="text"
        value={values.email}
        onChange={inputChange}
        name="email"
      />
      <input
        type="text"
        value={values.number}
        onChange={inputChange}
        name="number"
      />
      <button onClick={addTask}>Add</button>
      <button onClick={logState}>State</button>
      <br />
      <hr />
      <div class="all-task">tas</div>
    </div>
  );
}
