import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthForm from "./components/AuthForm";
import SecretPage from "./components/SecretPage";
import Navbar from "./components/Navbar";

const Home = () => <h1>Home</h1>;

function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact component={Home} path="/" />
        <Route
          exact
          component={() => <AuthForm type="login" />}
          path="/login"
        />
        <Route
          exact
          component={() => <AuthForm type="signup" />}
          path="/signup"
        />
        <ProtectedRoute exact component={SecretPage} path="/secret" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
