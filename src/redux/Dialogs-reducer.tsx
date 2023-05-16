import { DialogType, MessageType } from "..";
import { ActionsTypes } from "./redux-store";

let initialState : DialogsReducerPropsType = {
  DialogsData: [{
    id: '1',
    name: 'Sergey'
  },
  {
    id: '2',
    name: 'Gena'
  },
  {
    id: '3',
    name: 'Vadik'
  },
  {
    id: '4',
    name: 'Oleg'
  },
  {
    id: '5',
    name: 'Lexa'
  },
  {
    id: '6',
    name: 'Sveta'
  },
  ],
  MessagesData: [{
    id: '1',
    message: 'Hello!'
  },
  {
    id: '2',
    message: 'How are you ?'
  },
  {
    id: '3',
    message: '!'
  },
  {
    id: '4',
    message: '!!!!'
  },
  {
    id: '5',
    message: 'dhsahfdsh!'
  },
  {
    id: '6',
    message: 'Helaaaalo!'
  },
  ],
  newMessageBody: 'Рш'
}



export type DialogsReducerPropsType = {  
    DialogsData: Array<DialogType>
    MessagesData: Array<MessageType>
    newMessageBody: string 
  }



const dialogReducer = (state: DialogsReducerPropsType = initialState, action: ActionsTypes): DialogsReducerPropsType => {


    switch (action.type) {
        case 'NEW-MESSAGE-BODY':
            state.newMessageBody = action.body;
            return {...state}
        case 'SEND-MESSAGE':
            let body = state.newMessageBody
            state.newMessageBody = '';
            
            return {...state, MessagesData: [...state.MessagesData, {id: `${state.MessagesData.length}`, message: body }]}
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