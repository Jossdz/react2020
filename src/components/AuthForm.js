import React, { useState, useContext } from "react";
import { authService } from "../services/auth";
import { GlobalContext } from "../context";

function AuthForm({ type }) {
  const [formFields, setformFields] = useState({
    username: "",
    password: ""
  });
  const [, dispatch] = useContext(GlobalContext);

  const handleInputChange = ({ target: { name, value } }) => {
    setformFields({
      ...formFields,
      [name]: value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (type === "login") {
      const { data: user } = await authService.login(formFields);
      dispatch({ type: "LOGIN", payload: user });
    } else if (type === "signup") {
      const { data: user } = await authService.register(formFields);
      dispatch({ type: "SIGNUP", payload: user });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="user">User</label>
      <input
        type="text"
        name="username"
        id="username"
        value={formFields.username}
        onChange={handleInputChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        value={formFields.password}
        onChange={handleInputChange}
      />
      <input
        type="submit"
        value={type}
        disabled={!formFields.username || !formFields.password}
      />
    </form>
  );
}

export default AuthForm;
