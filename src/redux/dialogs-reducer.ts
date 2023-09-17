import {ActionsType, DialogsPageType} from './store';
import {DialogItemType} from '../components/Dialogs/DialogItem/DialogItem';
import {MessageType} from '../components/Dialogs/Message/Message';

export const SEND_MESSAGE = 'SEND-MESSAGE'
export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

let initialState = {
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
    ] as DialogItemType[],
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
    ] as  MessageType[],
    newMessageBody: ''
}

export type InitialStateType = typeof initialState

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionsType):InitialStateType => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.newMessageBody
            }
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            }
        }
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