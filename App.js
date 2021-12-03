import "./App.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Category from "./components/Category";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Carousel } from "bootstrap";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Carousel/>
        <Category/>
      </Router>
    </div>
  );
}

export default App;
