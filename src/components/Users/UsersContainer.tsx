import React from 'react';
import {connect} from 'react-redux';
import {Users} from './Users';
import {followAC, setUsersAC, unfollowAC, UserType} from '../../redux/users-reducer';
import {AppStateStoreType} from '../../redux/redux-store';
import {Dispatch} from 'redux';

export type UsersPropsType = MapStatePropsType | mapDispatchPropsType
type MapStatePropsType = {
    users: UserType[]
}

// тут передаем дочерней компоненте стейт наш
const mapStateToProps = (state: AppStateStoreType): MapStatePropsType => {

    return {
        users: state.usersPage.users
    }
}

type mapDispatchPropsType = {
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: UserType[]) => void,
}

// тут передаем дочерней компоненте колбеки
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)