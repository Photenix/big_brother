import React, { useState } from 'react';

// import { FaHome } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { VscMenu } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";

import '../../styles/sass/NavHome.scss'


const NavButton = ({ title, link }) => {
    const nav = useNavigate()

    const handleOnClick = () => {
        nav('/'+link)
    }

    return(
        <button onClick={handleOnClick}>{title}</button>
    )
}

const NavHomeOpen = ({ isOpen = false, handleOnClick = ()=>{} }) =>{

    const style ={
        cursor: "pointer"
    }

    const Buttons =[
        [ 'Inicio', '' ],
        [ 'Monitor', 'create-teacher' ],
        [ 'Clases', 'create-class' ],
        [ 'Monitoria', 'search' ]
    ]

    return(
        <>
        <nav className="nav_home" open={isOpen}>
            <IoMdClose size={40} onClick={ handleOnClick } style={style}/>
            {
                Buttons.map( list => <NavButton title={list[0]} link={list[1]}/>)
            }
        </nav>
        </>
    )   
}

const NavHome = () => {
    const [isOpen, useIsOpen] = useState(false)

    const handleOnClick = () => {
        useIsOpen( !isOpen )
    }

    return (
        <>
        {
            isOpen
            ?<NavHomeOpen isOpen handleOnClick={handleOnClick}/>
            :<VscMenu size={40} className='nav_button' onClick={ handleOnClick }/>
        }
        </>
    );
};

export default NavHome;