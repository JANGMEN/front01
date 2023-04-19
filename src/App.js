
import './App.css';

import Home from './components/Home'
import Board from './components/Board'
import About from './components/About'
import {Link, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div>
        <div>
          <Link to="/">Home</Link> /
          <Link to="/about">About</Link> /
          <Link to="/board">Board</Link>
        </div>
        <hr />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/board" element={<Board/>} />
        </Routes>
    </div>
  );
}

export default App;
