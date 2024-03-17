import { SubmitHandler, useForm } from 'react-hook-form';
import './Signup.css';
import { Link } from 'react-router-dom';


type formFields = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

function Signup() {
    const { register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm<formFields>();

    const onSubmit: SubmitHandler<formFields> = (data) => {
        console.log(data);
    };

    return (
        <div className="signup-container relative">
            <div className="form-container">
                <h1>Sign up</h1>
                <form className='signup-form' onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="username">
                        Username:
                        <input className='form-input'
                            {...register("username", {
                                required: "Username is required",
                                minLength: {
                                    value: 3,
                                    message: "Username must have at least 3 characters",
                                },
                            })}
                            type="text"
                            id='username'
                            autoComplete='off'
                            placeholder='Username' />
                        {errors.username && <p className="error-message">{errors.username.message}</p>}
                    </label>
                    <label htmlFor="email">
                        E-mail:
                        <input className='form-input'
                            {...register("email", {
                                required: "Email is required",
                                validate: (value) => {
                                    const pattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/
                                    if(!pattern.test(value)) {
                                        return "Invalid Email format";
                                    }
                                    return true;
                                },
                            })}
                            type="email"
                            id='email'
                            autoComplete='off'
                            placeholder='example@domain.com' />
                        {errors.email && <p className="error-message">{errors.email.message}</p>}
                    </label>
                    <label htmlFor="password">
                        Password:
                        <input className='form-input'
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 8,
                                    message: "Password must have at least 8 characters"
                                },
                            })}
                            type="password"
                            id='password' />
                       {errors.password && <p className="error-message">{errors.password.message}</p>}
                    </label>
                    <label htmlFor="confirm">
                        Confirm Password:
                        <input className='form-input'
                            {...register("confirmPassword", {
                                required: "Confirm password is required",
                               validate: {
                                matchesPreviousPassword: (value) => {
                                    const { password } = getValues();
                                    return password === value || "Passwords should match!";
                                  }
                               }
                            })}
                            type="password"
                            id='confirm' />
                        {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}
                    </label>
                    <button className='signup-button'>Sign up</button>
                </form>
                <p>
                    Already have an account?
                    <span className='line'>
                        <Link to="login">
                            Log in
                        </Link>
                    </span>
                </p>
            </div>
        </div>

    )
}

export default Signup