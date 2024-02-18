import React, { useMemo, useReducer } from "react";

import { AppReducer } from "./AppReducer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const initialState = {
  loading: true,
  isLoggedIn: false,
  docs: [],
  error: false,
};
export const appContext = React.createContext(initialState);

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getPdfDocuments = async () => {
    const url = `http://localhost:3000/documents`;
    const res = await axios.get(url);
    const result = await res.data;
   
    let docs = [];
    docs = result.map((item) => item);
    dispatch({ type: "GET_DOCUMENTS", payload: docs });
  };

  const setLoggedInState = (credentials) => {
    if (credentials.email === "user" && credentials.password === "password") {
      dispatch({
        type: "SET_LOGIN",
        payload: true,
      });
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <appContext.Provider
      value={{
        isLoggedIn: state.isLoggedIn,
        error: state.error,
        docs:state.docs,
        loading: state.loading,
        setLoggedInState,
        getPdfDocuments,
        dispatch,
      }}
    >
      {children}
    </appContext.Provider>
  );
};
