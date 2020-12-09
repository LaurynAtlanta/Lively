import React,{useEffect} from 'react';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import FemaleModels from './pages/femalemodels';
import MaleModels from './pages/malemodels';
import Nav from './components/Navigation/Nav'
import Footer from'./components/Footer/Footer';
import {Route} from 'react-router-dom';
import ScrollToTop from './components/scrollToTop';


function App() {


  return (
    <div className="App">
      <ScrollToTop/>
      <Nav/>
        <Route path='/' exact>
          <Home/>
        </Route>
        <Route path='/men' exact>
          <MaleModels/>
        </Route>
        <Route path='/women' exact>
          <FemaleModels/>
        </Route>
        <Route path='/contact' exact>
          <Contact/>
        </Route>
        <Route path='/about' exact>
          <About/>
        </Route>
      <Footer/>
    </div>
  );
}

export default App;
