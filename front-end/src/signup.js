import React,{useState} from "react";

const Signup = () => {
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const collectData=()=>{
        console.warn(name,email,password)
    }
    return (
        <div className="register">
            <h1>Register</h1>
            <input className="inputBox" type="text" placeholder="NAME" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input className="inputBox" type="email" placeholder="EMAIL" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input className="inputBox" type="password" placeholder="PASSWORD" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button type="button" onClick={collectData} className="registerbutton">Sign Up</button>
        </div>
    )
}

export default Signup;