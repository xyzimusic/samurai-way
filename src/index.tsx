import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {DialogItemType} from './components/Dialogs/DialogItem/DialogItem';
import {PostPropsType} from './components/Profile/MyPosts/Post/Post';
import {MessageType} from './components/Dialogs/Message/Message';

/**
 * BLL - bussines logical layer
 */
let dialogs: DialogItemType[] =
    [
        {
            id: 1,
            name: 'Dymich'
        }
        ,
        {
            id: 2,
            name: 'Andrew'
        }
        ,
        {
            id: 3,
            name: 'Sveta'
        }
        ,
        {
            id: 4,
            name: 'Sasha'
        }
        ,
        {
            id: 5,
            name: 'Victor'
        }
        ,
        {
            id: 6,
            name: 'Valera'
        }
    ]

let posts: PostPropsType[] =
    [
        {
            id: 1,
            message: 'hello, How r u ?',
            likesCount: 11
        }
        ,
        {
            id: 2,
            message: 'Its my first post',
            likesCount: 12
        }
    ]

let messages: MessageType[] =
    [
        {
            id: 1,
            message: 'Hi!!!'
        }
        ,
        {
            id: 2,
            message: 'Hello, bro <3'
        }
        ,
        {
            id: 3,
            message: 'How is your day?'
        }
        ,
        {
            id: 4,
            message: 'YOiu'
        }
        ,
        {
            id: 5,
            message: 'Yo'
        }
        ,
        {
            id: 6,
            message: 'Yo'
        }
    ]

ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>
    ,
    document.getElementById('root')
);