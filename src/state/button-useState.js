import React, {useState} from 'react';

// function setCouter(number) {
//
// }

const ButtonState = ({text}) => {
    const [counter, setCounter] = useState(0);
    const handleClick = () => setCounter(counter => counter + 1);
    return <button onClick={handleClick}>
        {text} {counter}
    </button>
}

export default ButtonState;

