import React, { useState } from "react";

const Signup = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const collectData = async () => {
        console.warn(name, email, password)
        let result = await fetch('http://localhost:5000/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application'
            },
        })
        result = await result.json()
        console.warn(await result);
    }
    return (
        <div className="register">
            <h1>Register</h1>
            <input className="inputBox" type="text" placeholder="NAME" value={name} onChange={(e) => setName(e.target.value)} />
            <input className="inputBox" type="email" placeholder="EMAIL" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="inputBox" type="password" placeholder="PASSWORD" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="button" onClick={collectData} className="registerbutton">Sign Up</button>
        </div>
    )
}

export default Signup;