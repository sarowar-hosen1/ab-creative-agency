import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import {FaFacebookF, FaGoogle, FaLinkedinIn} from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import logo from '../../images/logos/logo.png'
import { Auth } from './Auth';
import './Login.css';

const Login = () => {
    const auth = Auth();
    
    const history = useHistory()
    const [returnUser, setReturnUser] = useState(true)
    const { register, errors, handleSubmit, watch } = useForm({});
    const password = useRef({});
    password.current = watch("password", "");

    const onSubmit = async data => {
        if(returnUser){
            if(data.email, data.password){
                auth.signIn(data.email, data.password)
            }
        }else{
            if(data.email, data.password, data.name){
                auth.signUp(data.email, data.password, data.name)
            }
        }
    };

    
    return (
        <div className="login-container d-flex align-items-center">
            <div className="login">
                <img onClick={() => history.push('/')} style={{width:'130px', cursor: 'pointer'}} className="img-fluid m-auto d-block" src={logo} alt=""/>
                <h5 className="text-center my-4">{returnUser ? "LOGIN" : 'SIGNUP'}</h5>
                {
                    returnUser ?
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input
                                    name="email"
                                    type="email"
                                    className="form-control"
                                    ref={register({ required: true })} placeholder="Email"
                                />
                                {errors.email && <span>Email is required</span>}
                            </div>
                            <div className="form-group">
                                <input
                                    name="password"
                                    className="form-control"
                                    ref={register({ required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/ })}
                                    placeholder="Password"
                                />
                                {errors.password && <span>Password is required</span>}
                            </div>
                            <input className="btn-brand w-100" type="submit" />
                        </form>
                        :

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input
                                    name="name"
                                    className="form-control"
                                    ref={register({ required: true })}
                                    placeholder="Name"
                                />
                                {errors.name && <span>Name is required</span>}
                            </div>
                            <div className="form-group">
                                <input
                                    name="email"
                                    type="email"
                                    className="form-control"
                                    ref={register({ required: true })} placeholder="Email"
                                />
                                {errors.email && <span>Email is required</span>}
                            </div>
                            <div className="form-group">
                                <input
                                    name="password"
                                    type="password"
                                    className="form-control"
                                    ref={register({ required: "You must specify a password", minLength: { value: 8, message: "Password must have at least 8 characters" } })}
                                    placeholder="Passowrd"
                                />
                                {errors.password && <span>{errors.password.message}</span>}
                            </div>
                            <div className="form-group">
                                <input
                                    name="password_repeat"
                                    type="password"
                                    className="form-control"
                                    ref={register({ validate: value => value === password.current || "The passwords do not match" })}
                                    placeholder="Confirm Password" />
                                {errors.password_repeat && <span>{errors.password_repeat.message}</span>}
                            </div>
                            <input className="btn-brand w-100" type="submit" />
                        </form>
                }
                <p className="text-center text-muted mt-4">or use a social network</p>
                <div className='d-flex justify-content-center'>
                    <i onClick={auth.googleSignIn}><FaGoogle/></i>
                    <i><FaFacebookF/></i>
                    <i><FaLinkedinIn/></i>
                </div>
                <hr/>
                {
                    returnUser ? 
                    <p className="text-center">Not a member yet? <span onClick={() => setReturnUser(false)} className='btn btn-link'>Sign Up</span></p>
                    :
                    <p className="text-center">Already memeber? <span onClick={() => setReturnUser(true)} className='btn btn-link'>Login</span></p>
                }
            </div>
        </div>
    );
};

export default Login;