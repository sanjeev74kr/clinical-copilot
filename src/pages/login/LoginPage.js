import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { useContext } from "react";
import { appContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const { setLoggedInState } = useContext(appContext);
  const navigate = useNavigate();
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    setLoggedInState({
      email: data.get("email"),
      password: data.get("password"),
    });
    navigate("/home");
  };

  return (
    
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border:" 1px solid rgb(233, 79, 28)",
          borderRadius:"15px",
          padding:"10px"
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "rgb(233, 79, 28)" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            style={{ backgroundColor: "rgb(233, 79, 28)" }}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
