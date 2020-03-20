import React from 'react';
import './App.css';
import Title from './components/title-component/title-component.jsx';
import BottomBar from './components/bottom-component/bottom-component';



function App() {
  return (
    <div>
      <Title />
      <a href='#bottom-section'>Goto bottom bar</a>
      <p id="bottom-section"></p>
      <BottomBar/>     
    </div>
    );
  }
  export default App;
  
  
  
  
  // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       Edit <code>src/App.js</code> and save to reload.
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a>
  //   </header>
  // </div>




