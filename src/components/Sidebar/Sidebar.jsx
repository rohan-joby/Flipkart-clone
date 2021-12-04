import React, { useState } from "react";

import useWindowWidth from "../../hooks/useWindowWidth";
import { useFilters } from "../../store/filter-Provider";
import { getUniqueValues } from "../../lib/helpers";

import classes from "./Sidebar.module.css";

const Sidebar = () => {
  const {
    all_products,
    updateFilter,
    clearFilter,
    filter: { company, category, size },
  } = useFilters();

  const companies = getUniqueValues(all_products, "brand");
  const categories = getUniqueValues(all_products, "category");
  // const sizes = getUniqueValues(all_products, "size");
  const width = useWindowWidth();
  const sizes = ["all","S","M","L","XL"];

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleClick = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <aside
        className={sidebarOpen ? `${classes.opened} ` : `${classes.sidebar} `}
      >
        <div className={classes.title}>
          {width < 768 && (
            <h3 onClick={handleClick}>{sidebarOpen ? `APPLY` : `FILTERS`}</h3>
          )}
          {width >= 768 && <h3>FILTERS</h3>}
          <button
            type="button"
            onClick={clearFilter}
            name="clear"
            className={classes.clear}
          >
            CLEAR ALL
          </button>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className={classes.section}>
            <h3>CATEGORIES</h3>
            {categories.map((cat) => (
              <button
                className={
                  cat === category
                    ? `${classes.filter} ${classes.active}`
                    : `${classes.filter}`
                }
                key={cat}
                name="category"
                onClick={updateFilter}
                type="button"
              >
                {cat}
              </button>
            ))}
          </div>
          <div className={classes.section}>
            <h3>BRANDS</h3>
            {companies.map((comp) => (
              <button
                className={
                  comp === company
                    ? `${classes.filter} ${classes.active}`
                    : `${classes.filter}`
                }
                key={comp}
                name="company"
                onClick={updateFilter}
                type="button"
              >
                {comp}
              </button>
            ))}
          </div>
          <div className={classes.section}>
            <h3>SIZES</h3>
            {sizes.map((comp) => (
              <button
                className={
                  comp === size
                    ? `${classes.filter} ${classes.active}`
                    : `${classes.filter}`
                }
                key={comp}
                name="size"
                onClick={updateFilter}
                type="button"
              >
                {comp}
              </button>
            ))}
          </div>
        </form>
      </aside>
    </>
  );
};

export default Sidebar;
