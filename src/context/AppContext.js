import React, { useReducer } from "react";

import { AppReducer } from "./AppReducer";
import axios from "axios";

import {
  getDocumentIdentifierURL,
  getDocumentsUrl,
  getEvidenceURL,
} from "../services/api";

import {getDocuments} from '../services/apiConsume'

const initialState = {
  loading: true,
  isLoggedIn: false,
  docs: [],
  identifierDetails: {},
  evidenceResult: [],
  error: false,
};
export const appContext = React.createContext(initialState);

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getPdfDocuments = async () => {
    const url = getDocumentsUrl;
    try {
      //`http://localhost:3000/documents`;
      
      // const res = await axios.get(url);
      // const result = await res.data.res;
      const result=await getDocuments();
      let docs = [];
      docs = result?.map((item) => item);
      dispatch({ type: "GET_DOCUMENTS", payload: docs });
    } catch (error) {
      console.log(error);
    }
  };

  const setLoggedInState = (credentials) => {
    if (credentials.email === "exl@exlservice.com" && credentials.password === "password@123") {
      dispatch({
        type: "SET_LOGIN",
        payload: true,
      });
    } else {
      alert("Invalid username or password");
    }
  };

  const getDocumentDataPerIdentifier = async (identifier) => {
    const identifierURL = getDocumentIdentifierURL + `/${identifier}`;
    dispatch({ type: "GET_IDENTFIER_DOCUMENTS_START", payload: true });
    try {
      const res = await axios.get(identifierURL);
      const result = await res.data.res;

      let identifierDetails = result;
      // identifierDetails = result?.map((item) => item);
      dispatch({ type: "GET_IDENTFIER_DOCUMENTS", payload: identifierDetails });
    } catch (error) {
      console.log(error);
    }
  };

  const getConceptEvidence = async (cds_identifier, reviewStatus) => {
    const evidencURL = getEvidenceURL + `${cds_identifier}`;
    dispatch({ type: "GET_EVIDENCE_START", payload: true });
    try {
      const res = await axios.get(evidencURL);
      const result = await res.data.res.clinical_evidence_summary;

      let evidenceDetails;
      evidenceDetails = result?.filter(
        (item) => item.CDS_Identifier === cds_identifier
      );

      dispatch({ type: "GET_EVIDENCE", payload: evidenceDetails });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <appContext.Provider
      value={{
        isLoggedIn: state.isLoggedIn,
        error: state.error,
        docs: state.docs,
        loading: state.loading,
        identifierDetails: state.identifierDetails,
        evidenceResult: state.evidenceResult,
        setLoggedInState,
        getPdfDocuments,
        getDocumentDataPerIdentifier,
        getConceptEvidence,
        dispatch,
      }}
    >
      {children}
    </appContext.Provider>
  );
};
