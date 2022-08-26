import React from 'react';

import '../styles/sass/SingIn.scss'

import { useFormik } from 'formik';
import * as yup from 'yup'; 
import { useDispatch } from 'react-redux';

const SingIn = () => {

    //const dispatch = useDispatch();

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
            //dispatch( AgregarDatos( data ) )
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
        </div>
    );
};

export default SingIn;