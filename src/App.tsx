import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './style/app.css'
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Resume from "./components/resume";
import Projects from "./components/projects";
import Blog from "./components/blog";
import Books from "./components/books";
function App() {
  return (
      <div className="App">
          <div className="content">
              <BrowserRouter>
                  <Header/>
                  <Routes>
                      <Route path="/" element={<Home/>}/>
                      <Route path="/home" element={<Home/>}/>
                      <Route path="/resume" element={<Resume/>}/>
                      <Route path="/projects" element={<Projects/>}/>
                      <Route path="/blog" element={<Blog/>}/>
                      <Route path="/books" element={<Books/>}/>
                  </Routes>
              </BrowserRouter>
          </div>
          <Footer/>
      </div>
  );
}

export default App;
