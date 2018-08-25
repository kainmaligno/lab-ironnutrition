import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import foods from './foods.js';
foods.forEach((element) => {
    element.show=true;
})
ReactDOM.render(<App foods={foods}/>, document.getElementById('root'));
registerServiceWorker();
