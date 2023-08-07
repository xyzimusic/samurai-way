import {DialogItemType} from '../components/Dialogs/DialogItem/DialogItem';
import {MessageType} from '../components/Dialogs/Message/Message';
import {PostPropsType} from '../components/Profile/MyPosts/Post/Post';

export type ProfilePageType = {
    posts: PostPropsType[]
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
    },
    dialogsPage: {
        dialogs: [...dialogs],
        messages: [...messages],
    }
}

export const addPost = (newPostTitle:string) => {

    let newPost:PostPropsType = {
        id:5,
        message:newPostTitle,
        likesCount:0
    }
    state.profilePage.posts.push(newPost)
}