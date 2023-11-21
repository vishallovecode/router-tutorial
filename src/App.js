
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./component/navbar";
import Home from "./component/Home";
import AboutUs from "./component/about-us";
import Services from "./component/services";
import Contact from "./component/contact";
import Login from "./component/login";


export default function App() {
  return (
    <div className="App">
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path = 'about-us' element= {<AboutUs/>}/>
          <Route path="services" element={<Services />} />
          <Route path = 'contact' element= {<Contact/>}/>
          <Route path="login" element={<Login  />} />
          
        </Routes>
    </div>
  );
}

// npm install react-router-doms
