import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import React from "react";

// import NavBar from './components/NavBar'
import About from './components/About';
import Contact from './components/Contact'
import Blog from './components/Blog'
import Projects from './components/Projects'

function App() {
  return (
    <>
      <header className='navbarHeader'>Andrew Young
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link" to='/'>About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/contact'>Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/blog'>Blog</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/projects'>Project</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/resume'>Resume</Link>
          </li>
        </ul>
      </header>

      <div className="App">
{/* hash router for less static pages and brower router for more dynamic pages */}
        <HashRouter>
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/Projects' element={<Projects />} />
          </Routes>
        </HashRouter>


      </div>
    </>

  );
}

export default App;
