import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserReducer, addUsers } from '../Store/Reducers/UserReducer'

const Register = () => {
    const {users} = useSelector(state=>state.UserReducer)

    const dispatch = useDispatch()
    const [user,setUser] = useState({name:'',email:'',contact:''})
    const userOnClickHandler = (e)=>{
        const {name,value} = e.target
        setUser({...user,[name]:value})
    }
    const userOnSubmitHandler = (e)=>{
        e.preventDefault()
        const {name,email,contact} = user
        if(name && email && contact){
            dispatch(addUsers({...user,id:nanoid()}))
            console.log(users)
            setUser({name:'',email:'',contact:''})
        }
    }
    // console.log(users)
  return (
    <div className='w-full h-[92vh] px-10 py-5'>
      <h1 className='font-semibold text-2xl'>Register</h1>
      <form onSubmit={userOnSubmitHandler} className='w-[300px] flex flex-col gap-3 mt-4'>
        <div className='flex flex-col'>
            <label htmlFor="">Name</label>
            <input type="text" onChange={userOnClickHandler} value={user.name} className='w-full py-2 px-2 border outline-none' name="name" id="" />
        </div>
        <div className='flex flex-col'>
            <label htmlFor="">Email</label>
            <input type="text" onChange={userOnClickHandler} value={user.email} className='w-full py-2 px-2 border outline-none' name="email" id="" />
        </div>
        <div className='flex flex-col'>
            <label htmlFor="">Contact</label>
            <input type="text" onChange={userOnClickHandler} value={user.contact} className='w-full py-2 px-2 border outline-none' name="contact" id="" />
        </div>
        <button className='w-full py-2 bg-zinc-500 text-white font-medium text-sm'>Add User</button>
      </form>

    </div>
  )
}

export default Register
