import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {reduxStore} from './redux/redux-store';
import {StoreContext} from './storeContext';

export let rerenderEntireTree = (state: any) => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={reduxStore}>
            <App store={reduxStore}/>
            </StoreContext.Provider>
        </BrowserRouter>
        , document.getElementById('root')
    );
}

rerenderEntireTree(reduxStore.getState())

reduxStore.subscribe(() => {
    rerenderEntireTree(reduxStore.getState())
})