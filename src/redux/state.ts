import {DialogItemType} from '../components/Dialogs/DialogItem/DialogItem';
import {MessageType} from '../components/Dialogs/Message/Message';
import {PostPropsType} from '../components/Profile/MyPosts/Post/Post';


let rerenderEntireTree = (state: StateType) => {
    console.log('state changed')
}

export type ProfilePageType = {
    posts: PostPropsType[]
    newPostText: string
}
export type  DialogsPageType = {
    dialogs: DialogItemType[]
    messages: MessageType[]
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
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

export let state: StateType = {
    profilePage: {
        posts: [...posts],
        newPostText: 'it-kama'
    },
    dialogsPage: {
        dialogs: [...dialogs],
        messages: [...messages],
    }
}

export const addPost = () => {

    let newPost: PostPropsType = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''

    rerenderEntireTree(state)
}

export const updateNewPostText = (newPostTitle: string) => {

    state.profilePage.newPostText = newPostTitle

    rerenderEntireTree(state)
}

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
export type ActionsType = AddPostActionType
    | UpdateNewPostTextActionType
export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [...posts],
            newPostText: 'it-kama'
        },
        dialogsPage: {
            dialogs: [...dialogs],
            messages: [...messages],
        }
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    getState() {
        return this._state
    },

    _callSubscriber() {
        console.log('state changed')
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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        }

    }
}
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const addPostAC = (newPostText:string)=>({
    type: ADD_POST,
    postText: newPostText
} as const)

export const updateNewPostTextAC =(text:string)=>({
    type: UPDATE_NEW_POST_TEXT, newText: text
}as const)