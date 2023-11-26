import './App.css';
import Nav from "./componts/nav";
import Home from "./componts/Home";
import About from "./componts/About";
import Skill from "./componts/Skill";
import Certificate from "./componts/Image/certificate";
import Project from "./componts/Project";
import Contact from "./componts/Contact";
function App() {
  return ( 
   <>
   <Nav></Nav>
   <Home/>
   <About></About>
   <Skill/>
   <Certificate/>
    <Project/>
    <Contact/>
   </>
  );
}

export default App;
