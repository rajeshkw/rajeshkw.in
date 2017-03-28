import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-93524191-1');
ReactDOM.render(<App/>, document.getElementById('app'));
