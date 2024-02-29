import { useContext, useEffect, useState } from "react";
import "./medicalChartReview.css";
import DetailsCard from "../../components/DetailsCard";
import PdfViewer from "../../components/PdfViewer";
import pdfFile from "../../assets/sample_file.pdf";
import DropDownBox from "../../components/DropDownBox";
import { status } from "../../utils/sampleData";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { CgProfile } from "react-icons/cg";
import { FaPaste } from "react-icons/fa";
import { appContext } from "../../context/AppContext";
import { useLocation } from "react-router-dom";
import Evidence from "../../components/Evidence/evidence";

function MedicalChartReview() {
  const {
    identifierDetails,
    getDocumentDataPerIdentifier,
    getConceptEvidence,
    evidenceResult,
    loading,
    userName,
  } = useContext(appContext);

  const [referenceText, setReferenceText] = useState(["lorem"]);
  const [selectedConcept, setSelectedConcept] = useState("");

  const [selectedReviewStatus, setSelectedReviewStatus] = useState("");
  const [patient, setPatient] = useState([]);
  const [provider, setProvider] = useState([]);
  const [clinicalDocument, setClinicalDocument] = useState([]);
  const [clinicalDocumentSummary, setclinicalDocumentSummary] = useState([]);

  const location = useLocation();
  const documentIdentifier = location.state.identifier;

  useEffect(() => {
    getDocumentDataPerIdentifier(documentIdentifier);
  }, []);

  useEffect(() => {
    setPatient(identifierDetails.patient);
    setProvider(identifierDetails.provider);
    setClinicalDocument(identifierDetails.clinical_document);
    setclinicalDocumentSummary(identifierDetails.clinical_document_summary);
    if (identifierDetails?.clinical_document_summary !== undefined) {
      const cdsid =
        identifierDetails?.clinical_document_summary[0].CDS_Identifier;

      initConceptEvidence(cdsid, "NOT-STARTED");
    }
  }, [identifierDetails]);

  const initConceptEvidence = (cds_identifier, reviewStatus) => {
    getConceptEvidence(cds_identifier, reviewStatus);
  };

  function handleDropDownSelection(value, field) {
    if (field === "concept") {
      setSelectedConcept(value);
    } else if (field === "review_status") {
      setSelectedReviewStatus(value);
    }

    if (
      selectedConcept !== undefined &&
      selectedConcept !== "" &&
      selectedReviewStatus !== undefined &&
      selectedReviewStatus !== ""
    ) {
      getConceptEvidence(selectedConcept, selectedReviewStatus);
    } else {
      console.log(selectedConcept, selectedReviewStatus);
    }
  }

  return (
    <div className="page-main-container">
      {/* <Header /> */}
      <div className="card-container">
        {clinicalDocument && (
          <DetailsCard
            cardHeader={"Prior Auth Request Details"}
            cardData={clinicalDocument}
            type={"Auth"}
          />
        )}
        {patient && (
          <DetailsCard
            cardHeader={"Patient Details"}
            cardData={patient}
            type={"Patient"}
          />
        )}
        {provider && (
          <DetailsCard
            cardHeader={"Provider  Details"}
            cardData={provider}
            type={"Provider"}
          />
        )}
        {clinicalDocument && (
          <DetailsCard
            cardHeader={"Document Details"}
            cardData={clinicalDocument}
            type={"document"}
          />
        )}
        {clinicalDocument && (
          <DetailsCard
            cardHeader={"Status"}
            cardData={clinicalDocument}
            type={"status"}
          />
        )}
      </div>
      <div className="pdfViewer-and-operations-container">
        <PdfViewer
          className={"pdfViewer-container"}
          pdfurl={pdfFile}
          referenceTextInput={referenceText}
        />
        <div className="operation-container">
          <div className="title-container">
            <div className="select-concept-container">
              {clinicalDocumentSummary && (
                <DropDownBox
                  label={""}
                  cssName={"select-box-container-concept"}
                  dropDownBoxData={clinicalDocumentSummary}
                  type={"concept"}
                  onSelect={(value) =>
                    handleDropDownSelection(value, "concept")
                  }
                />
              )}
              <DropDownBox
                label={""}
                cssName={"select-box-container-review"}
                type={"status"}
                dropDownBoxData={status}
                onSelect={(value) =>
                  handleDropDownSelection(value, "review_status")
                }
              />
            </div>
          </div>
          <Evidence data={evidenceResult} />
          <div className="llm-box-container">
            <div className="user-box-container">
              <div className="person-icon">
                <CgProfile className="profile-icon" />
              </div>
              <div className="username"> {userName}</div>
              <div className="time">5 min ago</div>
            </div>
            <div className="text-field-container">
              <div>
                <TextField
                  variant="standard"
                  disableUnderline={false}
                  sx={{ width: "100%", padding: "10px 5px" }}
                  multiline
                  maxRows={4}
                  placeholder="Type anything…"
                  InputProps={{
                    disableUnderline: false, // <== added this
                  }}
                />
              </div>
              <div className="btn-container">
                <div className="paste-icon">
                  <FaPaste />
                </div>
                <div className="select-notes-dd">
                    <DropDownBox
                    label={""}
                    dropDownBoxData={status}
                    onSelect={(value) =>
                      handleDropDownSelection(value, "")
                    }
                  /> 
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="save-btn-container">
              <Button
                type="button"
                style={{
                  backgroundColor: "rgb(233, 79, 28)",
                  borderRadius: "20px",
                  fontWeight: "700",
                  width: "20%",
                }}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedicalChartReview;
