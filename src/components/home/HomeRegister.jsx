import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutAsync } from '../../redux/actions/actionLogin';
import '../../styles/sass/BigButton.scss'

const HomeRegister = () => {

    const dispatch = useDispatch()
    const nav = useNavigate()

    return (
        <div className='big-button'>
            <button onClick={ () =>  nav('/create-teacher') }>Crear monitor</button>
            <button onClick={ () =>  nav('/create-class') }>Crear mentoria</button>
            <button onClick={ () =>  nav('/search') } >Buscar mentoria</button>
            <button 
                onClick={ () => {
                        dispatch( logoutAsync() )
                        location.reload();
                    } }>Log Out</button>
        </div>
    );
};

export default HomeRegister;