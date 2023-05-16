import { legacy_createStore, combineReducers, Store, applyMiddleware } from "redux";
import profileReducer, { addPostActionCreator,  setUserProfileAC, setUserProfileStatusAC, updateNewPostAC } from "./Profile-reducer";
import dialogReducer, { addNewMessageBodyCreator, sendMessageCreator } from "./Dialogs-reducer";
import sidebarReducer from "./Sidebar-reducer";
import { StatePropsType } from "..";
import usersReducer, { currentPageAC, followAC, setTotalUsersCountAC, setUsersAC, toggleFollowingProgressAC, toggleIsFetchingAC, unfollowAC } from "../components/Users/Users-reducer";
import authReducer, {  setAuthUserDataAC } from "./auth-reducer";
import thunkMiddleWare from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

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
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})
export type AppReduxStateType = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleWare))

export type RootStoreType = Store<AppReduxStateType, ActionsTypes>

export type ActionsTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostAC> | ReturnType<typeof addNewMessageBodyCreator> | ReturnType<typeof sendMessageCreator> | ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC> | ReturnType<typeof currentPageAC> | ReturnType<typeof setTotalUsersCountAC> | ReturnType<typeof toggleIsFetchingAC> | ReturnType<typeof setUserProfileAC> | ReturnType<typeof setAuthUserDataAC> | ReturnType<typeof toggleFollowingProgressAC> | ReturnType<typeof setUserProfileStatusAC>

export type AddPostType = {

  id: string
  message: string
  likesCount: string
}

