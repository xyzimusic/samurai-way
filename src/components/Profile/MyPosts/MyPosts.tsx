import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message ={'Hi, How are u?'}></Post>
                <Post message ={'It`s my first post'}></Post>
            </div>
        </div>
    );
};

export default MyPosts;