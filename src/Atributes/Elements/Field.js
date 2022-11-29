import React from 'react';

function Field({name, fieldText, id, set}) {

    return (
        <>
            <label>{fieldText}
            </label>

            <input
                type="text"
                id={id}
                name={name}
                onChange={(event) => set(event.target.value)}
            />
            <p></p>
        </>

    )
}
export default Field