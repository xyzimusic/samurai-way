import React from 'react';
import styles from './users.module.css'
import {UserType} from '../../redux/users-reducer';
import axios from 'axios';

type PropsUsersType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (TotalUsersCount: number) => void
    users: UserType[]
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
}

export class UsersC extends React.Component<PropsUsersType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
                console.log(response.data.totalCount)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        console.log(this.props.totalUsersCount)
        console.log(this.props.pageSize)

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        const onPageChanged = (pageNumber:number) => {
            this.props.setCurrentPage(pageNumber)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
                .then((response) => {
                    this.props.setUsers(response.data.items)
                    // this.props.setTotalUsersCount(response.data.totalCount)
                })
        }

        return <div>
            <div>
                {pages.map((p) => {
                    return <span className={this.props.currentPage === p ? styles.selectedPage : ''}
                                 onClick={()=>{onPageChanged(p)}}>{p}</span>
                })}

            </div>
            {
                this.props.users.map((u: UserType) => <div key={u.id}>
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
                                    this.props.unFollow(u.id)
                                }}
                                > unfollow
                                </button>
                                :
                                <button onClick={() => {
                                    this.props.follow(u.id)
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
    }

}