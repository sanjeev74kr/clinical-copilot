import "./evidenceFeedback.css";
import { useContext, useState } from "react";
import { FaPaperclip } from "react-icons/fa";

import DropDownBox from "../DropDownBox";
import Button from "@mui/material/Button";
import { conditions } from "../../utils/sampleData";
import { appContext } from "../../context/AppContext";
function EvidenceFeedback(props) {
  const { closeModalFunc } = props;
  const { evidenceResult } = useContext(appContext);
  console.log(evidenceResult, "evidenceresult value result");
  function handleCancel() {
    closeModalFunc();
  }
  const [selectedoptions, setSeletedoptions] = useState({
    label: "True",
    value: "True",
  });
  const [fileName, setFileName] = useState("");
  function handleDropDownSelection(e, field) {
    setSeletedoptions({ label: e, value: e });
  }
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleAttachmentClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <>
      <div className="evidence-status-modal">
        <div className="evidence-status-data-container">
          <div className="summary-contnr">
            <h4 className="evidenece-status-label">Summary</h4>
            <p className="summary">
              This is the list of all ICD Codes present in patient's Medical
              History
            </p>
          </div>
          <div className="description-contnr">
            <h4 className="evidenece-status-label">Evidence</h4>

            <div className="notes-container">
              <span className="heading align-box">Condition</span>
              <div className="condition-line"></div>
              <span className="align-box">
                <p>
                  E78.1(Hypertriglyceridemia (disorder)) diagnosed on 1991-02-15
                </p>
              </span>
            </div>

            <div className="notes-container">
              <span className="heading align-box">Condition</span>
              <div className="condition-line"></div>
              <span className="align-box">
                <p>
                  E88.810(Metabolic syndrome X (disorder)) diagnosed on
                  2017-02-18
                </p>
              </span>
            </div>
            <div className="notes-container">
              <span className="heading align-box">Condition</span>
              <div className="condition-line"></div>
              <span className="align-box">
                <p>I82.4(DVT) diagnosed on 2019-02-18</p>
              </span>
            </div>
            <div className="notes-container">
              <span className="heading align-box">Condition</span>
              <div className="condition-line"></div>
              <span className="align-box">
                <p>
                  M06.9(Rheumatoid Arthritis) diagnosed on
                  2019-02-21R70.0(Elevated ESR) diagnosed on 2019-02-05
                </p>
              </span>
            </div>
            <div className="notes-container">
              <span className="heading align-box">Condition</span>
              <div className="condition-line"></div>
              <span className="align-box">
                <p>I82.4(DVT) diagnosed on 2019-02-18</p>
              </span>
            </div>
          </div>

          <div className="notes-contnr">
            <h4 className="evidenece-status-label">User-Notes</h4>

            <div className="txtaracls">
              <div className="txtarawdth">
                <textarea
                  className="user-notes"
                  placeholder="Please enter your feedback"
                ></textarea>
              </div>
              <div>
               
              </div>
            </div>
          </div>
          <div>
            
          </div>

          <div className="feedback-action-btn-contnr">
            <div className="select-notes-popup">
              <div className="evidence-lable">
                <div>Evidence Status:</div>
                <DropDownBox
                  label={"Evidence Status: "}
                  dropDownBoxData={conditions}
                  type="condition"
                  selectedValue={selectedoptions}
                  onSelect={(value) =>
                    handleDropDownSelection(value, "condition")
                  }
                />
              </div>
              <div>
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
                  onClick={handleCancel}
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EvidenceFeedback;
