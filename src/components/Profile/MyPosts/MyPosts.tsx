import React, {FC} from 'react';
import s from './MyPosts.module.css'
import Post, {PostPropsType} from './Post/Post';
import {state} from '../../../redux/state';

type  MyPostsPropsType = {
    posts: PostPropsType[]
    addPost: (newPost: string) => void
}

const MyPosts: FC<MyPostsPropsType> = (props) => {
    const {posts, addPost} = props

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let postsElements =
        posts.map((el: PostPropsType) => <Post message={el.message} likesCount={el.likesCount} id={el.id}></Post>)

    const addPostHandler = () => {
        if (newPostElement.current) {
            addPost(newPostElement.current.value)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPostHandler}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;