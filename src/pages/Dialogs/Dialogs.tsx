import React, { ChangeEvent, ChangeEventHandler } from 'react';
import { AppStateTypes2 } from '../../App';
import DialogItem from '../../components/DialogItem/DialogItem';
import Message from '../../components/Message/Message';
import { addNewMessageBodyCreator, sendMessageCreator } from '../../redux/Dialogs-reducer';
import { ActionsTypes, RootStateType,  } from '../../redux/state';
import { PostType } from '../Profile/Profile';

import classes from './dialogs-style.module.css'


type PropsType = {
    store: RootStateType
    dispatch: (action: ActionsTypes) => void
}

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


const Dialogs = (props: PropsType) => {

    

    let dialogsElements = (props.store.getState().MessagePage.DialogsData).map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = (props.store.getState().MessagePage.MessagesData).map(m => <Message message={m.message} id={m.id} />)
    let newMessageBody = props.store.getState().MessagePage.newMessageBody
console.log(props.store.getState())
    // let newMessageElement = React.createRef<HTMLTextAreaElement>()

    let onChangeHandler = (event : ChangeEvent<HTMLTextAreaElement>) => {
        let body = event.currentTarget.value
    console.log({body})
        // let text = newMessageElement.current!.value
        props.dispatch(addNewMessageBodyCreator(body))
        // alert(text)
    }
    const addNewMessage = () => {
        props.dispatch(sendMessageCreator())
    }


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
                        onChange={onChangeHandler}
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