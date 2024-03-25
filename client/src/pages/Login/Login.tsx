import { Link } from "react-router-dom";
import FormField from "../../components/FormField/FormField";
import './Login.css';
import { useForm } from "react-hook-form";
import axios from "axios";



function Login() {
  const {handleSubmit} = useForm()

  const onSubmit = () => {
    axios.get("https://upbeat-server.onrender.com/api/v1/user/login")
    .then(res => console.log(res))
  }

    return (
        <div className="login-container relative">
            <div className="form-container">
                <h1>Log in</h1>
                <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
                    <FormField
                        type='text'
                        label='Email'
                        id='email'
                        placeholder='Email'
                        name="email" 
                        />
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