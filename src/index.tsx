import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {reduxStore} from './redux/redux-store';

export let rerenderEntireTree = (state: any) => {
    ReactDOM.render(
        <BrowserRouter><App store={reduxStore}/></BrowserRouter>
        , document.getElementById('root')
    );
}

rerenderEntireTree(reduxStore.getState())

reduxStore.subscribe(() => {
    rerenderEntireTree(reduxStore.getState())
})