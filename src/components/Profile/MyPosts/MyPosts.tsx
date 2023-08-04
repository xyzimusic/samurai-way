import React from 'react';
import s from './MyPosts.module.css'
import Post, {PostPropsType} from './Post/Post';

const MyPosts = () => {

    let posts: PostPropsType[] =
        [
            {
                id: 1,
                message: 'hello, How r u ?',
                likesCount: 11
            }
            ,
            {
                id: 2,
                message: 'Its my first post',
                likesCount: 12
            }
        ]


    let postsElements =
        posts.map((el)=> <Post message={el.message} likesCount={el.likesCount} id={el.id}></Post>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}

            </div>
        </div>
    );
};

export default MyPosts;