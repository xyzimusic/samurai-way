import React, {FC} from 'react';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';

type ProfilePropsType = {

}
const Profile: FC<ProfilePropsType> = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo></ProfileInfo>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;