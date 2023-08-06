import React, {FC} from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostPropsType} from './MyPosts/Post/Post';

type ProfilePropsType = {
    posts: PostPropsType[]
}
const Profile: FC<ProfilePropsType> = (props) => {
    const {posts} = props

    return (
        <div className={s.content}>
            <ProfileInfo></ProfileInfo>
            <MyPosts posts={posts}></MyPosts>
        </div>
    );
};

export default Profile;