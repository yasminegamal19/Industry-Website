import React from 'react';
import { useState, useEffect } from 'react';
import './ToDoList.modules.css';

const ToDoList = () => {
    const [todos, setTodos] = useState([]);
    const baseUrl = "https://jsonplaceholder.typicode.com";

    useEffect(() => {
        fetch(`${baseUrl}/todos`)
            .then((res) => res.json())
            .then((data) => {
                setTodos(data);
            })
    }, []);
    console.log(todos)

    return (
        <div>
            <div className='todos'>
                <div className='container'>
                    <h1 className='text-center pb-3 pt-3'>To-Do List</h1>
                    <div className='row'>
                        {todos.slice(0, 9).map((todo) => (
                            <div className='col-xl-4 col-12 mb-4' key={todo?.id} >
                                <div className="item p-3 d-flex flex-column justify-content-between">
                                    <h4>{todo.title}</h4>
                                    <div className='check'>
                                        {todo?.completed ? (
                                            <p className="completed">
                                                <i className="bi bi-bag-check"></i> completed
                                            </p>
                                        ) : (
                                            <p className="uncompleted">
                                                <i className="bi bi-bag-x"></i> uncompleted
                                            </p>
                                        )}
                                    </div>

                                    {/* <div className="check">
           <span>{`${todo?.completed === true ?<i class="bi bi-bag-check"></i> : <i class="bi bi-bag-x"></i> }`}</span>
          <p className={`${todo?.completed === true ? "completed" : "uncompleted"} `}>{`${todo?.completed === true ? "completed" : "uncompleted"} `}</p>
          </div> */}
                                </div>
                            </div>))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ToDoList;
