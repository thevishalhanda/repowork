import {
  CardContent,
  Card,
  Grid,
  Typography,
  TextField,
  Button,
  withStyles,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import { SecuritySharp } from "@material-ui/icons";

import React, { useState } from "react";
import Image from "../common/Images/logo.png";
import InputField from "../common/Forms/InputFieldComponent";
import ButtonComponent from "../common/Forms/ButtonComponent";

function ResetPassword() {
  const [password, setPassword] = useState({
    password: "",
    resetpassword: "",
  });
  const [error,setError] = useState('');
  const [checker,setChecker] = useState(false);



 
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    const data = { ...password };
    data[event.target.name] = event.target.value;
    
    setPassword(data);
    if(password.password != "" && password.resetpassword != "" && checker == true) {
      validateProperty(data);
      console.log("true")
    }
  };


  const handleSubmit = () => {
    console.log("TRUE")
    validateProperty(password);
    setChecker(true);


  }


  const validateProperty = (data) => {
    console.log(data, '<><<><<>>---D A T A----<<><>><<><')
      switch(true){
        case (data.password != data.resetpassword):
          setError("Password need to be same");
          break; 

        case (data.password === data.resetpassword):
          setError('')
          break;
            
      }
  }




  
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  return (
    <>
      <Grid container xs={12} md={12} lg={12} justify="center">
        <Grid
          item
          xs={10}
          sm={6}
          md={6}
          lg={4}
          justify="center"
          direction="column"
          align="center"
        >
          <img
            src={Image}
            alt=""
            style={{
              width: "20%",
              height: "4.5%",
              marginTop: "7%",
            }}
          />

          <Card
            style={{
              width: "100%",
              height: "70vh",
              marginTop: "10%",
              borderRadius: "3%",
            }}
          >
            <CardContent>
              <Typography
                style={{
                  fontWeight: "450",
                  marginTop: "10%",
                  fontSize: "200%",
                  // fontSize:"3rem",
                  fontFamily: "CircularStd",
                }}
              >
                Enter your new
              </Typography>

              <Typography
                style={{
                  fontWeight: "450",
                  fontSize: "200%",
                  marginTop: "-2%",
                  // fontSize:"3rem",
                  fontFamily: "CircularStd",
                  marginBottom: "5%",
                }}
              >
                password
              </Typography>

              <InputField
                label="Password"
                type={showPassword ? "type" : "password"}
                onChange={handleChange}
                name="password"
                error={error}
                helperText={
                  error  }
              />

              <InputField
                label="Reset Password"
                error={error.resetpassword === "true"}
                type={showPassword ? "type" : "password"}
                onChange={handleChange}
                name="resetpassword"
                helperText={
                  error.resetpassword === "true" ? "Enter Reset Password" : ""
                }
                InputProps={{
                  // <-- This is where the toggle button is added.
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Typography
                variant="subtitle1"
                style={{
                  fontWeight: "300",
                  width: "100%",
                  fontFamily: "CircularStd",
                  fontSize: "78%",
                }}
              >
                <SecuritySharp
                  style={{
                    fontSize: "0.8rem",
                    color: "grey",
                    margin: "0% 1.5% 0% 1.5%",
                  }}
                />
                A strong password is 8 characters long,
              </Typography>

              <Typography
                variant="subtitle1"
                style={{
                  marginTop: "-1%",
                  fontWeight: "300",
                  width: "100%",
                  fontSize: "78%",
                  fontFamily: "CircularStd",
                }}
              >
                between lowercase, uppercase, and numbers.
              </Typography>

              <ButtonComponent
                label="UPDATE PASSWORD "
                onClick={
                  password.password && password.resetpassword ? (
                    handleSubmit
                  ):("")
                  
              }
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default ResetPassword;
