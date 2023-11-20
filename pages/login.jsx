import React from "react";
import Head from "next/head";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const Login = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    const [login, setLogin] = useState(false);

    const handleLogin = async () => {
        const res = await axios.post(`/api/user/login`, {
            email,
            password,
        });
        if (res?.data) {
            Cookies.set("user", res.data.token, { expires: 7 });
            alert(res.data.msg);
            router.back();
        }
    }

    const handleSignup = async () => {
        const res = await axios.post(`/api/user/register`, {
            name,
            email,
            password,
        });
        if (res?.data) {
            Cookies.set("user", res.data.token, { expires: 7 });
            alert(res.data.msg);
            router.back();
        }
    }

    const handleToggle = () => {
        setLogin(!login);
    }

    return (
        <div>
            <Head>
                <title>OYO - Login !</title>
            </Head>
            <div className="flex h-screen justify-center items-center relativ bg-login-background bg-no-repeat bg-cover opacity-85">
                <div className=" absolute w-full top-10 px-20 flex items-center text-white">
                    <h2 className="text-4xl font-bold mr-2">OYO</h2>
                    <p className=" font-bold text-xl  ">
                        Hotels and homes across 800 cities, 24+ countries
                    </p>
                </div>
                <div className="flex justify-center items-center w-9/12">
                    <div className=" text-white">
                        <p className=" font-bold text-4xl text-justify">
                            There’s a smarter way to OYO around
                        </p>
                        <p className=" text-2xl mt-5 text-justify">
                            Sign up with your phone number and get exclusive access to
                            discounts and savings on OYO stays and with our many travel
                            partners.
                        </p>
                    </div>
                    <div className="mt-14 ml-5 w-10/12 border-2 border-red-500 bg-white ">
                        <p className="h-10 px-10 text-sm font-bold text-white flex items-center bg-gradient-to-r from-red-500 to bg-pink-800">
                            Sign up and get RS 500 OYO money
                        </p>
                        <div className="px-10">
                            <h3 className="text-3xl font-bold my-5">Login / Signup</h3>
                            <p className=" font-bold text-lg mb-1">
                                Please enter your phone number to continue
                            </p>
                            {
                                login ? " " : (<input
                                    type="text"
                                    placeholder="Enter your name..."
                                    className=" outline-none border my-3 border-black px-3 py-1 w-96 h-10"
                                    onChange={(e) => setName(e.target.value)}
                                />)
                            }
                            <input
                                type="email"
                                placeholder="Enter your email..."
                                className=" outline-none border my-3 border-black px-3 py-1 w-96 h-10"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Enter your password..."
                                className=" outline-none border my-3 border-black px-3 py-1 w-96 h-10"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                className=" w-96 h-14 text-lg font-bold bg-red-500 hover:cursor-pointer hover:bg-red-600 text-white my-5 rounded-lg"
                                onClick={login ? handleLogin : handleSignup}
                            >
                                {
                                    login ? "Login" : "Signup"
                                }
                            </button>
                            <p className=" my-1 text-xl">
                                <span>
                                    {login
                                        ? "Don`t have an account ?"
                                        : "Already have an account ?"
                                    }
                                </span>
                                <span
                                    className=" ml-1 border-b-2 border-red-500 text-red-600 pb-1 hover:cursor-pointer"
                                    onClick={handleToggle}
                                >
                                    {" "}
                                    {login ? "Sign Up" : "Login"}
                                </span>
                            </p>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;
