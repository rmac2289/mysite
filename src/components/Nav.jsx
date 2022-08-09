import { Container } from "@mui/material";
import { Toolbar } from "@mui/material";
import { AppBar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <AppBar position="static">
      <Link to="/about">About</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/contact">Contact</Link>
    </AppBar>
  );
};
