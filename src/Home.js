import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from './userReducer';

export default function Home() {
    const users = useSelector((state)=> state.users);
    console.log(users);

    const dispatch = useDispatch()
    const handleDelete=(id)=>{
        dispatch(deleteUser({
            id:id
        }))
    }
   
  return (
    <div className='container p-5'>
        <h2>Crud App with JSON server</h2>
        <Link to='/create' className='btn btn-success my-3'>Create +</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((item,index)=>(
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>
                                <Link to={`/edit/${item.id}`} className='btn btn-primary btn-sm'>Edit</Link>
                                <button onClick={()=> handleDelete(item.id)} className='btn btn-danger btn-sm delete-btn'>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
       
    </div>
  )
}
