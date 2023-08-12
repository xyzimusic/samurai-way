import React, {FC} from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostPropsType} from './MyPosts/Post/Post';
import {ProfilePageType, updateNewPostText} from '../../redux/state';

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost:()=>void
    updateNewPostText:(newPostTitle:string)=>void
}
const Profile: FC<ProfilePropsType> = (props) => {
    const {profilePage,addPost,updateNewPostText} = props
    const {posts, newPostText} = profilePage

    return (
        <div className={s.content}>
            <ProfileInfo></ProfileInfo>
            <MyPosts posts={posts} newPostText={newPostText} addPost={addPost} updateNewPostText={updateNewPostText}></MyPosts>
        </div>
    );
};

export default Profile;