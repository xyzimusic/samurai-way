import React, {FC} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPageType} from '../../redux/state';

type DialogsPropsType = {
    dialogsPage: DialogsPageType
}

export const Dialogs: FC<DialogsPropsType> = (props) => {
    const {dialogsPage} = props
    const {dialogs, messages} = dialogsPage

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
