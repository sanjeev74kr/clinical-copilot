import React, { useContext, useEffect, useState } from "react";
import { appContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import DataTable from "../../components/DataTable";
import Modal from 'react-modal';
import PdfViewer from '../../components/PdfViewer'
import pdfFile from '../../assets/sample_file.pdf'

// const customStyles = {
//   content: {
//     positon:'absolute',
//     top: '45%',
//     left: '50%',
//     right: 'auto',
//     bottom: '2.5%',
//    // marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//     overflow:'auto'
//   },
  
// };

Modal.setAppElement('body');

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [tableData, setTableData] = useState([]);
  const [modalIsOpen, setIsOpen] = React.useState(false);


  const navigate = useNavigate();

  const { docs, getPdfDocuments } = useContext(appContext);

  const handleSearch = (query, type) => {
    setSearchQuery(query);

    switch (type) {
      case "document":
        const docData = docs?.filter((d) =>
          d?.document_name?.toLowerCase().includes(query.toLowerCase())
        );
        setTableData(docData);

      case "time":
        break;

      case "review":
        const reviewData = docs.filter((d) =>
          d.document_review_status.toLowerCase().includes(query.toLowerCase())
        );
        setTableData(reviewData);

      default:
        break;

    }
  };

  useEffect(() => {
    getPdfDocuments();
  
  }, []);

  useEffect(()=>setTableData(docs),[docs]);

  
  function handleIdentifierClick() {
    
    navigate('/medicalChartReview');
  }

  function openModal() {
   setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = '#f00';
    //subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleFilePathClick(){
    openModal();
  }


  return (
    <div>
      {/* // searchQuery={searchQuery} */}
      <SearchBar setSearchQuery={handleSearch} />
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={Modal.defaultStyles}
        contentLabel="Pdf File"      
      >

        <PdfViewer pdfurl={pdfFile}/>
      </Modal>

      {/* filterData(searchQuery, docs) */}
      {docs.length > 0 && <DataTable rows={tableData} handleIdentifierClick={handleIdentifierClick} handleFilePathClick={handleFilePathClick} />}
    </div>
  );
};

export default React.memo(HomePage);
