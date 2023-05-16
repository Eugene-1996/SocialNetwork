import React, { ChangeEvent, ChangeEventHandler } from 'react';
import { Redirect } from 'react-router-dom';
import { AppStateTypes2 } from '../../App';
import DialogItem from '../../components/DialogItem/DialogItem';
import Login from '../../components/Login/Login';
import Message from '../../components/Message/Message';
import { addNewMessageBodyCreator, sendMessageCreator } from '../../redux/Dialogs-reducer';
import { AppReduxStateType, RootStateType, RootStoreType } from '../../redux/redux-store';
import { PostType } from '../Profile/Profile';

import classes from './dialogs-style.module.css'
import { DialogsStatePropsType } from './DialogsContainer';


type PropsType = {
    dialogsPage: RootStoreType
    // dispatch: (action: ActionsTypes) => void
    updateNewMesageBody: (body: string) => void
    addNewMessage: () => void
}

export type MyDialogsMessagesTypes = {
    DialogsData: Array<DialogType>
    MessagesData: Array<MessageType>
    newMessageBody: string
    // dispatch: (action: ActionsTypes) => void

}
export type DialogType = {
    name: string
    id: string
}
export type MessageType = {
    id: string
    message: string
}


const Dialogs = (props: DialogsStatePropsType) => {

    let state = props.DialogsPage

    let dialogsElements = (state.DialogsData).map((d, index) => <DialogItem key={index} name={d.name} id={d.id} />)
    let messagesElements = (state.MessagesData).map((m, index) => <Message key={index} message={m.message} id={m.id} />)
    let newMessageBody = state.newMessageBody
// console.log(props.store.getState())
    // let newMessageElement = React.createRef<HTMLTextAreaElement>()

    let onNewMessageChange = (event : ChangeEvent<HTMLTextAreaElement>) => {
        let body = event.currentTarget.value
        props.updateNewMesageBody(body)
        // let text = newMessageElement.current!.value
        // props.dispatch(addNewMessageBodyCreator(body))
        // alert(text)
    }
    const addNewMessage = () => {
        props.addNewMessage()
        // props.dispatch(sendMessageCreator())
    }
    // if (props.isAuth === false) return <Redirect to={'/login'}/>
    
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div>
                    <textarea
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                        // placeholder={'Hello'}
                        // ref={newMessageElement}
                    >Text</textarea>
                </div>
                <div>
                    <button onClick={addNewMessage}>Send Message</button>
                </div>
                <div>
                    <button >Remove Message</button>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;