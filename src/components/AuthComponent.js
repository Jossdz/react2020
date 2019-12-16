import React, { useState, useContext } from "react";
import { authService } from "../services/auth";
import { GlobalContext, LOGIN, SIGNUP } from "../context";

function AuthComponent({ type }) {
  const [formValues, setFormValues] = useState({
    username: "",
    password: ""
  });

  const [, dispatch] = useContext(GlobalContext);

  const inputChange = ({ target: { name, value } }) => {
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const submit = async e => {
    e.preventDefault();
    if (type === "signup") {
      const { data } = await authService.register(formValues);
      dispatch({ type: SIGNUP, payload: data });
    } else if (type === "login") {
      const { data } = await authService.login(formValues);
      dispatch({ type: LOGIN, payload: data });
    }
  };

  return (
    <form onSubmit={submit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        id="username"
        onChange={inputChange}
        value={formValues.username}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={inputChange}
        value={formValues.password}
      />
      <input
        type="submit"
        value={type}
        disabled={formValues.username === "" || formValues.password === ""}
      />
    </form>
  );
}

export default AuthComponent;
