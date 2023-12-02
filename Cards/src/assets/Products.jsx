import React from "react";
import "./Products.css";
import Product from "./product";
function Products() {
  let styles = {
    display: "flex",
    flexWrap: "Wrap",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={styles}>
      <Product titel="Logitech MX MAster" idx={0} />
      <Product titel="Apple Pencil (2nd Gen)" idx={1} />
      <Product titel="Zebronics Zeb-transformer" idx={2} />
      <Product titel="Pentronics Toad 23576" idx={3} />
    </div>
  );
}
export default Products;
