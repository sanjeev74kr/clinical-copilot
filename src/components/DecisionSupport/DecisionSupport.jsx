import React, { useContext } from "react";
import { Requirements } from "../Requirements";
import PdfViewer from "../PdfViewer";
import { requirementsData } from "../../utils/sampleData";
import { useState, useEffect } from "react";
import { appContext } from "../../context/AppContext";
import DetailsCard from "../DetailsCard";
import "./DecisionSupport.css";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";

const DecisionSupport = () => {
  const { currentTabSelected, identifierDetails, prior_auth_desc, dispatch, currentSelctedDocument } =
    useContext(appContext);
  const [patient, setPatient] = useState([]);
  const [provider, setProvider] = useState([]);
  const [clinicalDocument, setClinicalDocument] = useState([]);
  const [documentStatus, setDocStatus] = useState("");
  const [payername, setPayername] = useState("Cigna");
  useEffect(() => {
    setPatient(identifierDetails.patient);
    setProvider(identifierDetails.provider);
    setClinicalDocument(identifierDetails.clinical_document);
    setDocStatus(currentSelctedDocument.Document_Review_Status)
  }, []);

  const onStatusChange = (status)=>{
    setDocStatus(status)
  }
  return (
    <>
      <div className="findPolicy-first-screen">
        <div className="decision-card-container">
          {clinicalDocument && (
            <DetailsCard
              cardHeader={"Prior Auth Request Details"}
              cardData={clinicalDocument}
              type={"Auth"}
              showLine={true}
            />
          )}

          {patient && (
            <DetailsCard
              cardHeader={"Patient Details"}
              cardData={patient}
              type={"Patient"}
              showLine={true}
            />
          )}
          {provider && (
            <DetailsCard
              cardHeader={"Provider  Details"}
              cardData={provider}
              type={"Provider"}
              showLine={true}
            />
          )}
          {currentTabSelected.payer && (
            <DetailsCard
              cardHeader={"Payer:"}
              cardData={currentTabSelected.payer}
              type={"Payer"}
              showLine={true}
            />
          )}
          {clinicalDocument && (
            <DetailsCard
              cardHeader={"Status"}
              cardData={clinicalDocument}
              documentStatus={documentStatus}
              type={"status"}
              showLine={true}
            />
          )}
        </div>
        
        <div className="findPolicy-second-screen">
         
          <div className="findPolicy-card-contnr">
            <div className="pdf-contnr">
              <PdfViewer pdfurl={currentTabSelected.pdfFile} />
            </div>
            <div className="requirements-contnr">
              <Requirements requirementTable={requirementsData} statusChange={onStatusChange} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DecisionSupport;
