import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Particles from "react-particles-js";
import BottomBar from './components/bottom-component/bottom-component';
import MyParticles from './components/myparticles-component/myparticles-component';

ReactDOM.render(<App />,document.getElementById('header'));
ReactDOM.render(<MyParticles/>,document.getElementById('root'));
ReactDOM.render(<BottomBar/>,document.getElementById('bottom-bar'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
