import React, {useState} from 'react';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import FemaleModels from './pages/femalemodels';
import SingleModel from './pages/singleModel';
import MaleModels from './pages/malemodels';
import Nav from './components/Navigation/Nav'
import Footer from'./components/Footer/Footer';
import {Route} from 'react-router-dom';
import ScrollToTop from './components/scrollToTop';


function App() {
 let [selectedModel, setSelectedModel] = useState(null);

  return (
    <div className="App">
      <ScrollToTop/>
      <Nav/>
        <Route path='/' exact>
          <Home/>
        </Route>
        <Route path='/Men' exact>
          <MaleModels setModel={setSelectedModel} />
        </Route>
        <Route path='/Men/:id' exact>
          <SingleModel name={selectedModel} />
        </Route>
        <Route path='/Women' exact>
          <FemaleModels setModel={setSelectedModel} />
        </Route>
        <Route path='/Women/:id' exact>
          <SingleModel name={selectedModel} />
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
