import React from "react";

import style from './users.module.css'
import userPhoto from '../../assets/images/1.jpeg'
import { UserPropsType } from "./Users-reducer";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { userAPI } from "../../api/API";

type UsersProps = {
    users: UserPropsType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    // toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: number[]
}

let Users = (props: UsersProps) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)


    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return (
        <>
            <div>
                {pages.map((p, index) => {
                    return <span key={index} className={props.currentPage === p ? style.selectedPage : ''} onClick={() => { props.onPageChanged(p) }}>{p}</span>

                })}
            </div>
            <div>
                {/* <button onClick={() => this.getUsers()}>Get users</button> */}


                {
                    props.users.map(el => <div key={el.id}>
                        <span>
                            <NavLink to={'/profile/' + el.id}>
                                <div>
                                    <img alt='img' src={el.photos.small !== null ? el.photos.small : userPhoto} />
                                </div>
                            </NavLink>

                            <div>
                                {el.followed

                                    ? <button disabled={props.followingInProgress.some(id => id === el.id)} onClick={() => {
                                       
                                        props.unfollow(el.id)

                                    }}>Unfollow</button>

                                    : <button disabled={props.followingInProgress.some(id => id === el.id)} onClick={() => {
                                       props.follow(el.id)

                                    }}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{el.name}</div>
                                <div>{el.status}</div>
                            </span>
                            <span>
                                <div>{'el.location.country'}</div>
                                <div>{'el.location.city'}</div>
                            </span>
                        </span>
                    </div>)
                }
            </div>
        </>
    )
}

export default Users