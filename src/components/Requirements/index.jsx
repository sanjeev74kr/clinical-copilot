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
    bottom: "5%",
    overflow: "none",
    paddingTop: "0",
    outline: "none",
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
            <IoIosCloseCircleOutline
              className="evidence-close-button"
              title="close"
              onClick={closeModal}
            />
            <EvidenceFeedback closeModalFunc={closeModal} />
          </div>
        </Modal>
      }
      <div className="prntheader">
        <h3>
          <span>Prior Authorization Evidence Validation</span>
        </h3>
      </div>
      {/* <div className="textcls">
        <span>Payer Name</span>
        <span>UGH</span>
        <span>Prior Authorization</span>
        <span>Actemera</span>
      </div> */}
      <div>
        <table className="custom-table">
          <thead>
            <tr>
              <th className="custom-cell">Item</th>
              <th className="custom-cell">AND/OR</th>
              <th className="custom-cell">Description</th>
              <th className="custom-cell">Evidence Status</th>
            </tr>
          </thead>
          <tbody>
            {evidenceValidationData.map((item) => (
              <tr>
                <td className="custom-cell">{item?.item_no}</td>
                <td className="custom-cell">
                  <select
                    className="custom-select"
                    value={dropdownValues[1] || ""}
                    onChange={(event) => handleDropdownChange(event, 1)}
                  >
                    <option value="AND">AND</option>
                    <option value="OR">OR</option>
                  </select>
                </td>
                <td className="custom-cell">{item?.description}</td>
                <td className="custom-cell">
                  <button
                    className="custom-button"
                    id={item.evidenceStatus}
                    onClick={handleButtonClick}
                  >
                    {item?.evidenceStatus}
                  </button>
                </td>
              </tr>
            ))}
            {/* <tr>
              <td className="custom-cell">2</td>
              <td className="custom-cell">
                <select
                  className="custom-select"
                  value={dropdownValues[2] || ""}
                  onChange={(event) => handleDropdownChange(event, 2)}
                >
                  <option value="AND">AND</option>
                  <option value="OR">OR</option>
                </select>
              </td>
              <td className="custom-cell">Description of Item 2</td>
              <td className="custom-cell">
                <button className="custom-button" onClick={handleButtonClick}>
                  True
                </button>
              </td>
            </tr> */}
            {/* <tr>
              <td className="custom-cell">3</td>
              <td className="custom-cell">
                <select
                  className="custom-select"
                  value={dropdownValues[3] || ""}
                  onChange={(event) => handleDropdownChange(event, 3)}
                >
                  <option value="AND">AND</option>
                  <option value="OR">OR</option>
                </select>
              </td>
              <td className="custom-cell">Description of Item 3</td>
              <td className="custom-cell">
                <button className="custom-button" onClick={handleButtonClick}>
                  Partial
                </button>
              </td>
            </tr>
            <tr>
              <td className="custom-cell">4</td>
              <td className="custom-cell">
                <select
                  className="custom-select"
                  value={dropdownValues[4] || ""}
                  onChange={(event) => handleDropdownChange(event, 4)}
                >
                  <option value="AND">AND</option>
                  <option value="OR">OR</option>
                </select>
              </td>
              <td className="custom-cell">Description of Item 4</td>
              <td className="custom-cell">
                <button className="custom-button" onClick={handleButtonClick}>
                  True
                </button>
              </td>
            </tr>
            <tr>
              <td className="custom-cell">5</td>
              <td className="custom-cell">
                <select
                  className="custom-select"
                  value={dropdownValues[5] || ""}
                  onChange={(event) => handleDropdownChange(event, 5)}
                >
                  <option value="AND">AND</option>
                  <option value="OR">OR</option>
                </select>
              </td>
              <td className="custom-cell">Description of Item 5</td>
              <td className="custom-cell">
                <button className="custom-button" onClick={handleButtonClick}>
                  False
                </button>
              </td>
            </tr> */}
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export { Requirements };
