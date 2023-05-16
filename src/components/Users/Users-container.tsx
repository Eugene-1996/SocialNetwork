import { connect } from 'react-redux';
import React from 'react';
import { AppReduxStateType } from '../../redux/redux-store';
import { currentPageAC, followAC, getUsersThunkCreator, setTotalUsersCountAC, setUsersAC, toggleFollowingProgressAC, toggleIsFetchingAC, unfollowAC, UserPropsType } from './Users-reducer';
import { Dispatch, compose } from 'redux';
import Users from './Users';
import axios from 'axios';
import Preloader from '../common/Preloader/Preloader';
import { GetUserType, userAPI } from '../../api/API';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../../hoc/WithAuthRedirect';
type mapStatePropsType = {
    users: UserPropsType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}


type mapDispatchPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users : UserPropsType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

export type UsersStatePropsType = mapStatePropsType & mapDispatchPropsType


class UsersContainer extends React.Component<UsersStatePropsType> {

    // constructor(props: any) {
    //     super(props);
        // if (this.props.users.length === 0) {

    componentDidMount() { 
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        // this.props.toggleIsFetching(true);
        
        
        // userAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data: GetUserType) => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(data.items)
        //     this.props.setTotalUsersCount(data.totalCount)
        // })
        }

        
    // }
    onPageChanged = (pageNumber: number) => {

        this.props.getUsers(pageNumber, this.props.pageSize)
        console.log(pageNumber, this.props.pageSize, 'onPageChanged')
        // this.props.setCurrentPage(pageNumber)
        // this.props.toggleIsFetching(true)
        
        // userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items)
        // })         
    }



render() {

   

    return (
    <>
    {this.props.isFetching ? <Preloader/> : null}
    <Users
     totalUsersCount={this.props.totalUsersCount} 
    pageSize={this.props.pageSize}
    currentPage={this.props.currentPage}
    onPageChanged={this.onPageChanged}
    users={this.props.users}
    follow={this.props.follow}
    unfollow={this.props.unfollow}
    // toggleFollowingProgress = {this.props.toggleFollowingProgress}
    followingInProgress = {this.props.followingInProgress}
    />
    </>
)}
}



const mapStateProps = (state: AppReduxStateType): mapStatePropsType  => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

// const mapDispatchProps = (dispatch: Dispatch) => {
//     return 
// }


export default 
// compose<React.ComponentType>
(connect(mapStateProps, {
    follow: followAC,
    unfollow: unfollowAC,
    setUsers: setUsersAC,
    setCurrentPage: currentPageAC,
    setTotalUsersCount : setTotalUsersCountAC,
    toggleIsFetching: toggleIsFetchingAC,
    toggleFollowingProgress: toggleFollowingProgressAC,
    getUsers: getUsersThunkCreator 
})
// withRouter,
// withAuthRedirect
)
(UsersContainer);
