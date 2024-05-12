/*Import react dependecies here*/
import   React from 'react';
import {Routes, Route} from 'react-router-dom';


/*Import the css components here*/
import './App.css';

// Import your pages file for styling
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Research from './pages/Research';
//import { Footer } from './components/Footer';
//import { Header } from './components/Header';




function App() {


  return (
    <>
    
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/team' element={<Team />}/>
          <Route path='/services' element={<Services />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/research' element={<Research />}/>
      </Routes>
     
      
    </>

  );
}

export default App;