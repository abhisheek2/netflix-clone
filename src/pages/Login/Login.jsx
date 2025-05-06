import React, { use, useState } from 'react'
import Logo from '../../assets/logo.png'
import './Login.css'
import { login,signup } from '../../firebase'
import { endAt } from 'firebase/firestore'



const Login = () => {

  const [signState, setSignState] = useState('Sign In');
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const user_auth  = async (event)=>{

    event.preventDefault();
    if (signState === 'Sign In') {
      await login(email,password)
    }
    else {
      await signup(name,email,password);
    }
  }


  return (
    <div className="login">
      <img src={Logo} className='login-logo' alt="" />

      <div className="login-form">
        <h1> {signState} </h1>
        <form method="post">
          {signState === "Sign Up"? <input type='text' placeholder='Your name' value={name} onChange={(e)=> setName(e.target.value)} /> : <></> }
          <input type="email" placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} />
          <input type="password" placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)} />

          <button onClick={user_auth} type='submit'>Sign Up</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox"  />
              <label>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">

          {signState =='Sign In' ?  <p>New to Netflix? <span onClick={() => {setSignState('Sign Up')}}>Sign Up Now</span></p> : <p>Alredy have account? <span onClick={() => setSignState('Sign In')}>Sign In Now</span></p>}
            
        </div>
      </div>
    </div>
  )
}

export default Login