import React, {FC} from 'react';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {StoreContext} from '../../../storeContext';

type  MyPostsPropsType = {}

export const MyPostsContainer: FC<MyPostsPropsType> = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().profilePage
                    const addPostHandler = () => {
                        store.dispatch(addPostAC(state.posts))
                    }

                    let onPostChange = (text: string) => {
                        store.dispatch(updateNewPostTextAC(text))
                    }
                    return (
                        <MyPosts updateNewPostText={onPostChange}
                                 addPost={addPostHandler}
                                 posts={state.posts}
                                 newPostText={state.newPostText}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    );
};
