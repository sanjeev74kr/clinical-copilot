import * as React from "react";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { CgProfile } from "react-icons/cg";
import exlLogo from '../assets/EXL_logo.png'
import '../../src/components/Header/header.css'


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
            <img className='brand-logo' src={exlLogo} alt='exl'/>
            <h2 className='project-title'>Clinician-CoPilot</h2>
            <div className="profile-icon-container">
            <CgProfile  className='profile-icon'/>
            </div>         
            {/* <img className='profile-icon' src='<CgProfile />' alt='profile-pic'/> */}
            </div>
        {/* </div> */}
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
};
