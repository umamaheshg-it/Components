import "./styles.css";
//import NameList from "./components/NameList";
//ort Styles from "./components/Styles";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Styles from "./components/Styles";
function App() {
  return (
    <div className="App">
      <Styles primary={true} />
      <Inline />
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
    </div>
  );
}

export default App;
