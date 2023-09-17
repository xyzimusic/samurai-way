import React, {FC} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import { Users } from './components/Users/Users';
import { UsersContainer } from './components/Users/UsersContainer';


type AppPropsType = {}
const App: FC<AppPropsType> = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                {/*<Route component={Dialogs} path="/dialogs"/>*/}
                {/*<Route component={Profile} path="/profile"/>*/}
                <Route render={() => <DialogsContainer/>} path="/dialogs"/>
                <Route render={() => <Profile/>} path="/profile"/>
                <Route render={() => <UsersContainer/>} path="/users"/>
            </div>
        </div>
    );
}

export default App;