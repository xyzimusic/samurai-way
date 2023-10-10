import React, {FC} from 'react';
import styles from './users.module.css'
import {UserType} from '../../redux/users-reducer';
import axios from 'axios';

type PropsUsersType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    users: UserType[]
    setUsers: (users: UserType[]) => void
}

//UsersPropsType
export const Users: FC<PropsUsersType> = (props) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response) => {
                console.log(response.data.items)
                props.setUsers(response.data.items)
            })
        console.log('должен засететаться')
    }
    // if (props.users.length === 0) {
    //     props.setUsers(
    //         [
    //             {
    //                 id: 1,
    //                 photoUrl: 'https://kokoroplanner.com/wp-content/uploads/2019/07/iconfinder_woman5_2758862-150x150.png',
    //                 followed: true,
    //                 fullName: 'Ilya S.',
    //                 status: 'wake up!',
    //                 location: {
    //                     city: 'Minsk',
    //                     country: 'Belarus'
    //                 }
    //             }
    //             ,
    //             {
    //                 id: 2,
    //                 photoUrl: 'https://kokoroplanner.com/wp-content/uploads/2019/07/iconfinder_woman5_2758862-150x150.png',
    //                 followed: true,
    //                 fullName: 'Nastya F.',
    //                 status: '<3',
    //                 location: {
    //                     city: 'Moscow',
    //                     country: 'Russia'
    //                 }
    //             }
    //             ,
    //             {
    //                 id: 3,
    //                 photoUrl: 'https://kokoroplanner.com/wp-content/uploads/2019/07/iconfinder_woman5_2758862-150x150.png',
    //                 followed: false,
    //                 fullName: 'Nadya J.',
    //                 status: 'sleep now',
    //                 location: {
    //                     city: 'Kiev',
    //                     country: 'Ukraine'
    //                 }
    //             }
    //             ,
    //             {
    //                 id: 4,
    //                 photoUrl: 'https://kokoroplanner.com/wp-content/uploads/2019/07/iconfinder_woman5_2758862-150x150.png',
    //                 followed: false,
    //                 fullName: 'Andrew K.',
    //                 status: 'work work work',
    //                 location: {
    //                     city: 'New York',
    //                     country: 'USA'
    //                 }
    //             }
    //         ]
    //     )
    // }

    return (
        <div>
            {
                props.users.map((u: UserType) => <div key={u.id}>
                    <span>
                        <div>
                            <img
                                className={styles.userPhoto}
                                src={u.photos?.small ? u.photos.small : 'https://kokoroplanner.com/wp-content/uploads/2019/07/iconfinder_woman5_2758862-150x150.png'}
                                alt=""/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => {
                                    props.unFollow(u.id)
                                }}
                                > unfollow
                                </button>
                                :
                                <button onClick={() => {
                                    props.follow(u.id)
                                }}
                                > follow
                                </button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                          <div>
                                {u.name}
                          </div>
                          <div>
                                {u.status}
                          </div>
                        </span>
                        <span>
                              <div>
                                {'u.location.country'}
                             </div>
                             <div>
                                {'u.location.city'}
                             </div>
                        </span>
                    </span>

                </div>)
            }
        </div>
    );
};
