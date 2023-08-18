import React, {FC} from 'react';
import './App.css';
import {Dialogs} from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import {ActionsType, StateType, store, StoreType} from './redux/state';


type AppPropsType = {
    state: StateType
    dispatch: (action: ActionsType) => void
    store:StoreType
}
const App: FC<AppPropsType> = (props) => {
    const {state, dispatch} = props
    const {profilePage, dialogsPage} = state

    return (

            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    {/*<Route component={Dialogs} path="/dialogs"/>*/}
                    {/*<Route component={Profile} path="/profile"/>*/}
                    <Route render={() => <Dialogs store={store}  />} path="/dialogs" />
                    <Route render={() => <Profile profilePage={profilePage} dispatch={dispatch}/>} path="/profile"/>
                </div>
            </div>

    );
}


export default App;