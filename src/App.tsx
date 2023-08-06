import React, {FC} from 'react';
import './App.css';
import {Dialogs} from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import {PostPropsType} from './components/Profile/MyPosts/Post/Post';
import {DialogItemType} from './components/Dialogs/DialogItem/DialogItem';
import {MessageType} from './components/Dialogs/Message/Message';


type AppPropsType = {
    posts: PostPropsType[]
    dialogs: DialogItemType[]
    messages: MessageType[]
}
const App: FC<AppPropsType> = (props) => {
    const {posts, dialogs, messages} = props

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    {/*<Route component={Dialogs} path="/dialogs"/>*/}
                    {/*<Route component={Profile} path="/profile"/>*/}
                    <Route render={() => <Dialogs dialogs={dialogs} messages={messages}/>} path="/dialogs"/>
                    <Route render={() => <Profile posts={posts}/>} path="/profile"/>
                </div>
            </div>

        </BrowserRouter>
    );
}


export default App;