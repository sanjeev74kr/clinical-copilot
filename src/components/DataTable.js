import React from "react";
import { styled } from '@mui/material/styles';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#515151",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const DataTable = (props) => {
  const {rows,handleIdentifierClick,handleFilePathClick}=props;
  console.log(rows,'rows')


  const identifierClickHandler=()=>{
     handleIdentifierClick();
  }

  const filePathClickHandler=()=>{
    handleFilePathClick();
  }
  return (
    <div>
      <TableContainer  sx={{padding:"24px", width:"100%" }}>
        <Table sx={{ width: "100%",  border:"1px solid #ccc", borderRadius:"2px" }} aria-label="simple table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell >Document Identifier</StyledTableCell>
              <StyledTableCell align="center">Document Name</StyledTableCell>
              {/* <StyledTableCell align="center">File Path</StyledTableCell> */}
              <StyledTableCell align="center">Evaluation Date</StyledTableCell>
              <StyledTableCell align="right">Review Status</StyledTableCell>
           
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row) => (
              <StyledTableRow
                key={row.identifier}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
            
                <StyledTableCell  component="th" scope="row" onClick={identifierClickHandler}>
                  {row.Identifier}
                </StyledTableCell>
                <StyledTableCell align="center" onClick={filePathClickHandler}>{row.Document_Name}</StyledTableCell>
                {/* <StyledTableCell align="center" >{row.Document_Path}</StyledTableCell> */}
                <StyledTableCell align="center">{row.Document_Evaluation_dts}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.Document_Review_Status}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DataTable;
