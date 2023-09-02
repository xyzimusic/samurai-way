import React, {FC} from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {StoreContext} from '../../storeContext';

type DialogsPropsType = {}

export const DialogsContainer: FC<DialogsPropsType> = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage

                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageAC())
                    }

                    let onNewMessageChange = (body: string) => {
                        store.dispatch(updateNewMessageBodyAC(body))
                    }

                    return (
                        <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
                                 dialogsPage={state}/>
                    )
                }

            }
        </StoreContext.Consumer>
    )
};