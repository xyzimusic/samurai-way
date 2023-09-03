import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {reduxStore} from './redux/redux-store';
import {Provider} from 'react-redux';

export let rerenderEntireTree = (state: any) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={reduxStore}>
                <App/>
            </Provider>
        </BrowserRouter>
        , document.getElementById('root')
    );
}

rerenderEntireTree(reduxStore.getState())

reduxStore.subscribe(() => {
    rerenderEntireTree(reduxStore.getState())
})