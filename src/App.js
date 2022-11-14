import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Main from "./Components/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" elements={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
