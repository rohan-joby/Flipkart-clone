import React from "react";

import { useFilters } from "../../store/filter-Provider";
import ProductItem from "./ProductItem";

import classes from "./ProductItem.module.css";

const AllProducts = () => {
  const { filtered_products } = useFilters();

  let products;
  if (filtered_products && filtered_products.length > 0) {
    products = filtered_products.map((prdt) => (
      <ProductItem key={prdt.id} data={prdt} />
    ));
    return <div className={classes.grid}>{products}</div>;
  } else {
    products = (
      <>
        <h2>Sorry, No products match the search parameters</h2>
        <h3>Please modify the filtes!</h3>
      </>
    );
    return <div className={classes.empty}>{products}</div>;
  }
};

export default AllProducts;
