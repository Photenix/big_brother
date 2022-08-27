import { useDispatch } from 'react-redux';
import { logoutAsync } from '../../redux/actions/actionLogin';
import '../../styles/sass/BigButton.scss'

const HomeRegister = () => {

    const dispatch = useDispatch()

    return (
        <div className='big-button'>
            <button>Crear monitor</button>
            <button>Crear mentoria</button>
            <button>Buscar mentoria</button>
            <button 
                onClick={ () => dispatch( logoutAsync() ) }>SingOut</button>
        </div>
    );
};

export default HomeRegister;