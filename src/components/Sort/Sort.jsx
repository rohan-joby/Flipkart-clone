import React from "react";
import { useFilters } from "../../store/filter-Provider";
import useWindowWidth from "../../hooks/useWindowWidth";

import classes from "./Sort.module.css";

const Sort = () => {
  const { filtered_products, sort, updateSort } = useFilters();
  
  const length = filtered_products.length;
  const width = useWindowWidth();
  
  return (
    <section className={classes.sort}>
      <h2>{length} products found</h2>
      {width > 768 && (
        <form className={classes[`sort-form`]}>
          <label htmlFor="sort">
            Sort By
            <select id="sort" value={sort} onChange={updateSort}>
              <option value="featured">Featured</option>
              <option value="price-asc">Price Low to High</option>
              <option value="price-desc">Price High to Low</option>
              <option value="name-asc">Name A to Z</option>
              <option value="name-desc">Name Z to A</option>
            </select>
          </label>
        </form>
      )}
    </section>
  );
};

export default Sort;
