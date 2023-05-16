
import './index.css';
// import  { store, AppStateType, ReducersType } from './redux/redux-store';
import  { AppReduxStateType, RootStateType, store } from './redux/redux-store';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import  { Provider } from './StoreContext';
import {Provider} from 'react-redux'

export type AppStateTypes = {
  _state: {
    ProfilePage: {
      PostsData: Array<PostType>
      newPostText: string
    }
    MessagePage: {
      DialogsData: Array<DialogType>
      MessagesData: Array<MessageType>
      newMessageBody: string
    }
  }
}

export type MyDialogsMessagesTypes = {
  DialogsData: Array<DialogType>
  MessagesData: Array<MessageType>
}
export type MyPostsTypes = {
  PostsData: Array<PostType>
  newPostText: string

  // addPost: () => void 
  // updateNewPostText: (newText: string) => void 


  // RefObject<HTMLInputElement>
  
}
export type PostType = {
  id: string 
  message: string
  likesCount: string 

}
 export type DialogType = {
   name: string
   id: string
 }
 export type MessageType = {
   id: string
   message: string
 }


export type StatePropsType = {
      ProfilePage:{
        PostsData: Array<PostType>
        newPostText: string
      }
      MessagePage:{
        DialogsData: Array<DialogType>
        MessagesData: Array<MessageType>
        newMessageBody: string
      }
      sidebar: {},
    
    }

  
  

// let rerenderEntireTree = () => {
  ReactDOM.render(
    <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
  );
// }
// type renderPropsType = {
//   state: AppStateTypes['state']
// }



// rerenderEntireTree()

// store.subscribe(() => {
//   rerenderEntireTree()
// })

// ReactDOM.render(<App PostsData={PostsData} DialogsData={DialogsData} MessagesData={MessagesData}/>,document.getElementById('root')
// );