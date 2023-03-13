import { DialogType, MessageType, PostType, StatePropsType } from "..";
import { ActionsTypes, AddPostType } from "./state";



export type ProfileReducerPropsType = {

  PostsData: Array<PostType>
  newPostText: string

}


const profileReducer = (state: ProfileReducerPropsType, action: ActionsTypes) => {


  switch (action.type) {
    case 'ADD-POST':
      let newPost: AddPostType = {
        id: '5',
        message: state.newPostText,
        likesCount: '0'
      };
      state.PostsData.push(newPost)
      state.newPostText = ''
      return state
    case 'UPDATE-POST-ACTION-TYPE':
      state.newPostText = action.newText
      return state
    default:
      return state
  }
}

export let addPostActionCreator = () => {
  return { type: 'ADD-POST' } as const 
} 

export let updateNewPostActionCreator = (text: string) => {
  return {type: 'UPDATE-POST-ACTION-TYPE', newText: text} as const
} 

export default profileReducer