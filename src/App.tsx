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
import { ActionsTypes, RootStateType } from './redux/state';
import { StatePropsType } from '.';


type StoreTypes = {
  store: RootStateType
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
          <Route path='/profile' render={() => <Profile PostsData={props.store.getState().ProfilePage.PostsData} newPostText={props.store._state.ProfilePage.newPostText} dispatch={props.store.dispatch.bind(props.store)} />} />
          <Route path='/dialogs' render={() => <Dialogs store={props.store} dispatch={props.store.dispatch.bind(props.store)} />} />
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