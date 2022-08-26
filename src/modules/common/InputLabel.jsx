import '../../styles/sass/InputLabel.scss'

const InputLabel = ({ name, type='text'}) => {

    const capitalized = name.charAt(0).toUpperCase() + name.slice(1);

    return(
        <div className='in-la'>
            <label htmlFor={ name }>{ capitalized }</label>
            <input type={type} name={ name } id={ name } />
        </div>
    )
}

export default InputLabel;