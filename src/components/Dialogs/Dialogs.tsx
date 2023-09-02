import React, {ChangeEvent, FC} from 'react';
import s from './Dialogs.module.css'
import {DialogItem, DialogItemType} from './DialogItem/DialogItem';
import {Message, MessageType} from './Message/Message';
import {DialogsPageType} from '../../redux/store';

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

export const Dialogs: FC<DialogsPropsType> = (props) => {

    let state = props.dialogsPage
    const {dialogs, messages, newMessageBody} = state

    let dialogsElements =
        dialogs.map((el: DialogItemType) => <DialogItem name={el.name} id={el.id}></DialogItem>)

    let messagesElements =
        messages.map((el: MessageType) => <Message message={el.message} id={el.id}></Message>)

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.updateNewMessageBody(body)
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