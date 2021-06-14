import "./styles.css";
import NewGreet from "./components/NewGreet";
import Welcome from "./components/Welcome";
function App() {
  return (
    <div className="App">
      <h1>Main Content</h1>
      <NewGreet name='Umamahesh' age='36'>
        <p> This is Child</p>
      </NewGreet>
      <NewGreet name='Karthikeya' age='3'>
      <button> This is Child</button>
      </NewGreet>
      <Welcome name="Cygen"/>
    </div>
  );
}

export default App
