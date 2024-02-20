import React, { useContext, useEffect, useState } from "react";
import { appContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import DataTable from "../../components/DataTable";
import Modal from 'react-modal';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [tableData, setTableData] = useState([]);

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

  // useEffect(()=>
  // setTableData(handleSearch),[searchQuery]);

  // const filterData = (query, data) => {
  //   if (!query) {
  //     return data;
  //   }
  //   // } else {
  //   console.log("data:",data);
  //   return data?.filter((data) => data.toLowerCase().includes(query));
  // //return handleSearch();
  //   }
  // };

  function handleIdentifierClick() {
    navigate('/medicalChartReview');
  }

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
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
        style={customStyles}
        contentLabel="Example Modal"
      ></Modal>

      {/* filterData(searchQuery, docs) */}
      {docs.length > 0 && <DataTable rows={tableData} handleIdentifierClick={handleIdentifierClick} handleFilePathClick={handleFilePathClick} />}
    </div>
  );
};

export default React.memo(HomePage);
