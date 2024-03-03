import React from 'react'

const SignUp = () => {
    const handleRegistration = (e) => {
        e.preventDefault()
        let formdata = new FormData(e.target)
        let formObject = Object.fromEntries(formdata.entries())
        console.log(formObject)
    }
    return (
        <div className="signup-form">
            <div className="title">Signup</div>
            <form action="#" onSubmit={handleRegistration}>
                <div className="input-boxes">
                    <div className="input-box">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Enter your name" name='name' required />
                    </div>
                    <div className="input-box">
                        <i className="fas fa-envelope"></i>
                        <input type="text" placeholder="Enter your email" required name='email' />
                    </div>
                    <div className="input-box">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Enter your password" required name='password' />
                    </div>
                    <div className="button input-box">
                        <input type="submit" value="Submit" />
                    </div>
                    <div className="text sign-up-text">Already have an account? <label htmlFor="flip">Login now</label></div>
                </div>
            </form>
        </div>
    )
}

export default SignUp
