import React, { useState } from "react";
import { MESSAGE_ERROR, REGEX } from "../constants/LoginFormConstant";
// import { LoginMessError, LoginRegex } from "../types/LoginFormType";

const PageLogin = () => {
  const [user, setUser] = useState({
    email: {value:"", error: ""},
    password: {value: "", error: ""}
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name as keyof typeof REGEX;
    const error = REGEX[name].test(event.target.value)
    ? "": MESSAGE_ERROR[name];
    console.log(error);

    setUser({
      ...user,
      [event.target.name]: {value: event.target.value, error: error},
    //   [event.target.name]: [ event.target.value ],
    });

    console.log("UserName: " + JSON.stringify(user));
  };
  // const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setPassword(event?.target.value);
  //     console.log("Password: " +password);
  // }

  return (
    <form action="">
      <h1>Login</h1>
      <label htmlFor="username">UserName</label>
      <input
        type="text"
        id="email"
        name="email"
        onChange={handleChange}
      ></input><br />
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={handleChange}
      ></input>
      {user?.password?.error && (
        <p className="error" style={{color:"red"}}>Invalid Password</p>
      )}
      <br />
      <input type="submit" value={"Login"}></input>
    </form>
  );
};

export default PageLogin;
