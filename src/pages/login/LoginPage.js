import "./loginPage.css";

// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Avatar from "@mui/material/Avatar";
// import TextField from "@mui/material/TextField";

// import { IoEye } from "react-icons/io5";
// import { IoEyeOff } from "react-icons/io5";

import { useContext, useEffect, useState } from "react";
import { appContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

import loginCoverImage from "../../assets/Ai cover pic.jpg";
import exlLogo from "../../assets/EXL_logo.png";

import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";

export const LoginPage = () => {
  // const [showPassword, setShowPassword] = useState(false);
  // const [isChecked, setIsChecked] = useState(false);

  const { setLoggedInState } = useContext(appContext);
  const navigate = useNavigate();

  const keyName = "userCredentials";
  const value = window.localStorage.getItem(keyName);
  const userData=JSON.parse(value);

  
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const data = new FormData(e.currentTarget);

  //   setLoggedInState({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  //   navigate("/home");
  // };

  // const handleToggle = () => {
  //   setIsChecked(!isChecked);
  // };

  // const handleForgotPassword = () => {
  //   //navigate('/passwordReset');
  // };

  const {instance}=useMsal();

  useEffect(() => {
    if (userData!==null) {
      console.log('userdata:',userData);
      navigate("/home");
    }
   }, [userData]);

   
  let activeAccount;
  if (instance) {
      activeAccount = instance.getActiveAccount();
      console.log("active:",activeAccount);
      const keyName='userCredentials'
      window.localStorage.setItem(keyName, JSON.stringify(activeAccount));
  }


  const handleLoginRedirect = () => {
    instance.loginRedirect(loginRequest).catch((error) => console.log(error));
};

const handleLogin=()=>{
  handleLoginRedirect();
}


  return (
    <div className="login-main-container">
      <div className="product-name-container">
        <p className="product-name">Clinical</p>
        <p className="product-name second">CoPilot</p>
      </div>
      <div className="login-image-container">
        <img className="login-image" src={loginCoverImage} alt="login image" />
      </div>
      <div className="login-input-container">
        <div className="logo">
          <img className="logo" src={exlLogo} alt="exl" />
        </div>
        
        <div className='login-button' onClick={handleLogin}>Sign In using Azure</div>
      </div>
    </div>
  );
};
{
  /* <Container
        className="login-input-container"
        component="main"
        maxWidth="xs"
      >
       
       
{/* 
        {/* <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "5%",
            // alignItems: "center",
            // border: " 1px solid rgb(233, 79, 28)",
            // borderRadius: "0.8rem",
            // padding: "0.65rem",
            // minHeight: "fit-content",
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: "rgb(233, 79, 28)" }}>
            <LockOutlinedIcon />
          </Avatar> */
}
{
  /*      <Typography component="h1" variant="h5"></Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <div className="email-container">
              <label htmlFor="email" className="email-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required="true"
                placeholder="exl@exlservice.com"
              />
            </div>
            <div className="password-container">
              <label htmlFor="password" className="password-label">
                Password
              </label>
              <div className="password-and-visibility">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="password@123"
                />
                {showPassword ? (
                  <IoEyeOff
                    className="visibility"
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <IoEye
                    className="visibility"
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>
            </div>

            <div className="login-addon-function-container">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleToggle}
                ></input>
                <span className="slider round"></span>
                <span className="label">Remember me</span>
              </label>

              <a onClick={handleForgotPassword}>Forgot password?</a>
            </div>  */
}
{
  /*           <Button
              type="submit"
              style={{
                backgroundColor: "rgb(233, 79, 28)",
                borderRadius: "0.4rem",
                padding: "0.5rem",
              }}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign in
            </Button>
          </Box>
        </Box>
        <AzureAuth />
      </Container> */
}
