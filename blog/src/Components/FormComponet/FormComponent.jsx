import React, { useState } from "react";

const styles = {
  input: {},
  row: {},
  col: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
};

export default function FormComponent() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    range: 0,
    course: [],
  });

  function onChangeHandler(e) {
    const { name, value, checked, type } = e.target;

    if (type === "checkbox") {
      let localData = [...data.course];
      if (checked) {
        localData.push(value);
      } else {
        const ind = localData.indexOf(value);
        localData.splice(ind, 1);
      }
      setData({ ...data, course: localData });
    } else {
      setData({ ...data, [name]: value });
    }
  }

  function onSubmit() {
    console.log(data);
  }

  return (
    <div style={{ ...styles.col, width: 300 }}>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={data.username}
        onChange={onChangeHandler}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={data.email}
        onChange={onChangeHandler}
      />
      <input
        type="text"
        name="password"
        placeholder="password"
        value={data.password}
        onChange={onChangeHandler}
      />
      <span>
        <input
          type="checkbox"
          name="course1"
          value={"python"}
          onChange={onChangeHandler}
        />
        <input
          type="checkbox"
          name="course2"
          value={"Java"}
          onChange={onChangeHandler}
        />
        <input
          type="checkbox"
          name="course3"
          value={"C++"}
          onChange={onChangeHandler}
        />
      </span>
      <span>
        <input
          type="radio"
          name="gender"
          value={"student"}
          onChange={onChangeHandler}
        />
        <input
          type="radio"
          name="gender"
          value={"female"}
          onChange={onChangeHandler}
        />
        <input
          type="radio"
          name="gender"
          value={"male"}
          onChange={onChangeHandler}
        />
      </span>
      <input
        type="range"
        name="range"
        min={0}
        max={100}
        value={data.range}
        onChange={onChangeHandler}
      />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}
