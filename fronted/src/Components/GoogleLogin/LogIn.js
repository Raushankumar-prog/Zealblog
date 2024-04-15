import { Paper } from "@mui/material";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import GoogleLogin from "react-google-login";
import { makeRequest } from "../services/fetch/fetch";
import { useRouteLoaderData } from "react-router-dom";

const clientId = process.env.clientId;

const Login = () => {
  









  

  const loginWithGoogle = () => {
    window.open("http://localhost:4001/auth/google/callback", "_self");
  };

  return (  
    <Paper>
      <div className="signInButton">
        <button onClick={loginWithGoogle}>
          Sign In with Google
        </button>
      </div>
    </Paper>
  );
};
 
export default Login;
