import React from 'react';

const Select = ({ array = [], name = 'default' }) => {

    const first = true

    return (
        <select name={ name } id="">
            {
                array.map( e =>{
                    let node
                    
                    if( first ){
                        node = <option value={ e } selected >
                            { e }</option>
                        first = false
                    }else node = <option value={e}>{ e }</option>

                    return node
                })
            }
        </select>
    );
};

export default Select;