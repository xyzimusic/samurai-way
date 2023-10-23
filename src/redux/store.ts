import {DialogItemType} from '../components/Dialogs/DialogItem/DialogItem';
import {MessageType} from '../components/Dialogs/Message/Message';
import {PostPropsType} from '../components/Profile/MyPosts/Post/Post';
import {addPostAC, profileReducer, updateNewPostTextAC} from './profile-reducer';
import {dialogsReducer, sendMessageAC, updateNewMessageBodyAC} from './dialogs-reducer';
import {sideBarReducer} from './sidebar-reducer';
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC, UserType} from './users-reducer';

let rerenderEntireTree = (state: StateType) => {
    console.log('store changed')
}

export type ProfilePageType = {
    posts: PostPropsType[]
    newPostText: string
}

export type SideBarType = {}
export type  DialogsPageType = {
    dialogs: DialogItemType[]
    messages: MessageType[]
    newMessageBody: string
}

export type UsersPage = {
    users: UserType[]
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBar: SideBarType
    usersPage: UsersPage
}

/**
 * BLL - Business Logic Layer
 */

let dialogs: DialogItemType[] =
    [
        {
            id: 1,
            name: 'Dymich'
        }
        ,
        {
            id: 2,
            name: 'Andrew'
        }
        ,
        {
            id: 3,
            name: 'Sveta'
        }
        ,
        {
            id: 4,
            name: 'Sasha'
        }
        ,
        {
            id: 5,
            name: 'Victor'
        }
        ,
        {
            id: 6,
            name: 'Valera'
        }
    ]

let posts: PostPropsType[] =
    [
        {
            id: 1,
            message: 'hello, How r u ?',
            likesCount: 11
        }
        ,
        {
            id: 2,
            message: 'Its my first post',
            likesCount: 12
        }
    ]

let messages: MessageType[] =
    [
        {
            id: 1,
            message: 'Hi!!!'
        }
        ,
        {
            id: 2,
            message: 'Hello, bro <3'
        }
        ,
        {
            id: 3,
            message: 'How is your day?'
        }
        ,
        {
            id: 4,
            message: 'YOiu'
        }
        ,
        {
            id: 5,
            message: 'Yo'
        }
        ,
        {
            id: 6,
            message: 'Yo'
        }
    ]

export const subcribe = (observer: () => void) => {
    rerenderEntireTree = observer
}

export type StoreType = {
    _state: StateType,
    addPost: () => void
    updateNewPostText: (newPostTitle: string) => void
    subscribe: (observer: any) => void
    getState: () => StateType
    _callSubscriber: () => void
    dispatch: (action: ActionsType) => void
}

export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>
export type UpdateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyAC>
export type SendMessageActionType = ReturnType<typeof sendMessageAC>
export type FollowActionType = ReturnType<typeof followAC>
export type UnFollowActionType = ReturnType<typeof unfollowAC>
export type SetUsersACActionType = ReturnType<typeof setUsersAC>
export type setCurrentPageACActionType = ReturnType<typeof setCurrentPageAC>
export type setTotalUsersCountACActionType = ReturnType<typeof setTotalUsersCountAC>

export type ActionsType = AddPostActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageBodyActionType
    | SendMessageActionType
    | FollowActionType
    | UnFollowActionType
    | SetUsersACActionType
    | setCurrentPageACActionType
    | setTotalUsersCountACActionType

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [...posts],
            newPostText: 'it-kama'
        },
        dialogsPage: {
            dialogs: [...dialogs],
            messages: [...messages],
            newMessageBody: ''
        },
        sideBar: {},
        usersPage: {
            users: []
        }
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    getState() {
        return this._state
    },

    _callSubscriber() {
        console.log('store changed')
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber()
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber()
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sideBar = sideBarReducer(this._state.sideBar, action)

        this._callSubscriber()
    }
}