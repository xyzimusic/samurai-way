import React, {FC} from 'react';
import s from './MyPosts.module.css'
import Post, {PostPropsType} from './Post/Post';
import {updateNewPostText} from '../../../redux/state';

type  MyPostsPropsType = {
    posts: PostPropsType[]
    newPostText:string
    addPost: () => void
    updateNewPostText: (newPost: string) => void
}

const MyPosts: FC<MyPostsPropsType> = (props) => {
    const {posts, addPost, newPostText,updateNewPostText} = props

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let postsElements =
        posts.map((el: PostPropsType) => <Post message={el.message} likesCount={el.likesCount} id={el.id}></Post>)

    const addPostHandler = () => {
        if (newPostElement.current) {
            console.log('add post')
            addPost()
        }
    }

    let onPostChange = ()=>{

        let text = newPostElement.current ? newPostElement.current.value:''
        updateNewPostText(text)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={newPostText} onChange={onPostChange}></textarea>
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