import '../../styles/sass/InputLabel.scss'

const InputLabel = ({ name, type='text', disabled= false, label = name }) => {

    const capitalized = label.charAt(0).toUpperCase() + label.slice(1);

    return(
        <div className='in-la'>
            <label htmlFor={ name }>{ capitalized }</label>
            <input type={type} name={ name } id={ name } disabled={ disabled }/>
        </div>
    )
}

export default InputLabel;