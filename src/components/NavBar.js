import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import "./NavBar.css";
import Button from "@material-ui/core/Button";
import Logo from "../assets/logo.png";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },

  palette: {
    //negro
    primary: {
      main: "#373737",
    },
    //blanco
    secondary: {
      main: "#f4f4f4",
    },
  },
});

const theme2 = createMuiTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },

  palette: {
    //dorado claro
    primary: {
      main: "#dcd0c0",
    },
    //dorado oscuro
    secondary: {
      main: "#c0b283",
    },
  },
});

function NavBar() {
  return (
    <>
     <ThemeProvider theme={theme}>
        <AppBar elevation={0} position="sticky" color="secondary">
          <Toolbar className="toolbar-style">
            <img src={Logo} className="logo-style"/>
          </Toolbar>
        </AppBar>  
      </ThemeProvider>
    </>
  );
}
export default NavBar;