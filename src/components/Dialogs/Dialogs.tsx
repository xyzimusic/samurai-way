import React, {FC} from 'react';
import s from './Dialogs.module.css'
import {DialogItem, DialogItemType} from './DialogItem/DialogItem';
import {Message, MessageType} from './Message/Message';

type DialogsPropsType = {
    dialogs: DialogItemType[]
    messages: MessageType[]
}

export const Dialogs: FC<DialogsPropsType> = (props) => {

    const {dialogs, messages} = props

    let dialogsElements =
        dialogs.map((el) => <DialogItem name={el.name} id={el.id}></DialogItem>)

    let messagesElements =
        messages.map((el) => <Message message={el.message} id={el.id}></Message>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};
