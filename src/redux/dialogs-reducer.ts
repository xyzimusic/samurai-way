import {ActionsType, DialogsPageType} from './state';

export const SEND_MESSAGE = 'SEND-MESSAGE'
export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
export const dialogsReducer = (state: DialogsPageType, action: ActionsType) => {


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