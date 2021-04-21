import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from "./Routes";



function App() {
  return (
    <Router>
   <Routes />
   </Router>

  );
}

export default App;
