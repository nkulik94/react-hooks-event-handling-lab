import React from 'react';

function EyesOnMe() {

    function handleEvent(e) {
        e._reactName === 'onFocus' ? console.log('Good!') : console.log('Hey! Eyes on me!')
    }

    return <button onFocus={handleEvent} onBlur={handleEvent}>Eyes on me</button>
}

export default EyesOnMe