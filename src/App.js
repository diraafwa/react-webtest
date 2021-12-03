import "./App.css";
import Navbar from "./components/Nav/index";
import Carousel from "./components/Carousel";
import Category from "./components/Category";
import Listprod from "./components/listprod";
// import Footer from "./components/footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Carousel } from "bootstrap";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Carousel/>
        <Category/>
        <Listprod/>
        
      </Router>
    </div>
  );
}

export default App;
