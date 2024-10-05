import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate,Outlet } from 'react-router-dom'
import '../../assets/css/login.css'
import { UserAuthContext } from '../../context/userContext';

const Login = () => {
    const context = useContext(UserAuthContext);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
            if (context.user) {
                navigate("/")
            }
    })

    const userLogin = async(e) => {
        e.preventDefault();
       try {
        await context.Login(email,password)
        
       } catch (error) {
          window.alert(error)
          console.log(error);
          
       }
    }
    return (
        <>
            <div className="login-container">
                <div className="login-form">
                    <h1>Login</h1>
                    <form action="/login" method="post" onSubmit={userLogin}>
                        <div className="inputBox">
                            <span className="fas fa-envelope"></span>
                            <input type="email" id="email" name="email" required onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                        </div>
                        <div className="inputBox">
                            <span className="fas fa-eye"></span>
                            <input type="password" id="pass" name="password" required onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                        </div>
                        <button type="submit" className='btn btn-warning'>Login</button>
                    </form>
                    <div className="sign-up-link ">
                        <p>Don't have account? <Link to="/signup">Sign UP</Link></p>
                    </div>
                </div>
            </div>
            <Outlet/>
        </>
    )
}

// export const LogOutUser=()=>{
//     const context = useContext(UserAuthContext);
//       return context.LogOut();
// }

export default Login