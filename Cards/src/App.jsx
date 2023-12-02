import "./App.css";
import Products from "./assets/Products";

function something() {
  return console.log("i am here !");
}

function App() {
  let st = {
    marginTop: "20px",
    borderColor: "black",
  };
  return (
    <>
      <h2>BlockBuster Deals | Shop Now</h2>
      <Products />
      <button style={st} onClick={something}>
        ADD to Cart
      </button>
    </>
  );
}

export default App;
