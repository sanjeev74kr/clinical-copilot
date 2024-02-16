import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import green from "@mui/material/colors/green";

import { useContext } from "react";
import { appContext } from "../../context/AppContext";
import { createTheme } from "@mui/material";

export const LoginPage = () => {
  const { setLoggedInState } = useContext(appContext);

  const { palette } = createTheme();
  const { augmentColor } = palette;
  const createColor = (mainColor) =>
    augmentColor({ color: { main: mainColor } });
  const theme = createTheme({
    palette: {
      basecolor: createColor("rgb(233, 79, 28)"),
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const data = new FormData(e.currentTarget);

    setLoggedInState({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    // <div>
    //   <form onSubmit={handleLogin}>
    //     <div>
    //       <label htmlFor="username">Username:</label>
    //       <input
    //         id="username"
    //         type="text"
    //         value={username}
    //         onChange={(e) => setUsername(e.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="password">Password:</label>
    //       <input
    //         id="password"
    //         type="password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </div>
    //     <button type="submit">Login</button>
    //   </form>
    // </div>
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
