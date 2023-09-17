import {combineReducers, createStore} from 'redux';
import {sideBarReducer} from './sidebar-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {profileReducer} from './profile-reducer';
import {StateType} from './store';
import {usersReducer} from './users-reducer';

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sideBarReducer,
    usersPage: usersReducer
})

export type AppStateStoreType = ReturnType<typeof rootReducer>

// export type ReduxStoreType = {
//     _state: StateType,
//     addPost: () => void
//     updateNewPostText: (newPostTitle: string) => void
// }

export let reduxStore = createStore(rootReducer)