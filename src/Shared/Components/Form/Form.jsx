import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Form = () => {
    const [name, setName] = useState("");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();


    const baseUrl = "https://jsonplaceholder.typicode.com";

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);


        axios.post(`${baseUrl}/users`, {
            name: name,
            username: username,
            email: email,
            phone: phone,
        })
            .then((res) => {
                console.log(res.data);
                toast.success("Data Added Successfully");
                navigate("/users");
            })
        setName("");
        setUserName("");
        setEmail("");
        setPhone("");
                        setLoading(true);

    };

    return (

        <div className="container">
            <h1 className="my-3">Add User</h1>

            <form onSubmit={handleSubmit} className="w-50">
                <input
                    type="text"
                    placeholder="Enter Name"
                    className="form-control mb-3 py-3"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Enter Username"
                    className="form-control mb-3 py-3"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Enter Email"
                    className="form-control mb-3 py-3"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Enter Phone"
                    className="form-control mb-3 py-3"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <button className="btn btn-primary mb-4" > {loading ? "Loading…" : "Add User"}
                </button>
            </form>
        </div>
    );
};

export default Form;
