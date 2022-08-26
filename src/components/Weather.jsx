import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import React from 'react';
import { authentication, providerGoogle } from '../firebase.config';
import Search from '../modules/Search';

import '../styles/sass/Weather.scss'


const Weather = () => {

    const handleGoogle = () =>{
        signInWithPopup( authentication, providerGoogle )
            .then( result =>{
                const name = result.user.displayName;
                const email = result.user.email;

                //! result.uid 
                //? utilizar el uid para hacer el usuario general que lleve mas info

            })
            .catch( e => console.error( e ) )
    }

    const existUID = () =>{

    }

    const userState = () =>{
        //? nos trae al usuario auntentificado en este equipo
        onAuthStateChanged( authentication, user =>{
            console.log( user )
        })
    }
    
    return (
        <div className='weather'>
            <Search/>
            <button onClick={ userState } >Auntentificado</button>
            <button onClick={ handleGoogle } >Entrate con google</button>
            <button onClick={ () => { 
                signOut( authentication )
                    .then( out => console.log( out ))
                } } >Salirse</button>
        </div>
    );
};

export default Weather;