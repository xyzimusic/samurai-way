import React, {FC} from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';

type DialogsPropsType = {
    store: any
}

export const DialogsContainer: FC<DialogsPropsType> = (props) => {

    const {store} = props
    let state = store.getState().dialogsPage

    let onSendMessageClick = () => {
        store.dispatch(sendMessageAC())
    }

    let onNewMessageChange = (body: string) => {
        store.dispatch(updateNewMessageBodyAC(body))
    }

    return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
};