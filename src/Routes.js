import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SecretPage from "./components/SecretPage";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthComponent from "./components/AuthComponent";

const Home = () => <h1>Home</h1>;

function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact component={Home} path="/" />
        <Route
          exact
          component={() => <AuthComponent type="signup" />}
          path="/signup"
        />
        <Route
          exact
          component={() => <AuthComponent type="login" />}
          path="/login"
        />
        <ProtectedRoute exact component={SecretPage} path="/secretpage" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
