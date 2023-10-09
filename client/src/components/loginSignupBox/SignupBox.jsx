import React, { useState } from 'react';
import { useSignup } from "../../hooks/useSignup"
import './loginSignupBox.css';
import { Link } from 'react-router-dom';

const SignupBox = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const {signup, error, isLoading} = useSignup()

    const handleSubmitSignup = async (e) => {
        e.preventDefault()
    
        await signup(username, email, password)
      }
  return (
    <div className='loginSignupBox'>
        <div className="wrapper">
                <h2>Registration</h2>
                <form onSubmit={handleSubmitSignup}  enctype="multipart/form-data">
                    <div className="input-box">
                        <input type="text" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} value={username} />
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Create Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                    </div>
                    <div className="policy">
                        <input type="checkbox"required />
                        <h3>I accept all terms & condition</h3>
                    </div>
                    <div className="input-box button">
                        <input type="Submit" value="Register Now"  disabled={isLoading}/>
                        {error && <div className="error">{error}</div>}
                    </div>
                    <div className="text">
                        <h3>Already have an account? <button className='button'><Link to={'/login'}>Login now</Link></button></h3>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default SignupBox