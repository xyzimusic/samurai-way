import React from 'react';
import {connect} from 'react-redux';
import {Users} from './Users';
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC, UserType} from '../../redux/users-reducer';
import {AppStateStoreType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import {UsersC} from './UsersС';
import {stat} from 'fs';

export type UsersPropsType = MapStatePropsType | mapDispatchPropsType
type MapStatePropsType = {
    users: UserType[],
    pageSize:number,
    totalUsersCount:number,
    currentPage:number
}

// тут передаем дочерней компоненте стейт наш
const mapStateToProps = (state: AppStateStoreType): MapStatePropsType => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
    }
}

type mapDispatchPropsType = {
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: UserType[]) => void,
    setCurrentPage: (pageNumber:number)=>void
    setTotalUsersCount: (TotalUsersCount:number)=>void

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
        },
        setCurrentPage:(pageNumber:number)=>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount:(TotalUsersCount:number)=>{
            dispatch(setTotalUsersCountAC(TotalUsersCount))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)