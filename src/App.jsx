import SigninForm from './Components/Forms/SigninForm/SigninForm'
import { FaUserSecret, FaUserLock, FaEnvelope } from "react-icons/fa";

function App() {


  


  return (
    <>
      <div className='wrappper'>
        <div className="form-box login">
           <form action="">
            <h1>Login</h1>
            <div className="input-box">
                <input type="text"
              placeholder='Username' required />
              <FaUserSecret className="icon"/>

            </div>
            <div className="input-box">
             <input type="Password"
           placeholder='Password' required />
           <FaUserLock className="icon" />
           </div>

           <div className="remember-password">
            <label><input type="checkbox" />
            Remember me
            </label>
            <a href="#">Forgot password?</a>

           </div>
           <button type="submit">Login</button>
            
            <div className="register-link">
              <p>Don't have an account? <a href="#" >Register</a></p>
            </div>
           </form>


        </div>
        
        <div className="form-box SignUp">
           <form action="">
            <h1>Signup</h1>
            <div className="input-box">
                <input type="text"
              placeholder='Username' required />
              <FaUserSecret className="icon"/>

            </div>
            <div className="input-box">
                <input type="Email"
              placeholder='Email' required />
              <FaEnvelope className="icon"/>

            </div>
            <div className="input-box">
             <input type="Password"
           placeholder='Password' required />
           <FaUserLock className="icon" />
           </div>

           <div className="remember-password">
            <label><input type="checkbox" />
            I agree to the terms & conditions
            </label>
            

           </div>
           <button type="submit">Sign up</button>
            
            <div className="register-link">
              <p>Already have an account? <a href="#"  >Login</a></p>
            </div>
           </form>


        </div>
     
      </div>
      
    </>
  )
}

export default App
