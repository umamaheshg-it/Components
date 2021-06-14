import "./styles.css";
import NewGreet from "./components/NewGreet";
import Hello from "./components/Hello";
export default function App() {
  return (
    <div className="App">
      <h1>Main Content</h1>
      <NewGreet />
      <Hello />
    </div>
  );
}
