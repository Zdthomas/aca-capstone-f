import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import cookie from "cookie";
import MenuIcon from "@mui/icons-material/Menu";
import { LogoutButton } from "./LogoutButton";







const Navigation = () => {
    const navigate = useNavigate();
  
    return (
      <AppBar sx={{backgroundColor: 'brown'}} position="static">
        <Toolbar>
          <IconButton color="inherit">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: "1" }}>
            
          </Typography>
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/Characters">CharacterGen</Link>
            </li>
            <li className="nav-list-item">
              <Link to="/Home">Home</Link>
            </li>
            <li className="nav-list-item">
              <Link to="/registration">Register</Link>
            </li>
            {/* <li
              className="nav-list-item"
              onClick={() => {
                document.cookie = cookie.serialize("loggedIn", null, {
                  maxAge: 0,
                });
                navigate("/login");
              }}
            >
              Logout
            </li> */}
            <li className="nav-list-item">
              <LogoutButton /> 
            </li>


          </ul>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Navigation;