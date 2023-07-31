import React from 'react';
import './App.css';
import {Dialogs} from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route} from 'react-router-dom';

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route component={Dialogs} path='/dialogs'/>
                <Route component={Profile} path='/profile'/>
                <Route component={Profile} path='/news'/>
                <Route component={Profile} path='/music'/>
            </div>
            {/*<Profile/>*/}
        </div>
    );
}


export default App;