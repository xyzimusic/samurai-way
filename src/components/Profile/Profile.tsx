import React, {FC} from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostPropsType} from './MyPosts/Post/Post';
import {ProfilePageType} from '../../redux/state';

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost:(newPostTitle:string)=>void
}
const Profile: FC<ProfilePropsType> = (props) => {
    const {profilePage,addPost} = props
    const {posts} = profilePage

    return (
        <div className={s.content}>
            <ProfileInfo></ProfileInfo>
            <MyPosts posts={posts} addPost={addPost}></MyPosts>
        </div>
    );
};

export default Profile;