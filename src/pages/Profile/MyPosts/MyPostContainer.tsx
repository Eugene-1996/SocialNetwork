import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/Profile-reducer';
import { AppReduxStateType, store } from '../../../redux/redux-store';
import { StoreContext } from '../../../StoreContext';
import MyPosts from './MyPosts';
import classes from './myposts-style.module.css'
import Post from './Post/Post';

// export type MyPostsContainerTypes = {
//     // PostsData: Array<PostType>
//     // newPostText: string
//     // dispatch: (action: ActionsTypes) => void
//     state: AppReduxStateType
// }
export type PostType = {
    id: string
    message: string
    likesCount: string

}




const MyPostsContainer = () => {


    // let state = props.state



    return (
        <StoreContext.Consumer> 
            {
            (store) => {

                let state = store.getState().ProfilePage
                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                let onPostChange = (text: string) => {
                    store.dispatch(updateNewPostActionCreator(text))
                }


                return <MyPosts updateNewPostText={onPostChange} addPost={addPost} newPostText={state.newPostText} PostsData={state.PostsData} />
            }
        }
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;