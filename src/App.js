import React from 'react';
import Home from './pages/home';
import Nav from './components/Navigation/Nav'
import Footer from'./components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      {/* do media queries */}
      <Footer/>
    </div>
  );
}

export default App;
