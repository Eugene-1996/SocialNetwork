import { GetUserType, userAPI } from "../../api/API"
import { ActionsTypes } from "../../redux/redux-store"

let initialState: UsersReducerPropsType = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 4,
  isFetching: false,
  followingInProgress: [2, 3]
}
export type UserPropsType = {

  id: number,
  followed: boolean,
  name: string,
  photos: {
    small: string,
    large: string
  }
  status: string,
  location: {
    city: string,
    country: string
  }

}
export type UsersReducerPropsType = {
  users: UserPropsType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: number[]
}


const usersReducer = (state: UsersReducerPropsType = initialState, action: ActionsTypes): UsersReducerPropsType => {


  switch (action.type) {
    case "FOLLOW":
      return { ...state, users: state.users.map(el => el.id === action.userId ? { ...el, followed: true } : el) }

    case "UNFOLLOW":
      return { ...state, users: state.users.map(el => el.id === action.userId ? { ...el, followed: false } : el) }
    case "SET-USERS":
      return { ...state, users: action.users }
    case 'SET-CURRENT-PAGE':
      return { ...state, currentPage: action.currentPage }
    case 'SET-USERS-TOTAL-COUNT':
      return { ...state, totalUsersCount: action.count }
    case 'TOGGLE-IS-FETCHING':
      return { ...state, isFetching: action.isFetching }
    case 'FOLLOWING-IN-PROGRESS':
      return { ...state, followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id !== action.userId) }
    default:
      return state
  }
}

export const followAC = (userId: number) => {
  return { type: "FOLLOW", userId } as const
}
export const unfollowAC = (userId: number) => {
  return { type: "UNFOLLOW", userId } as const
}

export const setUsersAC = (users: UserPropsType[]) => {
  return { type: 'SET-USERS', users } as const
}

export const currentPageAC = (currentPage: number) => {
  return { type: 'SET-CURRENT-PAGE', currentPage } as const
}
export const setTotalUsersCountAC = (totalCount: number) => {
  return { type: 'SET-USERS-TOTAL-COUNT', count: totalCount } as const
}
export const toggleIsFetchingAC = (isFetching: boolean) => {
  return { type: 'TOGGLE-IS-FETCHING', isFetching } as const
}
export const toggleFollowingProgressAC = (isFetching: boolean, userId: number) => {
  return { type: 'FOLLOWING-IN-PROGRESS', isFetching, userId } as const
}


export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
  return (dispatch: any) => {
    dispatch(toggleIsFetchingAC(true));


    userAPI.getUsers(currentPage, pageSize).then((data: GetUserType) => {
      dispatch(toggleIsFetchingAC(false));
      dispatch(setUsersAC(data.items))
      dispatch(setTotalUsersCountAC(data.totalCount))
    })
  }
}


export const unfollowThunkCreator = (userId: number) => {
  return (dispatch: any) => {
    toggleFollowingProgressAC(true, userId)

    userAPI.unfollow(userId)    

        .then(response => {

            if (response.data.resultCode === 0) {
                unfollowAC(userId)
            }
            toggleFollowingProgressAC(false, userId)

        })
  }
}



export const followThunkCreator = (userId: number) => {
  return (dispatch: any) => {
   toggleFollowingProgressAC(true, userId)

    userAPI.follow(userId)
      .then(response => {

        if (response.data.resultCode === 0) {
          followAC(userId)
        }
        toggleFollowingProgressAC(false, userId)
      })
  }
}

export default usersReducer