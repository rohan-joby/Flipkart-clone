export const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD-PRODUCTS": {
      const products = action.payload;
      return { ...state, all_products: products, filtered_products: products };
    }
    case "UPDATE-FILTER": {
      const { name, value } = action.payload;
      return { ...state, filter: { ...state.filter, [name]: value } };
    }
    case "FILTER-PRODUCTS": {
      const { all_products } = state;
      const { text, company, category, size } = state.filter;
      if (all_products) {
        let tempFilterProducts = [...all_products];

        if (text) {
          tempFilterProducts = tempFilterProducts.filter((p) =>
            p.title.toLowerCase().startsWith(text)
          );
        }
        if (category !== "all") {
          tempFilterProducts = tempFilterProducts.filter(
            (p) => p.category === category
          );
        }
        if (company !== "all") {
          tempFilterProducts = tempFilterProducts.filter(
            (p) => p.brand === company
          );
        }
        if (size !== "all") {
          tempFilterProducts = tempFilterProducts.filter((p) =>
            p.size.find((s) => s === size)
          );
        }
        return { ...state, filtered_products: tempFilterProducts };
      }
      return;
    }

    case "UPDATE-SORT": {
      return { ...state, sort: action.payload };
    }
    case "SORT-PRODUCTS": {
      const { filtered_products, sort } = state;
      let tempProducts = [...filtered_products];

      if (sort === "price-asc") {
        tempProducts = tempProducts.sort((a, b) => a.price - b.price);
      }
      if (sort === "price-desc") {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);
      }
      if (sort === "name-asc") {
        tempProducts = tempProducts.sort((a, b) =>
          a.title.toLowerCase().localeCompare(b.title.toLowerCase())
        );
      }
      if (sort === "name-desc") {
        tempProducts = tempProducts.sort((a, b) =>
          b.title.toLowerCase().localeCompare(a.title.toLowerCase())
        );
      }
      return { ...state, filtered_products: tempProducts };
    }
    case "CLEAR-FILTER": {
      return {
        ...state,
        filter: {
          ...state.filter,
          text: "",
          company: "all",
          category: "all",
          size: "all",
        },
      };
    }
    default: {
      return { ...state };
    }
  }
};
