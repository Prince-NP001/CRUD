import React from "react";
import { Box } from "@mui/material";
import ProductMain from "../Components/Product/ProductMain";
import ProductHeader from "../Components/Product/ProductHeader";

export default function Product() {
  return (
    <Box>
      <ProductHeader />
      <ProductMain />
    </Box>
  );
}
