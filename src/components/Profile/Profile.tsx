import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://yt3.googleusercontent.com/ytc/AL5GRJVUcTKds2cadtIwr_HWNgl8Lon_M8MEyPu0uKPL1A=s900-c-k-c0x00ffffff-no-rj"
                    alt="avatar"
                />
            </div>
            <div className="avatar">
                avatar + description
            </div>
            <MyPosts></MyPosts>
        </div>
    );
};

export default Profile;