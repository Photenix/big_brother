import InputLabel from '../modules/common/InputLabel';
import  '../styles/sass/CreateM.scss'

import { useDispatch } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup'; 


import { SelectLabel } from '../modules/Select';
import ReturnHome from '../modules/common/ReturnHome';

const CreateClass = () => {
    const nav = useNavigate()
    const dispatch = useDispatch();

    const materias = [
        'Matematicas',
        'Ciencia',
        'Ciencia sociales',
        'Tecnologia'
    ]

    const semestre = []

    for (let i = 1; i <= 10; i++) {
        semestre.push(i)
    }


    const rePassword = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{5,}$/
    const formik = useFormik({
        initialValues: {
            name: '',
            'last name': '',
            materia: '',
            semestre: ''
        },
        validationSchema: yup.object({
            name: yup.string().min(3).required(),
            'last name': yup.string().required(),
            materia: yup.string().required(),
            semestre: yup.number().required()
        }),
        onSubmit: ( data ) =>{
            
            data.materia = data.materia.toLowerCase()
            console.log( data )
            //dispatch( AgregarDatos( data ) )
            /*
                puedo colocar la accion para que entre a
                la base de datos
            */
        },
    })

    return (
        <div className="create-m" style={{height:'100vh'}}>
            <ReturnHome/>
            <h1>Crear monitor</h1>
            <form onSubmit={formik.handleSubmit}
                onChange={ formik.handleChange}
                className="create-m">
                <label htmlFor="cedula">Cedula</label>
                <input type="text" name="cedula" id="cedula" />
                <div className="flex-two">
                    <InputLabel type='text' name='name'/>
                    <InputLabel type='text' name='last name'/>
                </div>
                <div className="flex-two">
                    <SelectLabel array={materias} name='materia'/>
                    <SelectLabel array={semestre} name='semestre'/>
                </div>
                <input type="date" name="" id="" />
                <input type="time" name="" id="" />
                <SelectLabel array={materias} name='Salon'/>
                <button type="submit">Crear</button>
            </form>
           
        </div>
    );
};

export default CreateClass;