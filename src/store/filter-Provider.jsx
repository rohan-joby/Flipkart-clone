import React, { useContext, useReducer, useEffect } from "react";
import { filterReducer } from "./filterReducer";
import data from "../db.json";

export const FilterContext = React.createContext();

export const useFilters = () => {
  return useContext(FilterContext);
};

export const FilterProvider = ({ children }) => {
  const initialState = {
    filtered_products: [],
    all_products: [],
    sort: "featured",
    filter: {
      text: "",
      company: "all",
      category: "all",
      size: "all",
    },
  };

  const [filterState, filterDispatch] = useReducer(filterReducer, initialState);

  useEffect(() => {
    let products = JSON.stringify(data);
    products = JSON.parse(products);
    filterDispatch({ type: "LOAD-PRODUCTS", payload: products });
  }, []);

  useEffect(() => {
    filterDispatch({ type: "FILTER-PRODUCTS" });
    filterDispatch({ type: "SORT-PRODUCTS" });
  }, [filterState.filter, filterState.sort]);

  const updateFilter = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "category") value = e.target.textContent;
    if (name === "company") value = e.target.textContent;
    if (name === "size") value = e.target.textContent;
    filterDispatch({ type: "UPDATE-FILTER", payload: { name, value } });
  };

  const updateSort = (e) => {
    let value = e.target.value;
    filterDispatch({ type: "UPDATE-SORT", payload: value });
  };
  const clearFilter = () => {
    filterDispatch({ type: "CLEAR-FILTER" });
  };

  const value = { ...filterState, updateFilter, updateSort, clearFilter };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
