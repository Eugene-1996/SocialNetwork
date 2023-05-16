import React from "react"
import { authAPI } from "../api/API"
import { ActionsTypes } from "./redux-store"

const SET_USER_DATA = 'SET-USER-DATA'


let initialState: authReducerProps = {
   data : {
    id: 3,
    email: '',
    login: '',
   },
   resultCode: 2,
   messages: [],
    isAuth: false

}

export type authReducerProps = {
    data : {
        id: number
        email: string
        login: string
       }
     resultCode: number
     messages: string[]  
     isAuth: boolean
}


const authReducer = (state = initialState, action: ActionsTypes ) => {
    console.log(state)
    switch(action.type){
        case SET_USER_DATA:
            return {
                ...state,
                data:action.data,
                isAuth: true
            }
            default: 
                return state
    }
}


export const setAuthUserDataAC = (id : number, email: string, login: string) => {
   return {
    type: SET_USER_DATA, data : {id, email, login}
   } as const
} 


export const getAuthUserDataThunk = () => (dispatch: any) => {
    
        authAPI.me()
        .then(response => {
            console.log(response)
            // this.props.toggleIsFetching(false);
            // this.props.setUsers(response.data.items)
            // this.props.setTotalUsersCount(response.data.totalCount)
            let {id, email, login} = response.data.data
            if( response.data.resultCode === 0) {
                dispatch(setAuthUserDataAC(id, email, login))
            }

        })
}

export default authReducer