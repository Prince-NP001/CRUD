import React, { useState } from "react";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { Box, IconButton } from "@mui/material";

import PopupDialog from "./PopupDialog";

export default function PopupModel(props) {
  const [open, setOpen] = useState(false);

  const handleClickAdd = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box component="form">
      <IconButton
        size="medium"
        edge="end"
        aria-label="add"
        sx={{
          backgroundColor: "white",
        }}
        onClick={handleClickAdd}
      >
        <AddCircleOutlineRoundedIcon />
      </IconButton>
      <PopupDialog open={open} handleClose={handleClose} />
    </Box>
  );
}
