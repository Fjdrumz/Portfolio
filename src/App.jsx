import React from 'react';
import './App.css'
import NavBar from './components/NavBar';
import AboutMePage from './components/AboutMePage';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import MyExperience from './components/MyExperience';


function App() {

  return (
    <div className="App">
     <NavBar />
     <AboutMePage />
     <Services />
      <Portfolio />
      <MyExperience />
    </div>
  );
}

export default App
