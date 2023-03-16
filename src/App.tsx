import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Dialogs from './pages/Dialogs/Dialogs';
import Profile from './pages/Profile/Profile';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './pages/News/News';
import Music from './pages/Music/Music';
import Settings from './pages/Settings/Settings';
import Friends from './pages/Friends/Friends';
import { StatePropsType } from '.';
import DialogsContainer from './pages/Dialogs/DialogsContainer';
import { ActionsTypes, AppReduxStateType, rootReducer } from './redux/redux-store';
import { ProfileReducerPropsType } from './redux/Profile-reducer';
import { DialogsReducerPropsType } from './redux/Dialogs-reducer';
import { EmptyObject } from 'redux';


type StoreTypes = {
    // state : AppReduxStateType
}
export type AppStateTypesAll = StoreTypes | AppStateTypes2

export type AppStateTypes2 = {
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
  // addPost: () => void 
  // updateNewPostText: (newText: string) => void 
  dispatch: (action: ActionsTypes) => void
}

// NewPostText={props.state.ProfilePage.NewPostText}

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

function App(props: StoreTypes) {
  // console.log(props.state.ProfilePage.newPostText)

  return (
    <BrowserRouter>
      <div className="app-wraper">
        <Header />
        <Navigation />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile  />} />
          <Route path='/dialogs' render={() => <DialogsContainer  />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
          <Route path='/friends' component={Friends} />
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;



// addPost={props.addPost} updateNewPostText={props.updateNewPostText}