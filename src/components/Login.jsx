import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
    return (
        <div className="wrapper">
            <center>
                <form action="">
                    <h2>Login</h2>
                    <div className="inputbox">
                        <input type="text" placeholder="Username" required />
                        <i className='bx bx-user-x' ></i>
                    </div>
                    <div className="inputbox">
                        <input type="password" placeholder="Password  " required />
                        <i className='bx bx-lock-alt'></i>
                        {/* loim */}
                    </div>

                    <div className="remember-forget">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="">Forget password</a>

                    </div>
                    <button type="submit" className="btn">Login</button>
                    <div className="register">
                        <p>Don't have an account?
                            <Link to="/signup">Register</Link>
                        </p>
                    </div>

                </form>
            </center>

        </div>
    )
}
