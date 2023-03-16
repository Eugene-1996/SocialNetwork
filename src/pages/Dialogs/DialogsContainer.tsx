import React, { ChangeEvent, ChangeEventHandler } from 'react';
import { AppStateTypes2 } from '../../App';
import DialogItem from '../../components/DialogItem/DialogItem';
import Message from '../../components/Message/Message';
import { addNewMessageBodyCreator, sendMessageCreator } from '../../redux/Dialogs-reducer';
import { ActionsTypes, AppReduxStateType, store } from '../../redux/redux-store';
import { StoreContext } from '../../StoreContext';

import { PostType } from '../Profile/Profile';
import Dialogs from './Dialogs';

import classes from './dialogs-style.module.css'


// type PropsType = {
//     state: AppReduxStateType
//     // dispatch: (action: ActionsTypes) => void
// }

export type MyDialogsMessagesTypes = {
    DialogsData: Array<DialogType>
    MessagesData: Array<MessageType>
    newMessageBody: string
    dispatch: (action: ActionsTypes) => void

}
export type DialogType = {
    name: string
    id: string
}
export type MessageType = {
    id: string
    message: string
}


const DialogsContainer = () => {

    //    let state = props.state.MessagePage

    //     let dialogsElements = (props.store.getState().MessagePage.DialogsData).map(d => <DialogItem name={d.name} id={d.id} />)
    //     let messagesElements = (props.store.getState().MessagePage.MessagesData).map(m => <Message message={m.message} id={m.id} />)
    //     let newMessageBody = props.store.getState().MessagePage.newMessageBody
    // console.log(props.store.getState())
    // let newMessageElement = React.createRef<HTMLTextAreaElement>()

    let updateNewMesageBody = (body: string) => {
        // let body = event.currentTarget.value
        // let text = newMessageElement.current!.value
        store.dispatch(addNewMessageBodyCreator(body))
        // alert(text)
    }
    const addNewMessage = () => {
        store.dispatch(sendMessageCreator())
    }


    return <StoreContext.Consumer> 
        {
            (store) => {
            return  <Dialogs dialogsPage={store} updateNewMesageBody={updateNewMesageBody} addNewMessage={addNewMessage} />

        }
    }
    </StoreContext.Consumer>
};

export default DialogsContainer;