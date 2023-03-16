import React from 'react'
import { StatePropsType } from '.'
import { ActionsTypes, AppReduxStateType, RootStateType } from './redux/redux-store'




  export type ProviderType = {
    store: RootStateType
    children: any
}
export const StoreContext = React.createContext({} as ProviderType)


export const Provider = (props: ProviderType) => {
    console.log(props)
    return (
       <StoreContext.Provider value={props.store}>
       {props.children}
       </StoreContext.Provider>
    )
}


