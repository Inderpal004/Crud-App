import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { updateUser } from './userReducer';

export default function Update() {
    const { id } = useParams();
    const users = useSelector((state) => state.users);
    const existingUser = users.filter((user) => user.id == id);

    const { name, email } = existingUser.length > 0 ? existingUser[0] : { name: '', email: '' };

    const [uname, setName] = useState(name);
    const [uemail, setEmail] = useState(email);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleUpdate=(e)=>{
        e.preventDefault();
       dispatch(updateUser({
        id:id,
        name:uname,
        email:uemail
       }))
       navigate('/')
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-4'>
                <h3 className='mb-3'>Update User</h3>
                <form onSubmit={handleUpdate}>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' className='form-control' id='name' placeholder='enter name' value={uname} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='my-3'>
                        <label htmlFor='email'>Email:</label>
                        <input type='email' className='form-control' id='email' placeholder='enter email' value={uemail} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <button type='submit' className='btn btn-info'> Update</button>
                </form>
            </div>
        </div>
    );
}
