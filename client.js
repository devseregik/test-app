// Dependesies
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

// Components
import App from './app/components/App'

// Global store
import films from './app/reducers/films';

const store = createStore(films)

// Mount and render App
render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('app')
)
