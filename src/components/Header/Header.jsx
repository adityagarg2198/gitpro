import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <a href="/">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            GitPro
          </Typography>
        </a>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
