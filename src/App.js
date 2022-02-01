import logo from './logo.svg';
import './App.css';
import './vars.css';
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Toggle from './Components/Toggle/Toggle';
import { useState, useContext } from 'react'
import { ThemeContext } from './context';
import Portfolio from './Components/Portfolio/Portfolio';
import AnimatedShapes from './Components/AnimatedShapes/AnimatedShapes';

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div style={{ backgroundColor: darkMode ? "black": "white", color: darkMode && "white" }}>
      <Toggle/>
      <Home />
      <About />
      <Portfolio />
      <About />
      <Contact />
      <AnimatedShapes />
    </div>
  );
}

export default App;
