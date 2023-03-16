// // import { PostType } from "../render"
export default {}
// import { DialogType, MessageType, PostType, StatePropsType } from ".."
// import dialogReducer, { addNewMessageBodyCreator, sendMessageCreator } from "./Dialogs-reducer"
// import profileReducer, { addPostActionCreator, updateNewPostActionCreator } from "./Profile-reducer"
// import sidebarReducer from "./Sidebar-reducer"

// export type AddPostType = {

//   id: string
//   message: string
//   likesCount: string
// }

// // export type AddPostActionType = ReturnType<typeof addPostActionCreator>

// // export type UpdatePostActionType = ReturnType<typeof updateNewPostActionCreator>






// let store: RootStateType = {
//   _state: {
//     ProfilePage: {
//       PostsData: [{

//         id: '1',
//         message: 'It is my first post!',
//         likesCount: '23'
//       },
//       {
//         id: '2',
//         message: 'Hello, How are you ?',
//         likesCount: '333'

//       },
//       {
//         id: '3',
//         message: '????',
//         likesCount: '45'
//       },
//       {
//         id: '4',
//         message: 'Hallo',
//         likesCount: '100'
//       },
//       ],
//       newPostText: ""
//     },

//     MessagePage: {
//       DialogsData: [{
//         id: '1',
//         name: 'Sergey'
//       },
//       {
//         id: '2',
//         name: 'Gena'
//       },
//       {
//         id: '3',
//         name: 'Vadik'
//       },
//       {
//         id: '4',
//         name: 'Oleg'
//       },
//       {
//         id: '5',
//         name: 'Lexa'
//       },
//       {
//         id: '6',
//         name: 'Sveta'
//       },
//       ],
//       MessagesData: [{
//         id: '1',
//         message: 'Hello!'
//       },
//       {
//         id: '2',
//         message: 'How are you ?'
//       },
//       {
//         id: '3',
//         message: '!'
//       },
//       {
//         id: '4',
//         message: '!!!!'
//       },
//       {
//         id: '5',
//         message: 'dhsahfdsh!'
//       },
//       {
//         id: '6',
//         message: 'Helaaaalo!'
//       },
//       ],
//       newMessageBody: 'Рш'
//     },
//     sidebar: {},
//   },


//   _callSubscriber(state: StatePropsType) {
//     console.log('hello rerender')
//   },


//   getState() {
//     return this._state;
//   },
//   subscribe(observer: (state: StatePropsType) => void) {
//     this._callSubscriber = observer    //  pattern
//   },


//   dispatch(action: ActionsTypes ) {

//     this.getState().ProfilePage = profileReducer(this._state.ProfilePage, action)
//     this.getState().MessagePage = dialogReducer(this._state.MessagePage, action)
//     this.getState().sidebar = sidebarReducer(this._state.sidebar, action)

//     this._callSubscriber(this._state)
//   }

// }


















// export default store
// // @ts-ignore
//  window.store = store;




