export default function Price({ oldPrice, newPrice }) {
  let oldStyles = {
    textDecoration: "line-through",
  };
  let newStyles = {
    fontWeight: "bold",
  };
  let st = {
    backgroundColor: "#e0c367",
    height: "34px",
    width: "150px",
    borderBottomLeftRadius: "16px",
    borderBottomRightRadius: "16px",
  };
  return (
    <div style={st}>
      <span style={oldStyles}>{oldPrice}</span>
      &nbsp;&nbsp;&nbsp; <span style={newStyles}>{newPrice}</span>
    </div>
  );
}
