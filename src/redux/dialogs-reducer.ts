import {ActionsType, DialogsPageType} from './store';

export const SEND_MESSAGE = 'SEND-MESSAGE'
export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

let initialState: DialogsPageType = {
    dialogs: [
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
    ],
    messages: [
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
    ],
    newMessageBody: ''
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType) => {


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newMessageBody
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 6, message: body})
            return state
        default:
            return state
    }
}

export const sendMessageAC = () => ({
    type: SEND_MESSAGE,

} as const)

export const updateNewMessageBodyAC = (body: string) => ({
    type: UPDATE_NEW_MESSAGE_BODY, newMessageBody: body
} as const)