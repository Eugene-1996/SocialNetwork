import axios from 'axios';
import { connect, MapDispatchToProps } from 'react-redux';
import React from 'react';
import Header from './Header';
import { authReducerProps, getAuthUserDataThunk, setAuthUserDataAC,  } from '../../redux/auth-reducer';
import { read } from 'fs';
import { AppReduxStateType } from '../../redux/redux-store';
import { Dispatch } from 'redux';
import { authAPI, userAPI } from '../../api/API';


type mapStatePropsType = {
    isAuth: boolean
    login: string
}

type mapDispatchPropsType = {
    // setAuthUserDataAC: (id:number,email:string, login:string) => void
    getAuthUserDataThunk: () => void
}

export type AuthDataProps = {
    data : {
        id: number
        email: string
        login: string
       }
     resultCode: number
     messages: string[]
     isAuth: boolean  
}

export type AuthStatePropsType = mapStatePropsType & mapDispatchPropsType

class HeaderContainer  extends React.Component<AuthStatePropsType> {
    

    componentDidMount(): void {

        this.props.getAuthUserDataThunk()
        // axios.get<AuthDataProps>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
        // authAPI.me()
        // .then(response => {
        //     console.log(response)
        //     // this.props.toggleIsFetching(false);
        //     // this.props.setUsers(response.data.items)
        //     // this.props.setTotalUsersCount(response.data.totalCount)
        //     let {id, email, login} = response.data.data
        //     if( response.data.resultCode === 0) {
        //         this.props.setAuthUserDataAC(id, email, login)
        //     }

        // })

    }

    render() {
        return (
        
           <Header {...this.props}/>
        );
        }
   
};

export const mapStateToProps = (state: AppReduxStateType): mapStatePropsType => ({
    
    isAuth: state.auth.isAuth,
    login: state.auth.data.login
    
})

// export const mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         setAuthUserData: (auth: AuthDataProps) => {
//             dispatch(setAuthUserDataAC(auth.data.id, auth.data.email, auth.data.login))
//         }
//     }
// }




export default connect(mapStateToProps, {getAuthUserDataThunk}) (HeaderContainer);