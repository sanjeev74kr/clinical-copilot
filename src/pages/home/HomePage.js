import React, { useContext, useEffect, useState } from "react";
import { appContext } from "../../context/AppContext";
import SearchBar from "../../components/SearchBar";
import DataTable from "../../components/DataTable";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [tableData, setTableData] = useState([]);
  const { docs, getPdfDocuments } = useContext(appContext);
  const handleSearch = (query, type) => {
    setSearchQuery(query)
    switch (type) {
      case "document":
        return docs.filter((d) =>
          d.document_name.toLowerCase().includes(query.toLowerCase())
        );

      case "time":
        break;

      case "review":
        return docs.filter((d) =>
          d.document_review_status.toLowerCase().includes(query.toLowerCase())
        );

      default:
        break;
    }
  };

  useEffect(() => {
    getPdfDocuments();
  }, []);

  const filterData = (query, data) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d) => d.toLowerCase().includes(query));
    }
  };

  return (
    <div>
      <SearchBar searchQuery={searchQuery} setSearchQuery={handleSearch} />
      {docs.length > 0 && <DataTable rows={filterData(searchQuery, docs)} />}
    </div>
  );
};

export default React.memo(HomePage);
