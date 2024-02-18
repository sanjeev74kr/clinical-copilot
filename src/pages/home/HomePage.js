import React, { useContext, useEffect, useState } from "react";
import { appContext } from "../../context/AppContext";
import SearchBar from "../../components/SearchBar";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filterData = (query, data) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d) => d.toLowerCase().includes(query));
    }
  };
  const dataFiltered = filterData(searchQuery, data);

  return (
    <div>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
    </div>
  );
};

export default HomePage;
