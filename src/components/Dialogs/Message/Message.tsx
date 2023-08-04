import React, {FC} from 'react';
import s from '../Dialogs.module.css';

export type MessageType = {
    id: number
    message: string
}

export const Message: FC<MessageType> = (props) => {
    const {message, ...restProps} = props
    return (
        <div className={s.message}>{message}</div>
    )
}