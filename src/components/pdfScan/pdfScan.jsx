import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import "./pdfScan.css";
import FileCounter from "./fileCounter";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import styled from "@emotion/styled";
import { CircularProgress } from "@mui/material";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));
const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)", // This will give a semi-transparent dark background
  },
  content: {
    position: "absolute",
    top: "10%",
    left: "35%",
    right: "35%",
    bottom: "55%",
    overflow: "none",
    padding: "0",
    outline: "none",
    borderRadius: "1.5rem",
  },
};

Modal.setAppElement("body");

function PdfScan({ processComplete }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [fileName, setFileName] = React.useState("");
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function LoadComplete() {
    processComplete();
    closeModal();
  }

  function handleButtonClick() {
    document.getElementById("fileInput").click();
  }

  const handleFileChange = (event) => {
    console.log(modalIsOpen, "modalIsOpen");
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      openModal();
    }
  };
  return (
    <>
      {
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <div className="evidence-status-heading-contnr">
            <h3 className="evidence-status-heading">File Processing</h3>
          </div>
          <hr className="linecolor"></hr>
          <div className="fileprocess">
            <div>FileName: {fileName}</div>

            <CircularProgress variant="indeterminate" disableShrink />

            <FileCounter onLoadComplete={LoadComplete} />
          </div>
        </Modal>
      }
      <div>
        <input
          id="fileInput"
          type="file"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </div>
      <div className="uploadContainer">
        <div>Upload Clinical Documents</div>
        <div>
          {" "}
          <button className="upload-button" onClick={handleButtonClick}>
            Analyze Scan Document
          </button>
        </div>
      </div>
    </>
  );
}

export default PdfScan;
