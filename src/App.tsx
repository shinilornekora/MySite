import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./style/tokens.css";
import "./style/app.css";
import "./style/studio.css";
import Shell from "./components/Shell";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Studio from "./pages/Studio";
import Work from "./pages/Work";

function App() {
  return (
    <Shell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/studio/:slug" element={<Studio />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Navigate to="/" replace={true} />} />
        <Route path="/projects" element={<Navigate to="/work" replace={true} />} />
        <Route path="/resume" element={<Navigate to="/" replace={true} />} />
        <Route path="/blog" element={<Navigate to="/" replace={true} />} />
        <Route path="/books" element={<Navigate to="/" replace={true} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Shell>
  );
}

export default App;
