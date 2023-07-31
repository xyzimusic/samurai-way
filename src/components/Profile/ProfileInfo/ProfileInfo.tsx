import React from 'react';
import s from './ProfileInfo.module.css'
const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://yt3.googleusercontent.com/ytc/AL5GRJVUcTKds2cadtIwr_HWNgl8Lon_M8MEyPu0uKPL1A=s900-c-k-c0x00ffffff-no-rj"
                    alt="avatar"
                />
            </div>
            <div className={s.descriptionBlock}>
                avatar + description
            </div>
        </div>
    );
};

export default ProfileInfo;