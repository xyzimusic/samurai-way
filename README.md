42 и 43 типизация store и редьюсеров

const addPostHandler = () => {
props.store.dispatch(addPostAC(state.posts))
}

let onPostChange = (text: string) => {
    props.store.dispatch(updateNewPostTextAC(text))
}

тут где-то креатор другой будто
