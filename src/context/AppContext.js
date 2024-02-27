import React, { useMemo, useReducer } from "react";

import { AppReducer } from "./AppReducer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { getDocuments } from "../services/apiConsume";
import { getDocumentIdentifierURL, getDocumentsUrl } from "../services/api";

const initialState = {
  loading: true,
  isLoggedIn: false,
  docs: [],
  identifierDetails:[],
  error: false,
};
export const appContext = React.createContext(initialState);

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getPdfDocuments = async () => {
    const url = `http://localhost:3000/documents`;
    //getDocumentsUrl;
    try {
      //`http://localhost:3000/documents`;
      const res = await axios.get(url);
      const result = await res.data;

      let docs = [];
      docs = result?.map((item) => item);
      dispatch({ type: "GET_DOCUMENTS", payload: docs });
    } catch (error) {
      console.log(error);
    }
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

  const getDocumentDataPerIdentifier = async (identifier)=>{
    const identifierURL = getDocumentIdentifierURL+`${identifier}`;
    try {
      const res = await axios.get(identifierURL);
      const result = await res.data;

      let identifierDetails = [];
      identifierDetails = result?.map((item) => item);
      dispatch({ type: "GET_IDENTFIER_DOCUMENTS", payload: identifierDetails });
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <appContext.Provider
      value={{
        isLoggedIn: state.isLoggedIn,
        error: state.error,
        docs: state.docs,
        loading: state.loading,
        identifierDetails:state.identifierDetails,
        setLoggedInState,
        getPdfDocuments,
        getDocumentDataPerIdentifier,
        dispatch,
      }}
    >
      {children}
    </appContext.Provider>
  );
};
