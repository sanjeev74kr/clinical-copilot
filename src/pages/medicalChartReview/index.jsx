import { useState } from "react";
import "./medicalChartReview.css";
import DetailsCard from "../../components/DetailsCard";
import PdfViewer from "../../components/PdfViewer";
import pdfFile from "../../assets/sample_file.pdf";
import DropDownBox from "../../components/DropDownBox";
import { concept } from "../../utils/sampleData";
import { status } from "../../utils/sampleData";
import DetailsStatus from "../../components/DetailsStatus";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { FaThumbsDown, FaThumbsUp, FaCopy, FaPaste } from "react-icons/fa";

function MedicalChartReview() {
  const [referenceText, setReferenceText] = useState(["lorem"]);
  const [selectedConcept, setSelectedConcept] = useState("");

  const [selectedReviewStatus, setSelectedReviewStatus] = useState("");
  const [expandFeedbackAccordion, setExpandFeedbackAccordian] = useState(false);

  function handleDropDownSelection(value, field) {
    if (field === "concept") {
      setSelectedConcept(value);
      console.log("concept:", selectedConcept);
    } else if (field === "review_status") {
      setSelectedReviewStatus(value);
      console.log("review_status", selectedReviewStatus);
    }
  }

  function handleFeedbackAccordion() {
    setExpandFeedbackAccordian(!expandFeedbackAccordion);
  }

  return (
    <div className="page-main-container">
      {/* <Header /> */}
      <div className="card-container">
        <DetailsCard cardHeader={"Prior Auth Request Details"} />
        <DetailsCard cardHeader={"Patient Details"} />
        <DetailsCard cardHeader={"Provider  Details"} />
        <DetailsCard cardHeader={"Document Details"} />
        <DetailsStatus cardHeader={"Status"} />
      </div>
      <div className="pdfViewer-and-operations-container">
        <PdfViewer pdfurl={pdfFile} referenceTextInput={referenceText} />
        <div className="operation-container">
          <div className="title-container">
            <div className="operation-title">Concept</div>

            <div className="select-concept-container">
              <DropDownBox
                label={""}
                dropDownBoxData={concept.identifier}
                onSelect={(value) => handleDropDownSelection(value, "concept")}
              />
              <DropDownBox
                label={""}
                dropDownBoxData={status}
                onSelect={(value) =>
                  handleDropDownSelection(value, "review_status")
                }
              />
            </div>
          </div>
          <div className="subtitle-container">Concept1</div>
          <div>
            <div className="para-container">
              img elements must have an alt prop, either with meaningful text,
              or an empty string for decorative images, img elements must have
              an alt prop, either with meaningful text, or an empty string for
              decorative images
            </div>
            <div className="ref-container">
              <div className="ref-item">
                <span>Diabeties on Page 1</span>
              </div>
              <div className="ref-item">
                <span>Blood Sugar on Page 2</span>
              </div>
              <div className="ref-item">
                <span>Hypertension on Page 3</span>
                <span></span>
              </div>
            </div>
            <div className="note-container">
              <ul>
                <li className="list-style-none">
                  <div><span className="heading">Condition: </span><span>Lipid panel complete blood count(hemogram) panel - Blood by Automatedcount </span></div>
                </li>
              </ul>
            </div>
            <div className="icon-container">
              <span>
                <FaCopy />
              </span>
              <span>
                <FaThumbsDown />
              </span>
              <span>
                <FaThumbsUp />
              </span>
            </div>
          </div>
          <div className="llm-box-container">
            <div className="user-box-container">
              <div className="person-icon"></div>
              <div className="username"> Jane Doe</div>
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
                <div className="select-concept-container">
                  <DropDownBox
                    label={""}
                    dropDownBoxData={status}
                    onSelect={(value) =>
                      handleDropDownSelection(value, "concept")
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
