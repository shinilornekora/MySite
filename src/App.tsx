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
                      <Route path="/home" element={<Resume/>}/>
                      <Route path="/home" element={<Projects/>}/>
                      <Route path="/home" element={<Blog/>}/>
                      <Route path="/home" element={<Books/>}/>
                  </Routes>
              </BrowserRouter>
          </div>
          <Footer/>
      </div>
  );
}

export default App;
