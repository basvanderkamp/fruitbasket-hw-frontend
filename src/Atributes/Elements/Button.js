import React from 'react';

function Button({terms, callFunction, children}) {

    return (
        <button
            type="button"
            disabled={terms}
            onClick={callFunction}>
            {children}
        </button>

    )
}
export default Button