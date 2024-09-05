import React, { useState } from 'react';
import { signInWithPhoneNumber } from 'firebase/auth';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { auth } from './firebaseconfig';
import Nav from './Nav';

const Login = () => {
    const [phone, setPhone] = useState("");
    const [user, setUser] = useState(null);
    const [otp, setOtp] = useState("");

    const sendOtp = async () => {
        try {
            const confirmation = await signInWithPhoneNumber(auth, phone);
            setUser(confirmation);
        } catch (err) {
            console.error(err);
        }
    };

    const verifyOtp = async () => {
        try {
            await user.confirm(otp);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <Nav />
            <div className='bg-rose-50 h-screen flex flex-col justify-center items-center mt-6'>
                <div className='h-96 flex flex-col w-96 bg-rose-200 rounded-lg'>
                    <h1 className='font-bold text-3xl text-center mt-5'>Login <span className='font-normal text-sm'>or</span> Signup</h1>
                    {user == null && (
                        <div className='mt-5 ml-8'>
                            <PhoneInput
                                country={'us'}
                                value={phone}
                                onChange={phone => setPhone("+" + phone)}
                                placeholder='Mobile Number'
                                buttonStyle={{ backgroundColor: "white" }}
                                inputStyle={{ width: "320px" }}
                            />
                        </div>
                    )}
                    <h1 className='text-sm text-gray-700 mt-4 text-center'> By clicking continue, you can <span className='text-rose-500 font-bold'>Login to this myntra clone</span></h1>
                    {!otp && (
                        <button onClick={sendOtp} className="bg-rose-500 rounded-md hover:bg-rose-800 w-80 text-white mt-4 text-center font-bold py-2 px-4 ml-8">
                            Continue
                        </button>
                    )}
                    {user && (
                        <input
                            onChange={(e) => setOtp(e.target.value)}
                            className='bg-gray-100 border border-spacing-1 text-gray-900 font-normal outline-none text-sm rounded-sm block w-80 p-2.5 mt-2 ml-8'
                            placeholder='Enter OTP'
                            required
                        />
                    )}
                    {otp && (
                        <button onClick={verifyOtp} className="bg-rose-400 w-80 text-white mt-4 text-center font-bold py-2 px-4 ml-8">
                            Verify OTP
                        </button>
                    )}
                    <h1 className='text-sm text-gray-700 mt-4  text-center'> Have problem logging in? <span className='text-rose-500 font-bold'>Click continue</span></h1>
                </div>
            </div>
        </>
    );
};

export default Login;
