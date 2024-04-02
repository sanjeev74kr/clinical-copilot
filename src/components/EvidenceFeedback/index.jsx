import "./evidenceFeedback.css";
import { useContext, useState } from "react";
import { FaPaperclip } from "react-icons/fa";

import DropDownBox from "../DropDownBox";
import Button from "@mui/material/Button";
import { conditions } from "../../utils/sampleData";
import { appContext } from "../../context/AppContext";
function EvidenceFeedback(props) {
  const { closeModalFunc } = props;
  const{evidenceResult}=useContext(appContext);
  console.log(evidenceResult,"evidenceresult value result h")
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
                <p>R70.0(Elevated ESR) diagnosed on 2019-02-05</p>
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
                <div className="btn-atchcls" onClick={handleAttachmentClick}>
                  <FaPaperclip />
                </div>
              </div>
            </div>
          </div>
          <div>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>

          <div className="feedback-action-btn-contnr">
            <div className="attchClass">
              Attachement(s):{" "}
              <span className="text">
                <p>{fileName}</p>
              </span>
            </div>
            <div className="select-notes-popup">
              <div className="evidence-lable">
                <div>Evidence Status:</div>
                <DropDownBox
                  label={"Evidence Status: "}
                  dropDownBoxData={conditions}
                  type="condtion"
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
