import React from 'react';
import { AppStateTypes2 } from '../../App';
import { AppReduxStateType } from '../../redux/redux-store';
import MyPostsContainer from './MyPosts/MyPostContainer';
import MyPosts from './MyPosts/MyPosts';
// import classes from './profile-style.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

// export type MyPostsTypes = {
//     state: AppReduxStateType
    // PostsData: Array<PostType>
    // newPostText: string
    // dispatch: (action: ActionsTypes) => void
    // addPost: () => void 
    // updateNewPostText: (newText: string) => void 
  
  
    // RefObject<HTMLInputElement>
    
//   }
  export type PostType = {
    id: string 
    message: string
    likesCount: string 
  
  }

const Profile = () => {



    return (
        <>
            <div>
                <ProfileInfo />
                <MyPostsContainer  />
            </div>
        </>
    );
};

export default Profile;