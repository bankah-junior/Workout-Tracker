import React, { useState } from 'react';
import { useLogin } from "../../hooks/useLogin"
import './loginSignupBox.css';
import { Link } from 'react-router-dom';

const LoginBox = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()

    const handleSubmitLogin = async (e) => {
        e.preventDefault()
    
        await login(email, password)
    }

  return (
    <div className='loginSignupBox'>   
        <div className={"wrapper"}>
            <h2>Login</h2>
            <form onSubmit={handleSubmitLogin}>
                <div className="input-box">
                    <input type="email" placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                </div>
                <div className="input-box button">
                    <input type="Submit" value="Login"  disabled={isLoading}/>
                    {error && <div className="error">{error}</div>}
                </div>
                <div className="text">
                    <h3>Not having an account? <button className='button'><Link to={'/signup'}>Register now</Link></button></h3>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginBox