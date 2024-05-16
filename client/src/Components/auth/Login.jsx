import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../route';

const Login = () => {
    const navigate = useNavigate();

    const emailRef = useRef("");
    const passwordRef = useRef("");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleFormSubmit = () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        let valid = true;

        if (!validateEmail(email)) {
            setEmailError("Please enter a valid email address.");
            valid = false;
        } else {
            setEmailError("");
        }

        if (!password) {
            setPasswordError("Password cannot be empty.");
            valid = false;
        } else {
            setPasswordError("");
        }

        if (valid) {
            axios.post(import.meta.env.VITE_BACKEND_URL + '/login', { "email": email, "password": password }).then((response) => {
                if (response) {
                    console.log(response);
                    localStorage.setItem('token', response.data.token);
                    alert('Login successfully');
                    navigate(ROUTE.HOME);
                }
            }).catch((error) => {
                alert('Login failed');
                console.log('error', error);
            });
        }
    };

    return (
        <div className='flex justify-center items-center h-screen bg-slate-900'>
            <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="px-6 py-4">
                    <div className="flex justify-center mx-auto">
                        <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="" />
                    </div>

                    <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h3>

                    <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p>

                    <form onSubmit={(e) => {
                        e.preventDefault();
                        handleFormSubmit();
                    }}>
                        <div className="w-full mt-4">
                            <input ref={emailRef} className="block w-full text-white px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email Address" aria-label="Email Address" />
                            {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
                        </div>

                        <div className="w-full mt-4">
                            <input ref={passwordRef} className="block w-full text-white px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" aria-label="Password" />
                            {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <a href="#" className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Forget Password?</a>

                            <button type="submit" className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>

                <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                    <span className="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>

                    <a href="/register" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                        Sign up
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Login;
