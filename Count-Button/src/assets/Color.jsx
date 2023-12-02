import React, { useState } from "react";
import data from "./data";
import "./Color.css";

const Color = () => {
  let [moves, setMoves] = useState({ bule: 0, green: 0 });

  let updateCountB = () => {
    moves.bule = moves.bule + 1;
    setMoves({ ...moves });
  };

  let [arr, setarr] = useState([0]);

  let updateCountG = () => {
    arr[0] = arr[0] + 1;
    setarr({ ...arr });
    console.log(arr);
  };

  return (
    <>
      <div className="heading">
        <h2>Using :</h2>
        <h3 className="state1">Object & State</h3>
        <h3 className="state2">Array & State</h3>
      </div>
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
            {`${data.second.color2}`} moves = {arr[0]}
          </p>
          <button onClick={updateCountG}>+1</button>
          <p>{`${data.second.titel2}`}</p>
        </div>
      </div>
    </>
  );
};

export default Color;
