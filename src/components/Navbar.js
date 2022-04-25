import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import ShoppingCart from "@mui/icons-material/ShoppingCart";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            E-Books
          </Typography>
          <IconButton>
            <ShoppingCart htmlColor="white" />
          </IconButton>
          <IconButton>
            <Avatar src="https://lh3.googleusercontent.com/a-/AOh14Gjxx-_XRFm9ON2ji1dr15IVirqz9RVKS8XxMI6GSg=s343-p-rw-no" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
