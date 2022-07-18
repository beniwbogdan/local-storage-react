import React, {useEffect} from 'react';

type CounterType = {
    counter: number
    setCounter: (counter: number) => void
}
const Counter = (props: CounterType) => {

    useEffect(() => {
        let valAsString = localStorage.getItem('counterValue');
        if (valAsString) {
            let newValue = JSON.parse(valAsString);
            props.setCounter(newValue);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(props.counter));
    }, [props.counter])

    return (
        <div>
            {props.counter}<br/>
            <button onClick={() => {
                props.setCounter(props.counter + 1);
            }}>add
            </button>
        </div>
    );
};

export default Counter;