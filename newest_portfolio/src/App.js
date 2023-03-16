import { BrowserRouter, Routes, Route } from 'react-router-dom'
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

        <BrowserRouter>
          <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/Projects' element={<Projects />} />
          </Routes>
        </BrowserRouter>

      
      </div>
      <footer className="bg-dark text-center text-white footer">

        <div className="container p-4 pb-0">

          <section className="mb-4">

            <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/andrewyoung32/" role="button"
            ><i className="fab fa-facebook-f"></i>LinkedIn</a>


            <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/Saishin-Zetta" role="button"
            ><i className="fab fa-twitter"></i>Github</a>


            <a className="btn btn-outline-light btn-floating m-1" href="https://vanderbilt.bootcampcontent.com/andrewy3295-vnKuTb" role="button"
            ><i className="fab fa-google"></i>Gitlab</a>


            <a className="btn btn-outline-light btn-floating m-1" href="https://www.youtube.com/" role="button"
            ><i className="fab fa-instagram"></i>Youtube</a>

          </section>

        </div>



        <div className="text-center p-3" >
          © 2023 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/"> Andrew's Portfolio</a>
        </div>

      </footer>
    </>

  );
}

export default App;
