import React, { useContext, useEffect, useState } from 'react'
import '../../assets/css/login.css'
import { UserAuthContext } from '../../context/userContext'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
  const context = useContext(UserAuthContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const createUser = async (e) => {
    e.preventDefault();
    try {
      await context.SignUp(email, password)
    } catch (error) {
      window.alert(error)
      console.log(error);

    }
    console.log(context);
  }
  useEffect(() => {
    if (context.user) {
      navigate("/")
    }
  })

  return (
    <>
      <div className="signup-container">
        <div className="signup-form ">
          <h1 className='mb-5'>Sign Up</h1>
          <form onSubmit={createUser}>
            <div className="inputBox">
              <span className="fas fa-user"></span>
              <input type="text" id="username" name="username" required placeholder="Username" />
            </div>
            <div className="inputBox">
              <span className="fas fa-envelope"></span>
              <input
                type="email"
                name="email" required placeholder="Email"
                onChange={(e) => { setEmail(e.target.value) }} />
            </div>
            <div className="inputBox">
              <span className="fas fa-eye"></span>
              <input type="password"
                name="password"
                required placeholder="Password"
                onChange={(e) => { setPassword(e.target.value) }} />
            </div>
            <button type="submit"
              className="signup-button btn btn-warning p-4"
            >Sign Up</button>
          </form>
          <div className="sign-up-link ">
            <p>Alrady Have Account? <Link to="/login">Login</Link></p>
          </div>
        </div>
      </div>
    </>)
}

export default SignUp