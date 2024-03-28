import React, { useState } from "react";
import Modal from "react-modal";
import EvidenceFeedback from "../EvidenceFeedback";
import "./requirements.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { evidenceValidationData } from "../../utils/sampleData";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)", // This will give a semi-transparent dark background
  },
  content: {
    position: "absolute",
    top: "10%",
    left: "15%",
    right: "15%",
    bottom: "22%",
    overflow: "none",
    padding: "0",
    outline: "none",
    borderRadius: "0.5rem",
  },
};

Modal.setAppElement("body");

function Requirements(props) {
  const [dropdownValues, setDropdownValues] = useState({});
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const handleDropdownChange = (event, item) => {
    setDropdownValues({ ...dropdownValues, [item]: event.target.value });
  };

  // Function to handle button click
  const handleButtonClick = () => {
    // Perform actions when the button is clicked
    // setEvidenceStatusClicked(true);
    openModal();
    console.log("button clicked ");
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      {
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <div className="evidence-status-feedback-container">
            <div className="evidence-status-heading-contnr">
              <h4 className="evidence-status-heading">Evidence</h4>
              <IoIosCloseCircleOutline
                className="evidence-close-button"
                title="close"
                onClick={closeModal}
              />
            </div>
            <hr></hr>
            <EvidenceFeedback closeModalFunc={closeModal} />
          </div>
        </Modal>
      }
      <div className="prntheader">
        <h3>
          <span>Prior Authorization Evidence Validation</span>
        </h3>
      </div>

      <div>
        <table className="custom-table">
          <thead>
            <tr>
              <th className="custom-cell">Item</th>
              <th className="custom-cell" colSpan={2}>
                AND/OR
              </th>
              <th className="custom-cell">Description</th>
              <th className="custom-cell">Evidence Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="custom-cell" rowSpan={2}>
                1
              </td>
              <td className="custom-cell"></td>
              <td className="custom-cell"></td>
              <td className="custom-cell">
                Diagnosis of moderately to severely active rheumatoid Diagnosis
                of moderately to severely active rheumatoid
              </td>
              <td className="custom-cell">
                <button className="custom-button true-color" onClick={handleButtonClick}>
                  True
                </button>
              </td>
            </tr>
            <tr>
              <td className="custom-cell" colSpan={4}>
                AND
              </td>
            </tr>
            <tr>
              <td className="custom-cell" rowSpan={2}>
                2
              </td>

              <td className="custom-cell"></td>
              <td className="custom-cell">OR</td>

              <td className="custom-cell">Description of Item 2</td>
              <td className="custom-cell">
                <button className="custom-button true-color" onClick={handleButtonClick}>
                  True
                </button>
              </td>
            </tr>
            <tr>
              <td className="custom-cell">AND</td>
              <td className="custom-cell"></td>
              <td className="custom-cell">Description of Item 3</td>
              <td className="custom-cell">
                <button className="custom-button partial-color" onClick={handleButtonClick}>
                  Partial
                </button>
              </td>
            </tr>
            <tr>
              <td className="custom-cell">3</td>

              <td className="custom-cell">AND</td>
              <td className="custom-cell"></td>
              <td className="custom-cell">Description of Item 3</td>
              <td className="custom-cell">
                <button className="custom-button partial-color" onClick={handleButtonClick}>
                  Partial
                </button>
              </td>
            </tr>
            <tr>
              <td className="custom-cell">4</td>
              <td className="custom-cell"></td>
              <td className="custom-cell">OR</td>
              <td className="custom-cell">Description of Item 4</td>
              <td className="custom-cell">
                <button className="custom-button true-color" onClick={handleButtonClick}>
                  True
                </button>
              </td>
            </tr>
            <tr>
              <td className="custom-cell">5</td>
              <td className="custom-cell">AND</td>
              <td className="custom-cell"></td>
              <td className="custom-cell">Description of Item 5</td>
              <td className="custom-cell">
                <button className="custom-button false-color" onClick={handleButtonClick}>
                  False
                </button>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export { Requirements };
