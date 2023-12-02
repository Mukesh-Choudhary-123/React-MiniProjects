import React from "react";

const Btn = () => {
  let [moves, setMoves] = useState(0);

  let updateCount = () => {
    moves = moves + 1;
    setMoves(moves);
  };
  return (
    <div className="btn">
      <button onClick={updateCount}>+1</button>
    </div>
  );
};

export default Btn;
