import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import cookie from "cookie";
import MenuIcon from "@mui/icons-material/Menu";
import RandomNumberGenerator from "./RandomNumberGenerator";


const Navigation = () => {
    const navigate = useNavigate();
  
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: "1" }}>
            
          </Typography>
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-list-item">
              <Link to="/randomnumbergenerator">Character Gen</Link>
            </li>
            <li
              className="nav-list-item"
              onClick={() => {
                document.cookie = cookie.serialize("loggedIn", null, {
                  maxAge: 0,
                });
                navigate("/login");
              }}
            >
              Logout
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Navigation;