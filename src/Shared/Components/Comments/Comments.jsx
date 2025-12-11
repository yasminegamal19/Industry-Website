import { useState, useEffect } from 'react';
import React from 'react';
import './Comments.modules.css';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const baseUrl = "https://jsonplaceholder.typicode.com";
  
  useEffect(() => {
  setLoading(true);

  fetch(`${baseUrl}/comments`)
    .then((res) => res.json())
    .then((data) => {
      setComments(data);
      setLoading(false);
    })
    .catch((err) => {
      console.log("Error:", err);
      setLoading(false);
    });
}, []);

  console.log(comments)
    return (
        <div>
      {loading ? (
        <div className='text-center'>loading...</div>
      ):(
        <div className='comments'>
        <div className='container'>
          <h1 className='text-center pb-3'>Comments</h1>
        <div className='row'>
        {comments.slice(0,9).map((comm) => (
        <div className='col-xl-4 col-12 mb-4' key={comm.id} >
          <div className="item p-3">
          <h4>{comm.name}</h4>
          <p className='email'>{comm.email}</p>
          <p className='body'>{comm.body}</p>
          </div>
        </div>))}
        </div>
        </div>
        </div>
      )}
    </div>
    );
}

export default Comments;

