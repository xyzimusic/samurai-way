import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css'


export type DialogItemType = {
    id: string
    name: string
}
const DialogItem: FC<DialogItemType> = (props) => {
    const {name, id} = props
    let path = `/dialogs/${id}`
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

export type MessageType = {
    text: string
}
const Message:FC<MessageType> =(props) =>{
    const {text} = props
    return(
        <div className={s.message}>{text}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Dimych'} id="1"></DialogItem>
                <DialogItem name={'Andrey'} id="2"></DialogItem>
                <DialogItem name={'Sveta'} id="3"></DialogItem>
                <DialogItem name={'Sasha'} id="4"></DialogItem>
                <DialogItem name={'Victor'} id="5"></DialogItem>
                <DialogItem name={'Valera'} id="6"></DialogItem>
            </div>
            <div className={s.messages}>
                <Message text={'Hi'}></Message>
                <Message text={'Hi Hi'}></Message>
                <Message text={'How is your it-kavasutra'}></Message>
                <Message text={'yo'}></Message>
            </div>
        </div>
    );
};
