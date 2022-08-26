import React from 'react';

import '../styles/sass/SingIn.scss'

import { useFormik } from 'formik';
import * as yup from 'yup'; 
import { useDispatch } from 'react-redux';

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { loginGoogleAsync, logoutAsync } from '../redux/actions/actionLogin';


const SingIn = () => {
    const nav = useNavigate()
    const dispatch = useDispatch();

    const rePassword = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{5,}$/
    const formik = useFormik({
        initialValues: {
            email: '',
            pass: '',
        },
        validationSchema: yup.object({
            email: yup.string().email().required(),
            pass: yup.string().matches(rePassword).required()
        }),
        onSubmit: ( data ) =>{
            console.log( data )
            /*
                puedo colocar la accion para que entre a
                la base de datos
            */
        },
    })

    return (
        <div className='sing-in-up'>
            <h1>Ingresar</h1>
            <form className='form' 
                onSubmit={formik.handleSubmit}
                onChange={ formik.handleChange}
                >
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
                <label htmlFor="pass">Password</label>
                <input type="password" name="pass" id="pass" />
                <button type="submit">Sing In</button>
            </form>

            <div className="sing-other">
                <FcGoogle size={30} onClick={ ()=> dispatch( loginGoogleAsync() ) }/>
                <FaFacebook size={30} color={'#2774c6'}/>
            </div>
            <button onClick={()=>{ dispatch( logoutAsync() ) }}>Log Out</button>
            <h2>don’t have account? <a onClick={()=> nav('/sing-up')}>SingUp</a></h2>
        </div>
    );
};

export default SingIn;