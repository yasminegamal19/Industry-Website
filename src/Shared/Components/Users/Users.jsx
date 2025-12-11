import React from 'react';
import { useState, useEffect } from 'react';
import './Users..css';
import axios from 'axios';
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';

const Users = () => {
    const  [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const baseUrl = "https://jsonplaceholder.typicode.com";

    useEffect(() => {
  setLoading(true);

  axios.get(`${baseUrl}/users`)
    .then((res) => {
      setUsers(res.data);
            toast.success("Data Loaded Successfully");

      setLoading(false);
    })
    .catch((err) => {
      console.log("Error:", err);
      setLoading(false);
    });
}, []);

    return (
        <div>
            {loading ? (
        <div className='text-center py-3'>loading...</div>
      ):(
        <div className='users'>
        <div className='container'>
            <div className="header d-flex">
          <h1 className=' pb-3 pt-3'>Users</h1>
          <Link to="/form" className='link'><button className='goto'>Go To Form</button></Link>
          </div>
        <div className='row'>
        {users.slice(0,9).map((user) => (
        <div className='col-xl-4 col-12 mb-4' key={user.id} >
          <div className="item p-3">
          <h3>{user.name}</h3>
          <p className='user-name'>{user.username}</p>
          <p className='email'>{user.email}</p>
          <p className='address'>{user.address.street},{user.address.suite},{user.address.city}</p>
          <p className='phone'>{user.phone}</p>
          </div>
        </div>))}
        </div>
        </div>
        </div>
      )}
        </div>
    );
}

export default Users;
