import * as React from "react";
import { Routes, Route, Link} from "react-router-dom"
import './App.css';
import Home from "./pages/home";
import About from "./pages/about";
import SearchBar from "./components/SearchBar/SearchBar";
import TopContainer from "./components/Topcontainer/TopContainer";
import Nav from "./components/Nav";
function App() {
  return (
    
    <div className="App">
      <TopContainer />
      <SearchBar />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
