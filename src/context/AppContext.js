import React, { useMemo, useReducer } from "react";

import { AppReducer } from "./AppReducer";
import { useNavigate } from "react-router-dom";

const initialState = {
  loading: true,
  isLoggedIn: false,
  error: false,
};
export const appContext = React.createContext(initialState);

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // const getImages = async (keyword) => {
  //   const url = `https://pixabay.com/api/?key=22557617-9be25417ac6dadfd2a8808c0c&q=${keyword}`;
  //   const res = await axios.get(url);
  //   const result = await res.data.hits;
  //   let images = [];
  //   images = result.map((item) => item);
  //   dispatch({ type: "GET_IMAGES", payload: images });
  // };

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
        loading: state.loading,
        setLoggedInState,
        dispatch,
      }}
    >
      {children}
    </appContext.Provider>
  );
};
