import React ,{useState} from 'react'
import './Login.css';
import Registration from './Registration';
import {Link} from 'react-router-dom';
function Login() {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    // const [allEntry,setAllEntry]=useState([]);
    // const submitForm=(e)=>{
    //     e.preventDefault();
    //     const newEntry={username:username,password:password};
    //     setAllEntry([...allEntry,newEntry]);
    //     console.log(allEntry);
    // }
    const [first,setFirst]=useState("true");
    const submitForm=(e)=>{
        e.preventDefault();
        setFirst(false);
        if(!first){
            return <Registration/>;
        }
    }
    return (
        <>
            <div className="login">
                <form action="" >
                        <label htmlFor="username" className="userlbl">Username:</label>
                        <input 
                            type="email" 
                            placeholder="Enter Your Email" 
                            id="username" name="username" 
                            value={username} 
                            autoComplete="off" 
                            onChange={(e)=>{
                                setUsername(e.target.value);
                            }}
                        />
                        <label 
                            htmlFor="pswd" 
                            className="pswdlbl">
                            Password:
                        </label>
                        <input 
                            type="password" 
                            placeholder="Enter Your Password" 
                            id="pswd" name="pswd" 
                            value={password} 
                            autoComplete="off" 
                            onChange={(e)=>{
                                setPassword(e.target.value);
                            }} />
                            <Link to="/Registration">
                                <input 
                                    type="submit" 
                                    value="Log In" 
                                    className="submit" 
                                    onSubmit={submitForm}
                                    />
                            </Link>

                                
                </form>
            </div>
        </>
    );
}

export default Login
