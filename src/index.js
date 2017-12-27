import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import TimersDashboard from './js/TimersDashboard'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TimersDashboard />, document.getElementById('root'));
registerServiceWorker();
