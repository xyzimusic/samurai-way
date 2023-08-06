import React, {FC} from 'react';
import s from './MyPosts.module.css'
import Post, {PostPropsType} from './Post/Post';

type  MyPostsPropsType = {
    posts: PostPropsType[]
}

const MyPosts: FC<MyPostsPropsType> = (props) => {
    const {posts} = props

    let postsElements =
        posts.map((el: PostPropsType) => <Post message={el.message} likesCount={el.likesCount} id={el.id}></Post>)

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