import React from "react";
import { formatPrice } from "../../lib/helpers";

import classes from "./ProductItem.module.css";

const ProductItem = ({ data }) => {
  const priceFormatted = formatPrice(data.price);
  return (
    <div className={classes.wrapper}>
      <img src={data.image} alt="placeholder" height="275" width="250" />
      <div className={classes.details}>
        <p className={classes.brand}>{data.brand}</p>
        <h3 className={classes.title}>{data.title.slice(0,20)}{data.title.length > 20 ? "...":""}</h3>
        <h3 className={classes.price}>{priceFormatted}</h3>
        <h4 className={classes.size}>
          size:
          {data.size.map((size, index) => (
            <span className={classes.options} key={index}>
              {size}
            </span>
          ))}
        </h4>
      </div>
    </div>
  );
};

export default ProductItem;
