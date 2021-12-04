import React from "react";

import SearchBar from "./SearchBar";
import useWindowWidth from "../../hooks/useWindowWidth";

import classes from "./Header.module.css";

const Header = () => {
  const width = useWindowWidth();
  return (
    <div className={classes.header}>
      <h2>{width > 768 ? "Flipkart-Clone" : "FC"}</h2>
      <SearchBar />
    </div>
  );
};

export default Header;
