import { connect } from 'react-redux';
import React from 'react';
import { addPostActionCreator, ProfileReducerPropsType, updateNewPostAC } from '../../../redux/Profile-reducer';
import { AppReduxStateType, store } from '../../../redux/redux-store';
import MyPosts from './MyPosts';
import classes from './myposts-style.module.css'
import Post from './Post/Post';
import { Dispatch } from 'redux';

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




// const MyPostsContainer = () => {


//     // let state = props.state



//     return (
//         <StoreContext.Consumer> 
//             {
//             (store) => {

//                 let state = store.getState().ProfilePage
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator())
//                 }

//                 let onPostChange = (text: string) => {
//                     store.dispatch(updateNewPostActionCreator(text))
//                 }


//                 return <MyPosts updateNewPostText={onPostChange} addPost={addPost} newPostText={state.newPostText} PostsData={state.PostsData} />
//             }
//         }
//         </StoreContext.Consumer>
//     );
// };


type MapStatePropsType = {
    ProfilePage : Array<PostType> 
    newPostText : string
}

type MapDispatchPropsType = {
    addPost : () => void
    onPostChange : (text: string) => void
}

export type MyPostStatePropsType = MapStatePropsType & MapDispatchPropsType

let MapStateToProps = (state: AppReduxStateType) : MapStatePropsType => {
    return {
        ProfilePage: state.ProfilePage.PostsData,
        newPostText: state.ProfilePage.newPostText
        
    }
}

let MapDispatchToProps = (dispatch: Dispatch) : MapDispatchPropsType => {
    return {
        addPost : () => {
            dispatch(addPostActionCreator())
        },
        onPostChange : (text: string) => {
            
            dispatch(updateNewPostAC(text))
        }

    }
}


const SuperMyPostContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts)



export default SuperMyPostContainer;