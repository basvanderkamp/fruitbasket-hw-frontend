import React from 'react';

function Radio({name, value, id, set}) {

    return (
        <>

            <label htmlFor={id}>{value}
            </label>

            <input
                type="radio"
                name={name}
                value={value}
                id={id}
                onChange={(event) => set(event.target.value)}
            />
            <p></p>
        </>

    )
}
export default Radio