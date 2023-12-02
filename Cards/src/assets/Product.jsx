import React from "react";
import Price from "./Price";
import "./Product.css";
function Product({ titel, idx }) {
  let oldPrices = ["12,495", "11,900", "1,559", "599"];
  let newPrices = ["8,999", "9,200", "899", "280"];
  let description = [
    ["8,000 DPI", "5 Programmable buttons"],
    ["intutive surface", "designed for iPad Pro"],
    ["designed for iPad ", "Pro special for buttons"],
    ["wireless", "optical orientation surface"],
  ];
  return (
    <div className="product">
      <h4>{titel}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <p>{description[idx][2]}</p>
      <p>{description[idx][3]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}

export default Product;
