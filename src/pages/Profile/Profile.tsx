import React from 'react';
import { AppStateTypes2 } from '../../App';
import { AppReduxStateType } from '../../redux/redux-store';
import SuperMyPostContainer from './MyPosts/MyPostContainer';
import MyPosts from './MyPosts/MyPosts';
import { CommonPropsType, ProfileDataType } from './ProfileContainer';
// import classes from './profile-style.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { Redirect } from 'react-router-dom';

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

  export type ProfileProps = {
    profile: ProfileDataType
  }

const Profile = (props: CommonPropsType) => {


    return (
        <>
            <div>
                <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
                <SuperMyPostContainer  />
            </div>
        </>
    );
};

export default Profile;