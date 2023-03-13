import { DialogType, MessageType } from "..";
import { ActionsTypes } from "./state";



export type DialogsReducerPropsType = {  
    DialogsData: Array<DialogType>
    MessagesData: Array<MessageType>
    newMessageBody: string 
  }



const dialogReducer = (state: DialogsReducerPropsType, action: ActionsTypes) => {


    switch (action.type) {
        case 'NEW-MESSAGE-BODY':
            state.newMessageBody = action.body;
            return state
        case 'SEND-MESSAGE':
            let body = state.newMessageBody
            state.newMessageBody = '';
            state.MessagesData.push({
                id: '7',
                message: body
            })
            return state
            default:
                return state
    }
}

export let addNewMessageBodyCreator = (text: string) => {
    return { type: 'NEW-MESSAGE-BODY', body: text } as const 
  }
  
  export let sendMessageCreator = () => {
    return {type: 'SEND-MESSAGE'} as const
  } 


export default dialogReducer