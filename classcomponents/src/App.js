import "./styles.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
export default function App() {
  return (
    <div className="App">
      <h1>Class Components</h1>
      <Greet />
      <Welcome />
    </div>
  );
}
