import React, {FC} from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';


export type DialogItemType = {
    id: number
    name: string
}
export const DialogItem: FC<DialogItemType> = (props) => {
    const {name, id} = props
    let path = `/dialogs/${id}`
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}