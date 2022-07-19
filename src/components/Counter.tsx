import React, {useEffect} from 'react';

type CounterType = {
    counter: number
    setCounter: (counter: number) => void
}
const Counter = ({setCounter, counter}: CounterType) => {

    useEffect(() => {
        let valAsString = localStorage.getItem('counterValue');
        if (valAsString) {
            let newValue = JSON.parse(valAsString)
            setCounter(newValue);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(counter));
    }, [counter])

    return (
        <div>
            {counter}<br/>
            <button onClick={() => {
                setCounter(counter + 1);
            }}>add
            </button>
        </div>
    );
};

export default Counter;