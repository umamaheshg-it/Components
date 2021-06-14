import "./styles.css";
import Greet from "./components/Greet";
import NewGreet from "./components/NewGreet";
export default function App() {
  return (
    <div className="App">
      <h1>Main Content</h1>
      <Greet />
      <NewGreet />
    </div>
  );
}
