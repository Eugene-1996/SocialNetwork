import { Dispatch } from "redux";
import { DialogType, MessageType, PostType, StatePropsType } from "..";
import { profileAPI, userAPI } from "../api/API";
import { ProfileDataType } from "../pages/Profile/ProfileContainer";
import { ActionsTypes, AddPostType } from "./redux-store";

let initialState : ProfileReducerPropsType = { 
    PostsData: [{

      id: '1',
      message: 'It is my first post!',
      likesCount: '23'
    },
    {
      id: '2',
      message: 'Hello, How are you ?',
      likesCount: '333'

    },
    {
      id: '3',
      message: '????',
      likesCount: '45'
    },
    {
      id: '4',
      message: 'Hallo',
      likesCount: '100'
    },
    ],
    newPostText: "",
    profile: {
      userId: 2,
      lookingForAJob: true,
      lookingForAJobDescription: 'string',
      fullName: 'string',
      contacts: {
          github: 'string',
          vk: 'string',
          facebook: 'string',
          instagram: 'string',
          twitter: 'string',
          website: 'string',
          youtube: 'string',
          mainLink: 'string'
      },
      photos: {
          small: 'string',
          large: 'string'
      }
    },
    status: ''

  }


export type ProfileReducerPropsType = {

  PostsData: Array<PostType>
  newPostText: string
  profile: ProfileDataType
  status: string
}


const profileReducer = (state: ProfileReducerPropsType = initialState, action: ActionsTypes):ProfileReducerPropsType => {


  switch (action.type) {
    case 'ADD-POST':
      let newPost: AddPostType = {
        id: '5',
        message: state.newPostText,
        likesCount: '0'
      };
      // state.PostsData.push(newPost)
      state.newPostText = ''
      return {...state, PostsData : [...state.PostsData, newPost]}
    case 'UPDATE-POST-ACTION-TYPE':
      state.newPostText = action.newText
      return {...state}
    case 'SET-USER-PROFILE':
      return {...state, profile: action.profile}
    case 'SET-USER-PROFILE-STATUS':
        return {...state, status: action.status}
    default:
      return state
  }
}

export let addPostActionCreator = () => {
  return { type: 'ADD-POST' } as const 
} 

export let updateNewPostAC = (text: string) => {
  return {type: 'UPDATE-POST-ACTION-TYPE', newText: text} as const
} 

export let setUserProfileAC = (profile: ProfileDataType ) => {
  return {type: 'SET-USER-PROFILE', profile} as const
}

export let setUserProfileStatusAC = (status: string) => {
  return {type: 'SET-USER-PROFILE-STATUS', status} as const 
}

export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
  userAPI.getProfile(userId)
  // axios.get<ProfileDataType>(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(response => {
          dispatch(setUserProfileAC(response.data));
      })
}

export const getStatus = (userId: string) => (dispatch: Dispatch) => {
  profileAPI.getStatus(userId)
  // axios.get<ProfileDataType>(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(response => {
        console.log(response.data)
          dispatch(setUserProfileStatusAC(response.data));
      })
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
  profileAPI.updateStatus(status)
  // axios.get<ProfileDataType>(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(response => {
        if (response.data.resultCode === 0){
          dispatch(setUserProfileStatusAC(status));
        }    
      })
}


export default profileReducer