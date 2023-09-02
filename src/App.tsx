import React, {FC} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import {reduxStore} from './redux/redux-store';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';

type AppPropsType = {
    store: any
}
const App: FC<AppPropsType> = (props) => {
    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                {/*<Route component={Dialogs} path="/dialogs"/>*/}
                {/*<Route component={Profile} path="/profile"/>*/}
                <Route render={() => <DialogsContainer store={reduxStore}/>} path="/dialogs"/>
                <Route render={() => <Profile store={reduxStore}/>} path="/profile"/>
            </div>
        </div>
    );
}

export default App;