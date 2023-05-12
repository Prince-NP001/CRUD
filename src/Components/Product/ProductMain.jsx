import React from "react";
import { useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ProductRow from "./ProductRow";

export default function ProductMain() {
  const ProductList = useSelector((item) => {
    return item.product.items;
  });

  return (
    <TableContainer>
      <Table sx={{ maxWidth: "80vw", margin: "auto" }}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Name/Title</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Quantity</TableCell>
            <TableCell align="left">Expiry Date</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ProductList.map((data) => {
            return <ProductRow key={data.id} productData={data} />;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
