import React, { useState } from "react";

import "./App.css";

function App() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(userInfo);
    localStorage.setItem('user',JSON.stringify(userInfo))
    setUserInfo({ name: "", email: "", password: "" });
  };
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
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

        <label htmlFor="email">Email</label>
        <input
          type="email"
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
