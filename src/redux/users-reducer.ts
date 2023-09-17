import {ActionsType} from './store';

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET_USERS'

export type InitialStateType = {
    users: UserType[]
}

let initialState: InitialStateType = {
    users: [
        {
            id: 1,
            photoUrl: 'https://kokoroplanner.com/wp-content/uploads/2019/07/iconfinder_woman5_2758862-150x150.png',
            followed: true,
            fullName: 'Ilya S.',
            status: 'wake up!',
            location: {
                city: 'Minsk',
                country: 'Belarus'
            }
        }
        ,
        {
            id: 2,
            photoUrl: 'https://kokoroplanner.com/wp-content/uploads/2019/07/iconfinder_woman5_2758862-150x150.png',
            followed: true,
            fullName: 'Nastya F.',
            status: '<3',
            location: {
                city: 'Moscow',
                country: 'Russia'
            }
        }
        ,
        {
            id: 3,
            photoUrl: 'https://kokoroplanner.com/wp-content/uploads/2019/07/iconfinder_woman5_2758862-150x150.png',
            followed: false,
            fullName: 'Nadya J.',
            status: 'sleep now',
            location: {
                city: 'Kiev',
                country: 'Ukraine'
            }
        }
        ,
        {
            id: 4,
            photoUrl: 'https://kokoroplanner.com/wp-content/uploads/2019/07/iconfinder_woman5_2758862-150x150.png',
            followed: false,
            fullName: 'Andrew K.',
            status: 'work work work',
            location: {
                city: 'New York',
                country: 'USA'
            }
        }
    ],
}

export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
}



export const usersReducer = (state:InitialStateType = initialState, action: ActionsType):InitialStateType => {

    switch (action.type) {

        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((user: UserType) => user.id != action.userId ? user : {...user, followed: true})
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((user: UserType) => user.id != action.userId ? user : {
                    ...user,
                    followed: false
                })
            }
        }
        case SET_USERS: {

            return {...state,
                 users: [...state.users, ...action.users]}

        }
        default:
            return state
    }
}

export const followAC = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    } as const
}

export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users} as const)

