import "./App.css";
import Calculator from "./components/Calculator";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Calculator></Calculator>
    </div>
  );
}

export default App;
