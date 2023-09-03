import {combineReducers, createStore} from 'redux';
import {sideBarReducer} from './sidebar-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {profileReducer} from './profile-reducer';
import {StateType} from './store';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sideBarReducer
})

export type ReduxStoreType = {
    _state: StateType,
    addPost: () => void
    updateNewPostText: (newPostTitle: string) => void
}

export let reduxStore = createStore(reducers)