import React, { useEffect } from "react";
import axios from "axios";

import { DBUpdateProduct } from "../../Redux/Actions/ProductActions";
import { useSelector, useDispatch } from "react-redux";

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
  const Dispatch = useDispatch();
  const ProductList = useSelector((item) => {
    return item.product.items;
  });

  useEffect(() => {
    axios
      .get("http://localhost:8055/items/dummy", {})
      .then(function (response) {
        Dispatch(DBUpdateProduct(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

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
        {ProductList.data ? (
          <TableBody>
            {ProductList.data.map((data) => {
              return <ProductRow key={data.id} productData={data} />;
            })}
          </TableBody>
        ) : (
          ""
        )}
      </Table>
    </TableContainer>
  );
}
