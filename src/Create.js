import React, { useState } from 'react';
import { addUser } from './userReducer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Create() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const users = useSelector((state)=> state.users);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(addUser({id:users[users.length - 1].id + 1,name,email}))
        navigate('/')
    }
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-4'>
                <h3 className='mb-3'>Add New User</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" class="form-control" id="name" placeholder='enter name' onChange={e => setName(e.target.value)}/>
                    </div>
                    <div class="my-3">
                        <label htmlFor="email" >Email:</label>
                        <input type="email" class="form-control" id="email" placeholder='enter email' onChange={e=> setEmail(e.target.value)}/>
                    </div>
                    <button type="submit" class="btn btn-info">Submit</button>
                </form>
            </div>
        </div>
    )
}
