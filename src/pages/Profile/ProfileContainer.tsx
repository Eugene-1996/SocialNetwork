import axios from 'axios';
import React, { ComponentType } from 'react'
import { compose, Dispatch } from 'redux';
import { connect, MapStateToProps } from 'react-redux';
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom';
import { getStatus, getUserProfile, updateStatus } from '../../redux/Profile-reducer';
import { AppReduxStateType } from '../../redux/redux-store';
import Profile from './Profile'
import WithAuthRedirect, { withAuthRedirect } from '../../hoc/WithAuthRedirect';



type PathParamsType = {
    userId: string 
}


type mapStatePropsType = {
    profile: ProfileDataType
    status: string
    // isAuth: boolean
}

type mapDispatchPropsType = {
    // setUserProfile: (profile: ProfileDataType) => void
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}

export type CommonPropsType = RouteComponentProps<PathParamsType> & ProfileStatePropsType


export type ProfileStatePropsType = mapStatePropsType & mapDispatchPropsType

// type MapDispatchPropsType = {
//     addPost : () => void
//     onPostChange : (text: string) => void
// }

export type ProfileDataType = {
    
        userId: number
        lookingForAJob: boolean
        lookingForAJobDescription: string
        fullName: string
        contacts: {
            github: string
            vk: string
            facebook: string
            instagram: string
            twitter: string
            website: string
            youtube: string
            mainLink: string
        }
        photos: {
            small: string
            large: string
        }
    
}

class ProfileContainer extends React.Component<CommonPropsType> {

    componentDidMount() {
        // console.log('1111', this.props)
        let userId = this.props.match.params.userId
        if(!userId){
            userId = '2'
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
        // userAPI.getProfile(userId)
        // // axios.get<ProfileDataType>(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        //     .then(response => {
        //         this.props.setUserProfile(response.data);

        //     })
    }

    render() {


        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
            </div>
        )
    }
}

let AuthRedirectComponent = withAuthRedirect<CommonPropsType>(ProfileContainer)

// const mapStateToPropsForRedirect = (state: AppReduxStateType): mapStatePropsType => ({
//     isAuth: state.auth.isAuth
// })

// AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)


const mapStateToProps = (state: AppReduxStateType): mapStatePropsType => ({
    profile: state.ProfilePage.profile,
    status: state.ProfilePage.status
})



// const mapDispatchProps = (dispatch: Dispatch): mapDispatchPropsType => {
//     return {
//         {}
//         // setUserProfile: (profile: ProfileDataType) => {
//         //     dispatch(setUserProfileAC(profile))
//         // getUserProfile: setUserProfileAC(userId)
//         // }
//     }



// let MapDispatchToProps = (dispatch: Dispatch) : MapDispatchPropsType => {
//     return {
//         addPost : () => {
//             dispatch(addPostActionCreator())
//         },
//         onPostChange : (text: string) => {

//             dispatch(updateNewPostAC(text))
//         }




// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent as unknown as WithRouterComponentType)
//  type WithRouterComponentType = ComponentType<RouteComponentProps<any, any, unknown>>

// export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus }),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)