import React, {FC} from 'react';
import './App.css';
import {Dialogs} from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import {StateType} from './redux/state';



type AppPropsType = {
  state:  StateType
}
const App: FC<AppPropsType> = (props) => {
    const {state} = props
    const {profilePage, dialogsPage} = state

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    {/*<Route component={Dialogs} path="/dialogs"/>*/}
                    {/*<Route component={Profile} path="/profile"/>*/}
                    <Route render={() => <Dialogs dialogsPage={dialogsPage}/>} path="/dialogs"/>
                    <Route render={() => <Profile profilePage={profilePage}/>} path="/profile"/>
                </div>
            </div>

        </BrowserRouter>
    );
}


export default App;