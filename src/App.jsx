/*Import react dependecies here*/
import   React from 'react';
import {Routes, Route} from 'react-router-dom';


/*Import the css components here*/
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Research from './pages/Research';
import Career from './pages/Career';


function App() {
  
  return (
    <>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/careers' element={<Career />} />
          <Route path='/services' element={<Services />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/research' element={<Research />}/>
      </Routes>
    </>

  );
}

export default App;