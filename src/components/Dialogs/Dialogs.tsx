import React, {ChangeEvent, FC} from 'react';
import s from './Dialogs.module.css'
import {DialogItem, DialogItemType} from './DialogItem/DialogItem';
import {Message, MessageType} from './Message/Message';
import {
    ActionsType,
    DialogsPageType, StateType,
    store, StoreType,
} from '../../redux/store';
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';

type DialogsPropsType = {
    // dialogsPage?: DialogsPageType
    // dispatch?: (action: ActionsType) => void
    store: any
}



export const Dialogs: FC<DialogsPropsType> = (props) => {

    // const {dialogsPage, dispatch, store} = props
    const {store} = props
    let state = store.getState().dialogsPage
    const {dialogs, messages, newMessageBody} = state

    let dialogsElements =
        dialogs.map((el: DialogItemType) => <DialogItem name={el.name} id={el.id}></DialogItem>)

    let messagesElements =
        messages.map((el: MessageType) => <Message message={el.message} id={el.id}></Message>)


    let onSendMessageClick = () => {
        store.dispatch(sendMessageAC())
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        store.dispatch(updateNewMessageBodyAC(text))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange}
                                   placeholder="enter your message"></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
