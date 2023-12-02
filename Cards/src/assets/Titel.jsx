import React from "react";
import "./Titel.css";

function Titel({ info }) {
  let color = { color: "red" };
  return (
    <div className="iamHeader">
      <h1 style={color}>
        HELLO, I'AM CODER : {info} & MY COLOR IS : {color.color}
      </h1>
    </div>
  );
}

export default Titel;
