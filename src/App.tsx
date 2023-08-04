import React from 'react';
import './App.css';
import {Dialogs} from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';


const App = (props: any) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    {/*<Route component={Dialogs} path="/dialogs"/>*/}
                    {/*<Route component={Profile} path="/profile"/>*/}

                    <Route render={() => <Dialogs/>} path="/dialogs"/>
                    <Route render={() => <Profile/>} path="/profile"/>

                </div>
                {/*<Profile/>*/}
            </div>

        </BrowserRouter>
    );
}


export default App;