import React from 'react';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import Nav from './components/Navigation/Nav'
import Footer from'./components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      {/* <Home/> */}
      {/* <Contact/> */}
      <About/>
      {/* do media queries */}
      <Footer/>
    </div>
  );
}

export default App;
