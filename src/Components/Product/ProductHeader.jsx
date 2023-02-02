import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import PopupModel from "./PopupModel";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1, maxWidth: "85vw", margin: "auto" }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", color: "black" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            edge="start"
          >
            Product
          </Typography>

          <PopupModel />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
