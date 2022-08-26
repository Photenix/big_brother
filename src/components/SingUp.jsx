import React from 'react';

import '../styles/sass/SingIn.scss'

import { useFormik } from 'formik';
import * as yup from 'yup'; 
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

const SingUp = () => {

    const nav = useNavigate()
    const dispatch = useDispatch();

    const rePassword = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{5,}$/
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            pass: '',
            cpass: ''
        },
        validationSchema: yup.object({
            name: yup.string().min(3).required(),
            email: yup.string().email().required(),
            pass: yup.string().matches(rePassword).required(),
            cpass: yup.string().matches(rePassword).required()
        }),
        onSubmit: ( data ) =>{
            console.log( data )
            //dispatch( AgregarDatos( data ) )
            /*
                puedo colocar la accion para que entre a
                la base de datos
            */
        },
    })

    return (
        <div className='sing-in-up'>
            <h1>Crear cuenta</h1>
            <form className='form' 
                onSubmit={formik.handleSubmit}
                onChange={ formik.handleChange}
                >
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
                <label htmlFor="pass">Password</label>
                <input type="password" name="pass" id="pass" />
                <label htmlFor="cpass">Confirm password</label>
                <input type="password" name="cpass" id="cpass" />
                <button type="submit">Sing Up</button>
            </form>

            <h2>You have account? <a onClick={()=> nav('/sing-in')}>SingUp</a></h2>
        </div>
    );
};

export default SingUp;