import React, {FC} from 'react';
import s from './MyPosts.module.css'
import Post, {PostPropsType} from './Post/Post';
import {ActionsType} from '../../../redux/store';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profile-reducer';

type  MyPostsPropsType = {
    posts: PostPropsType[]
    newPostText: string
    dispatch: (action: ActionsType) => void
}


export const MyPosts: FC<MyPostsPropsType> = (props) => {
    const {posts, newPostText, dispatch} = props

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let postsElements =
        posts.map((el: PostPropsType) => <Post message={el.message} likesCount={el.likesCount} id={el.id}></Post>)

    const addPostHandler = () => {
        if (newPostElement.current) {
            console.log('add post')
            // const action: AddPostActionType= {type: 'ADD-POST', postText: newPostText};
            dispatch(addPostAC(newPostText))
        }

    }

    let onPostChange = () => {
        let text = newPostElement.current ? newPostElement.current.value : ''
        dispatch(updateNewPostTextAC(text))
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
