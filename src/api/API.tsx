import axios from "axios"
import React from "react"
import { TypeFlags } from "typescript"
import { AuthDataProps } from "../components/Header/HeaderContainer"
import { UserPropsType } from "../components/Users/Users-reducer"
import { ProfileDataType } from "../pages/Profile/ProfileContainer"



export type GetUserType = {
    items: UserPropsType[]
    totalCount: number
    error: string
}

type GetUserStatusType = {
    mediaType: any
}

type updateUserStatusType = {
        resultCode: number
        messages: string[],
        data: {}
}


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { "API-KEY": "h3hrg3h333h3h3h3h3" }
})


export const userAPI = {
    getUsers(pageNumber = 1, pageSize = 10): Promise<GetUserType> {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`,

        ).then(response => response.data)

    },
    follow(userId: number) {
      return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: string){
        return profileAPI.getProfile(userId)
           
    }
}



export const profileAPI = {
    getProfile(userId: string){
        return instance.get<ProfileDataType>(`profile/` + userId)    
    },
    getStatus(userId: string){
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status: string){
        return instance.put<updateUserStatusType>('profile/status', {status: status})
    }
}



export const authAPI = {
   me() {
    return instance.get<AuthDataProps>(`auth/me`)

   }
}

