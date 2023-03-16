import { legacy_createStore, combineReducers } from "redux";
import profileReducer, { addPostActionCreator, updateNewPostActionCreator } from "./Profile-reducer";
import dialogReducer, { addNewMessageBodyCreator, sendMessageCreator } from "./Dialogs-reducer";
import sidebarReducer from "./Sidebar-reducer";
import { StatePropsType } from "..";


export type RootStateType = {
    _state: StatePropsType
    getState: () => StatePropsType
    // addPost: () => void 
    // updateNewPostText: (newText: string) => void 
    dispatch: (action: ActionsTypes) => void
    _callSubscriber:(state: StatePropsType) => void
    subscribe: (observer: (state: StatePropsType) => void) => void
    // children: React.ReactNode
  }

export const rootReducer = combineReducers({
    ProfilePage: profileReducer,
    MessagePage: dialogReducer,
    sidebar: sidebarReducer,
  
})
export type AppReduxStateType = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer)


export type ActionsTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostActionCreator> | ReturnType<typeof addNewMessageBodyCreator> | ReturnType<typeof sendMessageCreator>

export type AddPostType = {

  id: string
  message: string
  likesCount: string
}
