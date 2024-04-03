import React, { useContext, useEffect, useState } from "react";
import { appContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

import SearchBar from "../../components/SearchBar";
import DataTable from "../../components/DataTable";
import PdfViewer from "../../components/PdfViewer";
import pdfFile from "../../assets/ActemraPrior_Auth.pdf";

import Modal from "react-modal";
import Pagination from "@mui/material/Pagination";
import { IoIosCloseCircleOutline } from "react-icons/io";

import "./homePage.css";
import PdfScan from "../../components/pdfScan/pdfScan";

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
    //  marginRight: '-50%',
    // transform: "translate(-50%, -50%)",
    // zindex: "100",
    // width:'fit-content',
    // height:'fit-content',
  },
};

Modal.setAppElement("body");

const HomePage = () => {
  
  const [searchQuery, setSearchQuery] = useState("");
  const [tableData, setTableData] = useState([]);
  const [filterdTableData, setFilterdTableData] = useState([]);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [pdfPath, setPdfPath] = useState();
  const [pdfName, setPdfName] = useState("");

  const idstoFilter = [
    "24a620c948f040f989f6f06c6d946c81",
    "2ae50dc04c7a4904a1982f18176323a6",
  ];

  const [page, setPage] = React.useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const { docs, getPdfDocuments, FileSelected, dispatch, scannedRecords } =
    useContext(appContext);
  const dataLength = tableData?.length;
  const rowsPerPage = 10;
  const pageCount = Math.ceil(dataLength / rowsPerPage);

  const navigate = useNavigate();

  const handleSearch = (query, type) => {
    setSearchQuery(query);

    switch (type) {
      case "document":
        const docData = docs?.filter((d) =>
          d?.Document_Name?.toLowerCase().includes(query.toLowerCase())
        );
        setTableData(docData);
        break;

      case "time":
        const timestampData = docs?.filter((d) =>
          query ? new Date(d?.Document_Evaluation_dts) >= new Date(query) : d
        );
        setTableData(timestampData);
        break;

      case "review":
        const reviewData = docs?.filter((d) =>
          d?.Document_Review_Status?.toLowerCase().includes(query.toLowerCase())
        );
        setTableData(reviewData);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    getPdfDocuments();
  }, []);

  useEffect(() => {
    const records = docs.filter((item) =>
      idstoFilter.includes(item.Identifier)
    );
    setFilterdTableData(records);

    const filterdRecords = docs.filter(
      (item) => !idstoFilter.includes(item.Identifier)
    );
   
    if(scannedRecords.length >0){
      setTableData([...filterdRecords, ...scannedRecords]);
    } else{
      setTableData(filterdRecords);
    }
   
  }, [docs]);

  function handleIdentifierClick(id, pdfPath, pdfName, data) {
    navigate("/medicalChartReview", {
      state: { identifier: id, documentPath: pdfPath, documentName: pdfName },
    });

    dispatch({ type: "SET_IDENTIFIER", payload: id });
    dispatch({ type: "CURRENT_SELECTED_DOCUMENT", payload: data});
   
  }

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  function handleFilePathClick(documentPath, documentName) {
    setPdfPath(documentPath);
    setPdfName(documentName);
    openModal();
  }

  function onProcessComplete() {
    if (FileSelected === "First") {
      setTableData([...tableData, filterdTableData[0]]);
      dispatch({
        type: "SET_FILE_SELECTED_OCCURANCE",
        payload: "second",
      });

      dispatch({
        type:"UPDATE_SCANNED_RECORDS", payload:filterdTableData[0]
      })
    } else {
      setTableData([...tableData, filterdTableData[1]]);
      dispatch({
        type:"UPDATE_SCANNED_RECORDS", payload:filterdTableData[1]
      })
    }
  }

  return (
    <div className="homepage-main-container">
     
      <div className="pdfscnConatainer">
        <PdfScan processComplete={onProcessComplete} />
      </div>
      <div className="table-heading">Processed Documents</div>
      <div className="searchbar-and-table">
        {/* // searchQuery={searchQuery} */}
        <SearchBar setSearchQuery={handleSearch} />

        {/* filterData(searchQuery, docs) */}
        {tableData && (
          <DataTable
            rows={tableData}
            page={page}
            rowsPerPage={rowsPerPage}
            handleIdentifierClick={handleIdentifierClick}
            handleFilePathClick={handleFilePathClick}
          />
        )}
        {dataLength > 0 ? (
          <div className="pagination-container">
            <h5 className="pagination-info">
              showing data {(page - 1) * rowsPerPage + 1} to{" "}
              {Math.min((page - 1) * rowsPerPage + rowsPerPage, dataLength)} of{" "}
              {dataLength | 0} entries
            </h5>

            <Pagination
              count={pageCount}
              shape="rounded"
              color="secondary"
              page={page}
              onChange={handleChange}
            />
          </div>
        ) : (
          <h5 className="no-data-msg">No data found</h5>
        )}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Pdf File"
      >
        <div className="modal-pdf-viewer-container">
          <IoIosCloseCircleOutline
            className="close-button"
            title="close"
            onClick={closeModal}
          />
          <PdfViewer
            className="modal-pdf-viewer"
            pdfurl={pdfFile}
            pdfname={pdfName}
          />
        </div>
      </Modal>
    </div>
  );
};

export default React.memo(HomePage);
