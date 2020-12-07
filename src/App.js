import React from 'react';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import FemaleModels from './pages/femalemodels';
import MaleModels from './pages/malemodels';
import Nav from './components/Navigation/Nav'
import Footer from'./components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      {/* <Contact/> */}
      {/* <About/> */}
      {/* <MaleModels/> */}
      {/* <FemaleModels/> */}
      {/* do media queries */}
      <Footer/>
    </div>
  );
}

export default App;
