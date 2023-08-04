import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem, DialogItemType} from './DialogItem/DialogItem';
import {Message, MessageType} from './Message/Message';

export const Dialogs = (props:any) => {

    /**
     * BLL - bussines logical layer
     */
    let dialogs: DialogItemType[] =
        [
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
        ]

    let dialogsElements =
        dialogs.map((el) => <DialogItem name={el.name} id={el.id}></DialogItem>)

    let messages: MessageType[] =
        [
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
        ]

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
