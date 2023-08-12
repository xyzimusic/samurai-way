import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, state} from './redux/state'
import {rerenderEntireTree} from './render';


rerenderEntireTree(state);
