import React, {FC} from 'react';
import s from './MyPosts.module.css'
import Post, {PostPropsType} from './Post/Post';

type  MyPostsPropsType = {
    posts: PostPropsType[]
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void
}


export const MyPosts: FC<MyPostsPropsType> = (props) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let postsElements =
        props.posts.map((el: PostPropsType) => <Post message={el.message} likesCount={el.likesCount} id={el.id}></Post>)

    const onAddPost = () => {
        if (newPostElement.current) {
            console.log('add post')
            props.addPost()
        }
    }

    let onPostChange = () => {
        let text = newPostElement.current ? newPostElement.current.value : ''
        props.updateNewPostText(text)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};
