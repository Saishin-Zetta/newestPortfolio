import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import React from "react";

import NavBar from './components/NavBar'
import About from './components/About';
import Contact from './components/Contact'
import Blog from './components/Blog'
import Projects from './components/Projects'

function App() {
  return (
    <>
      <header>Andrew Young's Portfolio</header>

      <div className="App">

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<NavBar />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/Projects' element={<Projects />} />
          </Routes>
        </BrowserRouter>

      </div>

      <footer>Here's my footer</footer>
    </>

  );
}

export default App;
