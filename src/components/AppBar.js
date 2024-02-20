import * as React from "react";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";


import { useNavigate } from "react-router-dom";

export const AppBar = () => {
  const navigate = useNavigate();

  return (
    <MuiAppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex", justifyContent:"space-between" } }}
          >
            {/* React Router Auth */}
          </Typography>

         {/*  <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
             
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box> */}
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            React Router Auth
          </Typography> */}

          {/* <div className='main-container'> */}
          <div className="main-container">
            <h1 className="brand-name">EXL</h1>
            <h2 className='project-title'>Clinician-CoPilot</h2>
            <img className='profile-icon' src=''/>
            </div>
        {/* </div> */}
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
};
