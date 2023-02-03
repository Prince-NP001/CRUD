import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Input,
  TextField,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { ProductAdd, ProductUpdate } from "../../Redux/Actions/ProductActions";

export default function PopupDialog(props) {
  const Dispatch = useDispatch();
  const [userInput, setUserInput] = useState(
    props.data
      ? {
          name: props.data.name,
          price: props.data.price,
          quantity: props.data.quantity,
          date: props.data.date,
        }
      : {
          name: "",
          price: "",
          quantity: "",
          date: "",
        }
  );
  const ProductSize = useSelector((item) => {
    return item.product.items;
  });

  const formSubmitHandle = (e) => {
    e.preventDefault();
    if (props.data) {
      axios
        .patch(`http://localhost:8055/items/dummy/${props.data.id}`, {
          name: userInput.name,
          price: userInput.price,
          quantity: userInput.quantity,
          date: userInput.date,
        })
        .catch(function (error) {
          console.log(error);
        });

      Object.assign(userInput, { id: props.data.id });
      Dispatch(ProductUpdate(userInput));
    } else {
      axios
        .post("http://localhost:8055/items/dummy", {
          name: userInput.name,
          price: userInput.price,
          quantity: userInput.quantity,
          date: userInput.date,
        })
        .catch(function (error) {
          console.log(error);
        });
      Object.assign(userInput, { id: parseInt(ProductSize.length) + 1 });
      Dispatch(ProductAdd(userInput));
    }
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
    <Dialog open={props.open} onClose={props.handleClose}>
      <form onSubmit={formSubmitHandle}>
        <DialogTitle>{props.type ? "Edit Product" : "Add Product"}</DialogTitle>
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
            autoComplete="off"
            variant="standard"
          />
          <TextField
            margin="dense"
            id="price"
            label="Price"
            value={userInput.price}
            onChange={handleTypedPrice}
            type="text"
            fullWidth
            autoComplete="off"
            variant="standard"
          />

          <TextField
            margin="dense"
            id="qty"
            label="Quantity"
            value={userInput.quantity}
            onChange={handleTypedQty}
            type="text"
            fullWidth
            autoComplete="off"
            variant="standard"
          />

          <Input
            type="date"
            label="Expiry Date"
            value={userInput.date}
            onChange={handleTypedDate}
            margin="dense"
            id="expDate"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          {!props.data ? (
            <Button onClick={props.handleClose} type="submit">
              Add Data
            </Button>
          ) : (
            <Button onClick={props.handleClose} type="submit">
              Save Data
            </Button>
          )}
        </DialogActions>
      </form>
    </Dialog>
  );
}
