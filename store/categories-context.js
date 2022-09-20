import React from "react";

const CategoriesContext = React.createContext({
  categories: [],
  handleCategories: () => { }
});

export default CategoriesContext;