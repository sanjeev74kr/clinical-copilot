import React from 'react'


import TextField from "@mui/material/TextField";

const SearchBar = ({setSearchQuery}) => (
    <form>
      <TextField
        id="document"
        className="text"
        onInput={(e) => {
          setSearchQuery(e.target.value);
        }}
        label="Enter a document name"
        variant="outlined"
        placeholder="Search..."
        size="small"
      />

<TextField
        id="timestamp"
        className="text"
        onInput={(e) => {
          setSearchQuery(e.target.value);
        }}
        label="Enter a timestamp"
        variant="outlined"
        placeholder="Search..."
        size="small"
      />
      <TextField
        id="Review"
        className="text"
        onInput={(e) => {
          setSearchQuery(e.target.value);
        }}
        label="Enter Review Status"
        variant="outlined"
        placeholder="Search..."
        size="small"
      />
      
    </form>
  );

export default SearchBar