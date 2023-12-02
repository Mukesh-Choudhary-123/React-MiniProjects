import React, { useState } from "react";
import data from "./data";
import Btn from "./Btn";
import "./Color.css";

const Color = () => {
  let [moves, setMoves] = useState({ bule: 0, green: 0 });

  let updateCountB = () => {
    moves.bule = moves.bule + 1;
    setMoves({ ...moves });
  };
  let updateCountG = () => {
    moves.green = moves.green + 1;
    setMoves({ ...moves });
  };
  return (
    <div className="boxs">
      <div className="box-1">
        <p>
          {`${data.first.color1}`} moves = {moves.bule}
        </p>
        <button onClick={updateCountB}>+1</button>
        <p>{`${data.first.titel1}`}</p>
      </div>
      <div className="box-2">
        <p>
          {`${data.second.color2}`} moves = {moves.green}
        </p>
        <button onClick={updateCountG}>+1</button>
        <p>{`${data.second.titel2}`}</p>
      </div>
    </div>
  );
};

export default Color;
