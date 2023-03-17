import { HashRouter, Routes, Route } from 'react-router-dom'
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
            <a className="nav-link" href='/about'>About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href='/contact'>Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href='/blog'>Blog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href='/projects'>Project</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href='/resume'>Resume</a>
          </li>
        </ul>
      </header>

      <div className="App">
{/* hash router for less static pages and brower router for more dynamic pages */}
        <HashRouter>
          <Routes>
            <Route path='/about' element={<About />} />
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
