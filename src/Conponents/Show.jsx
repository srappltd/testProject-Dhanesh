import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserReducer, addUsers, deleteUser } from '../Store/Reducers/UserReducer'

const Show = () => {
    const dispatch = useDispatch()
    const {users} = useSelector(state=>state.UserReducer)
    const [user,setUser] = useState(users)
    const deleteHandler = (id)=>{
        setUser(newArr=>newArr.filter(arr=>arr.id != id))
        dispatch(deleteUser(id))
    }
  return (
    <div className='w-full grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2 md:px-10 sm:px-5 px-3 py-5'>
        {user.length > 0 ? user.map(user=>(
            <div className='w-full p-4 border font-medium'>
                <h1 className='uppercase'>Name: <span className='font-normal'>{user.name}</span></h1>
                <h1>Email: <span className='font-normal'>{user.email}</span></h1>
                <h1>Contact: <span className='font-normal'>{user.contact}</span></h1>
                <button onClick={()=>deleteHandler(user.id)} className='w-full text-center py-1 px-3 bg-red-400 mt-3 rounded-sm text-white'>Delete User</button>
            </div>
        )) : <h1 className='font-semibold text-2xl'>Not Users</h1> }
        
    </div>
  )
}

export default Show
