import {createSlice} from "@reduxjs/toolkit"

const authInfo={token:"", isLoggedIn:false}
const User=createSlice({
    name:"profile",
    initialState:authInfo,
    reducers:{
        userInfo(state,action){
          state.token=action.payload
        }
    }
    
})

export const {userInfo} =User.actions
export default User;