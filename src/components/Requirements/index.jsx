import React, { useState } from "react";
import "./requirements.css";

function Requirements(props) {
  const [dropdownValues, setDropdownValues] = useState({});

  const handleDropdownChange = (event, item) => {
    setDropdownValues({ ...dropdownValues, [item]: event.target.value });
    
  };

  // Function to handle button click
  const handleButtonClick = () => {
    // Perform actions when the button is clicked
    console.log("button clicked ")
  };

  return (
    <>
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
            <tr>
              <td className="custom-cell">1</td>
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
              <td className="custom-cell">
                Diagnosis of moderately to severely active rheumatoid Diagnosis
                of moderately to severely active rheumatoid
              </td>
              <td className="custom-cell">
                <button
                  className="custom-button"
                  onClick={handleButtonClick}
                >
                  True
                </button>
              </td>
            </tr>
            <tr>
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
                <button
                  className="custom-button"
                  onClick={handleButtonClick}
                >
                  True
                </button>
              </td>
            </tr>
            <tr>
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
                <button
                  className="custom-button"
                  onClick={handleButtonClick}
                >
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
                <button
                  className="custom-button"
                  onClick={handleButtonClick}
                >
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
                <button
                  className="custom-button"
                  onClick={handleButtonClick}
                >
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

