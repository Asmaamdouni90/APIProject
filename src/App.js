import logo from "./logo.svg";
import "./App.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      <h1>Workshop API</h1>
      <Posts />
    </div>
  );
}

export default App;
