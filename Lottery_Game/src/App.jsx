import "./App.css";
import Lottery from "./assets/Lottery";

function App() {
  return (
    <>
      <Lottery n={3} isWinning={15} />
    </>
  );
}

export default App;
