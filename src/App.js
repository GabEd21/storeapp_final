import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './pages/About';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
