import Select from "../modules/Select";

import '../styles/sass/SearchClass.scss'

import { BiSearch } from "react-icons/bi";
import ReturnHome from "../modules/common/ReturnHome";


const Card = () =>{
    return(
        <div className="card-class">
            <img src="" alt="none" />
            <div className="info">
                <div className="info-name">
                    <p>Encargad@</p>
                    <h3>EL pepe</h3>
                </div>
                <div className="info-date">
                    <div className="time">
                        <h3>Fecha</h3>
                        <h3>Hora</h3>
                    </div>
                    <h2>4</h2>
                </div>
            </div>
            <div className="d-e">
                <button>D</button>
                <button>E</button>
            </div>
        </div>
    )
}

const SearchClass = () => {

    const option = [
        'cedula',
        'materia',
        'salon',
        'semestre',
        'dia'
    ]

    const filter = e =>{
        const select = document.getElementById('filter')
        const input = document.getElementById('buscar')

        console.log( input, select );
    }
    

    return (
        <div className="mentoria">
            <ReturnHome/>
            <h1>Buscar mentoria</h1>
            <div className="search">
                <Select  array={ option } name={'filter'}/>
                <input type="text" placeholder="Buscar" id="buscar"/>
                <BiSearch size={30} className="lupa" onClick={ filter }/>
            </div>
            <button>Clear filter</button>
            <div className="container-class">
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    );
};

export default SearchClass;