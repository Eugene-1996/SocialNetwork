import React from 'react'
import { StatePropsType } from '.'
import { ActionsTypes, AppReduxStateType, RootStateType, RootStoreType } from './redux/redux-store'




  export type ProviderType = {
    store: RootStoreType
    children: React.ReactNode   
}
export const StoreContext = React.createContext({} as RootStoreType)


export const Provider = (props: ProviderType) => {
    console.log(props)
    return (
       <StoreContext.Provider value={props.store}>
       {props.children}
       </StoreContext.Provider>
    )
}


