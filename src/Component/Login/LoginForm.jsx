import React from 'react'
import axios from 'axios'
const LoginForm = () => {
    const handleSignIn = async (e) => {
        e.preventDefault()
        let formdata = new FormData(e.target)
        let formObj = Object.fromEntries(formdata.entries())
        console.log(formObj)
        const response = await axios.post('http://localhost:5000/login', JSON.stringify(formObj), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response) {
            alert('login Successfully')
        } else {
            alert('invalid email or password')
        }

        console.log(response)
    }
    return (

        <div className="login-form">
            <div className="title">Login</div>
            <form action="#" onSubmit={handleSignIn}>
                <div className="input-boxes">
                    <div className="input-box">
                        <i className="fas fa-envelope"></i>
                        <input type="text" placeholder="Enter your email" required name='email' />
                    </div>
                    <div className="input-box">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Enter your password" required name='password' />
                    </div>
                    <div className="text"><a href="#">Forgot password?</a></div>
                    <div className="button input-box">
                        <input type="submit" value="Submit" />
                    </div>
                    <div className="text sign-up-text">Don't have an account? <label htmlFor="flip">Sigup now</label></div>
                </div>
            </form>
        </div>

    )
}

export default LoginForm
