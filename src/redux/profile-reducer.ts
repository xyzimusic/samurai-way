import {ActionsType, ProfilePageType} from './store';

export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState: ProfilePageType = {
    posts: [
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
    ],
    newPostText: 'it-kama'
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        }
        default:
            return state
    }
}

export const addPostAC = () => ({
    type: ADD_POST,
} as const)

export const updateNewPostTextAC = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
} as const)