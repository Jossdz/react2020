import React, { useContext } from "react";
import { GlobalContext } from "../context";

function SecretPage() {
  // useContext requiere un contexto creado
  const [{ user }] = useContext(GlobalContext);
  console.log(user);
  return (
    <div>
      Secret Page
      <p>User: {user ? user.username : null}</p>
    </div>
  );
}

export default SecretPage;
