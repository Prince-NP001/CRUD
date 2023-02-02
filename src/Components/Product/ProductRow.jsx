import React, { useState } from "react";
import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  TableCell,
  TableRow,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "../../Styles/Product/ProductRowStyles.scss";

export default function ProductRow(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
          <MenuItem onClick={handleClose}>
            <EditIcon sx={{ mr: 2, color: "grey" }} /> Edit
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <DeleteIcon sx={{ mr: 2, color: "grey" }} /> Delete
          </MenuItem>
        </Menu>
      </TableCell>
    </TableRow>
  );
}
