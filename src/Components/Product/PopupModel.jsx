import React, { useState } from "react";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";

export default function PopupModel(props) {
  const [userInput, setUserInput] = useState({
    typedName: "",
    typedPrice: "",
    typedQty: "",
    typedDate: "",
  });

  const [open, setOpen] = useState(false);

  const handleClickAdd = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const formSubmitHandle = (e) => {
    e.preventDefault();
    console.log(userInput);
  };

  const handleTypedName = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, typedName: e.target.value };
    });
  };
  const handleTypedPrice = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, typedPrice: e.target.value };
    });
  };
  const handleTypedQty = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, typedQty: e.target.value };
    });
  };
  const handleTypedDate = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, typedDate: e.target.value };
    });
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

      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={formSubmitHandle}>
          <DialogTitle>
            {props.type ? "Edit Product" : "Add Product"}
          </DialogTitle>
          <DialogContent className="add-edit-product-form">
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name/Title"
              value={userInput.typedName}
              onChange={handleTypedName}
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="price"
              label="Price"
              value={userInput.typedPrice}
              onChange={handleTypedPrice}
              type="text"
              fullWidth
              variant="standard"
            />

            <TextField
              autoFocus
              margin="dense"
              id="qty"
              label="Quantity"
              value={userInput.typedQty}
              onChange={handleTypedQty}
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="expDate"
              label="Expiry Date"
              value={userInput.typedDate}
              onChange={handleTypedDate}
              type="text"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose} type="submit">
              Add Data
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
}
