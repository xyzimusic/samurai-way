import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {DialogItemType} from './components/Dialogs/DialogItem/DialogItem';
import {PostPropsType} from './components/Profile/MyPosts/Post/Post';
import {MessageType} from './components/Dialogs/Message/Message';
import {state} from './redux/state'


ReactDOM.render(
    <App state={state}/>
    ,
    document.getElementById('root')
);