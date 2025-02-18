import React, { useState } from "react";

import "./App.css";

function App() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(userInfo);
    localStorage.setItem("user", JSON.stringify(userInfo));
    if (userInfo.name === "") {
      setErrors({ ...errors, name: "Name is Required" });
      return;
    }
    if (userInfo.name.length <3) {
      setErrors({ ...errors, name: "Name must be at least 3 charachters" });
      return;
    }
    setUserInfo({ name: "", email: "", password: "" });
  };
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
    setErrors({...errors,[event.target.name]:""});
  }
    ;
  return (
    <>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={userInfo.name}
          onChange={handleChange}
        />
        {errors.name && (
          <span style={{ color: "red"}}>{errors.name}</span>
        )}

        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={userInfo.password}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
