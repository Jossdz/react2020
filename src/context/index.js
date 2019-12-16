import React, { createContext, useReducer, useMemo } from "react";

export const GlobalContext = createContext();

export const LOGIN = "LOGIN";
export const SIGNUP = "SIGNUP";

const initialState = {
  user: {}
};

export const GlobalProvider = props => {
  // useReducer 👇 el primer parametro es un reductor, el segundo es el estado inicial
  const [state, dispatch] = useReducer(reducer, initialState);
  // recibimos el estado y la función para cambiarlo es dispatch

  // useMemo, memo (memoizacion) es una técnica para evitar realizar un procesamiento si el valor ya fue usado
  const value = useMemo(() => [state, dispatch], [state]);
  // Este componente debe encerrar a toda nuestra app
  return <GlobalContext.Provider value={value} {...props} />;
};

// el estado, funciona de 2 maneras, setea y registra los cambios del estado inicial, y nos ayuda a realizar los cambios en funcion del estado anterior.

// Action recibe una orden de realizar un cambio, si el reducer la conoce, el cambio se efectua, si no podemos devolver el estado actual o un error.
function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { user: action.payload };
    case SIGNUP:
      return { user: action.payload };

    default:
      return state;
  }
}
