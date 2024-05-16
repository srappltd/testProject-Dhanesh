import { createSlice } from "@reduxjs/toolkit";

const UserSlice =  createSlice({
    name:"users",
    initialState:{
        users:[],
    },
    reducers:{
        addUsers:(state,action)=>{
            state.users.push(action.payload)
        },
        deleteUser:(state,action)=>{
            // state.users = state.users.splice(state.users.indexOf(action.payload),1)
            state.users = state.users.filter(item=>item.id != action.payload)
        }
    }
})

export const  UserReducer =  UserSlice.reducer

export const {addUsers,deleteUser} = UserSlice.actions