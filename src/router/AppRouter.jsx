import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Weather from '../components/Weather';
import { authentication } from '../firebase.config';
import { PrivateRouter as PriR} from './PrivateRouter';
import { PublicRouter as PubR } from './PublicRouter';

const AppRouters = () => {

    const [ isAuth, setIsAuth ] = useState( false )

    onAuthStateChanged( authentication, 
        user => setIsAuth( true ) )

    /* const { isNavBar } = useContext( General )

    useEffect( () =>{
        //console.log( isNavBar );
    },[ isNavBar ]) */

    return (
        <BrowserRouter>
            
            <Routes>
                <Route path="/" element={ <h1> house </h1> }/>
				<Route path="/sing-in" 
                    element={ 
                        <PubR> <h1> sing up </h1> </PubR> 
                    }
                    />
				<Route path="/sing-up" 
                    element={ 
                        <PubR> <h1> sing up </h1> </PubR> 
                    }
                    />
				<Route path="/create-teacher" 
                    element={ 
                        <PriR isAuth={isAuth}> <h1> ct </h1> </PriR>
                    }/>
				<Route path="/create-class" 
                    element={ 
                        <PriR isAuth={isAuth}> <h1> ct </h1> </PriR>
                    }/>
				<Route path="/search" element={ <h1> busca </h1> }/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouters;