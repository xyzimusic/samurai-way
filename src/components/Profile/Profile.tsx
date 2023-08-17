import React, {FC} from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsType, ProfilePageType} from '../../redux/state';

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsType) => void
}
const Profile: FC<ProfilePropsType> = (props) => {
    const {profilePage, dispatch} = props
    const {posts, newPostText} = profilePage

    return (
        <div className={s.content}>
            <ProfileInfo></ProfileInfo>
            <MyPosts posts={posts} newPostText={newPostText} dispatch={dispatch}></MyPosts>
        </div>
    );
};

export default Profile;