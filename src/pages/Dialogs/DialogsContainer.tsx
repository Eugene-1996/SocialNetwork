import React, { ChangeEvent, ChangeEventHandler } from 'react';
import { AppStateTypes2 } from '../../App';
import DialogItem from '../../components/DialogItem/DialogItem';
import Message from '../../components/Message/Message';
import { addNewMessageBodyCreator, DialogsReducerPropsType, sendMessageCreator } from '../../redux/Dialogs-reducer';
import { ActionsTypes, AppReduxStateType, store } from '../../redux/redux-store';

import { PostType } from '../Profile/Profile';
import Dialogs from './Dialogs';
import { connect } from 'react-redux'
import classes from './dialogs-style.module.css'
import { AppStateTypes, StatePropsType } from '../..';
import { Dispatch, compose } from 'redux';
import { Redirect } from 'react-router-dom';
import WithAuthRedirect, { withAuthRedirect } from '../../hoc/WithAuthRedirect';


// type PropsType = {
//     state: AppReduxStateType
//     // dispatch: (action: ActionsTypes) => void
// }

// export type MyDialogsMessagesTypes = {
//     DialogsData: Array<DialogType>
//     MessagesData: Array<MessageType>
//     newMessageBody: string
//     dispatch: (action: ActionsTypes) => void
// }
export type DialogType = {
    name: string
    id: string
}
export type MessageType = {
    id: string
    message: string
}


// const DialogsContainer = () => {

//     //    let state = props.state.MessagePage

//     //     let dialogsElements = (props.store.getState().MessagePage.DialogsData).map(d => <DialogItem name={d.name} id={d.id} />)
//     //     let messagesElements = (props.store.getState().MessagePage.MessagesData).map(m => <Message message={m.message} id={m.id} />)
//     //     let newMessageBody = props.store.getState().MessagePage.newMessageBody
//     // console.log(props.store.getState())
//     // let newMessageElement = React.createRef<HTMLTextAreaElement>()

//     let updateNewMesageBody = (body: string) => {
//         // let body = event.currentTarget.value
//         // let text = newMessageElement.current!.value
//         store.dispatch(addNewMessageBodyCreator(body))
//         // alert(text)
//     }
//     const addNewMessage = () => {
//         store.dispatch(sendMessageCreator())
//     }


//     return <StoreContext.Consumer> 
//         {
//             (store) => {
//             return  <Dialogs dialogsPage={store} updateNewMesageBody={updateNewMesageBody} addNewMessage={addNewMessage} />

//         }
//     }
//     </StoreContext.Consumer>
// };


type MapStatePropsType = {
    DialogsPage: DialogsReducerPropsType
}
type MapDispatchPropsType = {
    updateNewMesageBody: (body : string) => void
    addNewMessage:  () => void
}

export type DialogsStatePropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppReduxStateType) : MapStatePropsType => {
    return {
        DialogsPage: state.MessagePage,
        // isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch ): MapDispatchPropsType => {
    return {
        updateNewMesageBody: (body : string) => {
            dispatch(addNewMessageBodyCreator(body))
        },
        addNewMessage:  () => {
            dispatch(sendMessageCreator())
        }
    }
}




// let AuthRedirectComponent = withAuthRedirect(Dialogs)
   

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)

export default DialogsContainer