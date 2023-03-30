import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>  
      <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/about" element = {<About />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App