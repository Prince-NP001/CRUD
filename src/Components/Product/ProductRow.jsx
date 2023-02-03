import React, { useState } from "react";
import { IconButton, Menu, MenuItem, TableCell, TableRow } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "../../Styles/Product/Product.scss";
import { useDispatch } from "react-redux";
import { ProductDelete } from "../../Redux/Actions/ProductActions";
import PopupDialog from "./PopupDialog";
import axios from "axios";

export default function ProductRow(props) {
  const Dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [editOpen, setEditOpen] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClosePopup = () => {
    setEditOpen(false);
  };

  const handleDeleteProduct = (id) => {
    Dispatch(ProductDelete(id));
    axios
      .delete(`http://localhost:8055/items/dummy/${id}`, {})
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <TableRow
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
      }}
    >
      <TableCell>{props.productData.id}</TableCell>
      <TableCell align="left">{props.productData.name}</TableCell>
      <TableCell align="left">{props.productData.price}</TableCell>
      <TableCell align="left">{props.productData.quantity}</TableCell>
      <TableCell align="left">{props.productData.date}</TableCell>
      <TableCell align="left">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <MoreVertIcon />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          className="product-edit-menu"
          open={open}
          onClose={handleClose}
          PaperProps={{
            elevation: 0,
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem
            onClick={() => {
              setEditOpen(true);
            }}
          >
            <EditIcon sx={{ mr: 2, color: "grey" }} /> Edit
          </MenuItem>
          <PopupDialog
            data={props.productData}
            open={editOpen}
            handleClose={handleClosePopup}
          />
          <MenuItem
            onClick={() => {
              handleClose();
              handleDeleteProduct(props.productData.id);
            }}
          >
            <DeleteIcon sx={{ mr: 2, color: "grey" }} /> Delete
          </MenuItem>
        </Menu>
      </TableCell>
    </TableRow>
  );
}
