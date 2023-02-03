import React, { useState } from "react";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import shortid from "shortid";
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
import { useDispatch } from "react-redux";
import { ProductAdd } from "../../Redux/Actions/ProductActions";

export default function PopupModel(props) {
  const Dispatch = useDispatch();
  const [userInput, setUserInput] = useState({
    name: "",
    price: "",
    quantity: "",
    date: "",
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
    Object.assign(userInput, { id: shortid.generate() });
    Dispatch(ProductAdd(userInput));
  };

  const handleTypedName = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, name: e.target.value };
    });
  };
  const handleTypedPrice = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, price: e.target.value };
    });
  };
  const handleTypedQty = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, quantity: e.target.value };
    });
  };
  const handleTypedDate = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, date: e.target.value };
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
              value={userInput.name}
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
              value={userInput.price}
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
              value={userInput.quantity}
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
              value={userInput.date}
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
