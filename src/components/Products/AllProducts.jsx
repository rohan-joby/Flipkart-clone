import React from "react";

import { useFilters } from "../../store/filter-Provider";
import ProductItem from "./ProductItem";

import classes from "./ProductItem.module.css";

const AllProducts = () => {
  const { filtered_products } = useFilters();

  let products = filtered_products.map((prdt) => (
    <ProductItem key={prdt.id} data={prdt} />
  ));

  return <div className={classes.grid}>{products}</div>;
};

export default AllProducts;
