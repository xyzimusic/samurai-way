import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, state, StateType, subcribe, updateNewPostText} from './redux/state'

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText = {updateNewPostText}/>
        , document.getElementById('root')
    );
}

rerenderEntireTree()

subcribe(rerenderEntireTree)


