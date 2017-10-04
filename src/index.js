import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App.js';
import reducer from './reducers';

const strore = createStore(reducer)

ReactDOM.render(
    < Provider store={strore}>
        < App />
    </Provider>,
    document.querySelector('#root')
);