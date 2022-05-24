import React from 'react';

function Keypad() {

    function handleInput() {
        console.log('Entering password...')
    }

    return <input type="password" onChange={handleInput}></input>
}

export default Keypad