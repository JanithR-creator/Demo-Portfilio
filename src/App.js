import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Notfound from "./components/Notfound";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import About from "./components/About";
import Experiences from "./components/Experiences";

function App() {
  return (
      <Router>
          <div>
              <Navbar/>
          </div>
          <div>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/Experiences" element={<Experiences/>}/>
                  <Route path="/About-me" element={<About/>}/>
                  <Route path="/Contact" element={<Contact/>}/>
                  <Route path="/Portfolio" element={<Portfolio/>}/>
                  <Route path="*" element={<Notfound/>}/>
              </Routes>
          </div>
      </Router>
  );
}

export default App;
