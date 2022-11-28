import React from 'react';
import Button from "./Button";


function FruitComponent({fruitText, counter, fruit, increasement, decreasement, btnOne, btnTwo}) {

    return (
        <>
            <p>{fruitText}</p>
            <strong>{counter}{fruit}</strong>
            <Button
                callFunction={increasement}
                >{btnOne}
            </Button>
            <Button
                callFunction={decreasement}
                >{btnTwo}
            </Button>
        </>

    )
}
export default FruitComponent