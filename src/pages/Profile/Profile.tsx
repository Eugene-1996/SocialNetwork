import React from 'react';
import { AppStateTypes2 } from '../../App';
import { ActionsTypes } from '../../redux/state';
import MyPosts from './MyPosts/MyPosts';
// import classes from './profile-style.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

export type MyPostsTypes = {
    PostsData: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
    // addPost: () => void 
    // updateNewPostText: (newText: string) => void 
  
  
    // RefObject<HTMLInputElement>
    
  }
  export type PostType = {
    id: string 
    message: string
    likesCount: string 
  
  }

const Profile = (props: MyPostsTypes) => {



    return (
        <>
            <div>
                <ProfileInfo />
                <MyPosts newPostText={props.newPostText} PostsData={props.PostsData} dispatch={props.dispatch} />
            </div>
        </>
    );
};

export default Profile;