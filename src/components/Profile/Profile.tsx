import React, {FC} from 'react';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';

type ProfilePropsType = {
    store: any
}
const Profile: FC<ProfilePropsType> = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo></ProfileInfo>
            <MyPostsContainer store={props.store}></MyPostsContainer>
        </div>
    );
};

export default Profile;