import { Link } from "react-router-dom";
import FormField from "../../components/FormField/FormField";
import './Login.css';


function Login() {
   
    return (
        <div className="login-container relative">
            <div className="form-container">
                <h1>Log in</h1>
                <form className='login-form'>
                    <FormField
                        type='text'
                        label='Email'
                        id='email'
                        placeholder='Email'
                        name="email" />
                    <FormField
                        type='password'
                        label='Password'
                        id='password'
                        placeholder='Password'
                        name="password"/>
                    <button className='login-button'>Log In</button>
                </form>
                <p>
                    Not a member?
                    <span className='line'>
                        <Link to="/signup">
                            Sign up here
                        </Link>
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Login