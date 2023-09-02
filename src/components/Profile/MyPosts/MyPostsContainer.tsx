import React, {FC} from 'react';
import {PostPropsType} from './Post/Post';
import {ActionsType} from '../../../redux/store';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';

type  MyPostsPropsType = {

    store:any
}

export const MyPostsContainer: FC<MyPostsPropsType> = (props) => {
    let state = props.store.getState()

    const addPostHandler = () => {
        props.store.dispatch(addPostAC(state.posts))
    }

    let onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextAC(text))
    }
    return (
        <MyPosts updateNewPostText={onPostChange} addPost={addPostHandler} posts={state.posts}
                 newPostText={state.newPostText}/>
    );
};
