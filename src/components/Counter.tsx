import React from 'react';

type CounterType = {
    counter: number
    setCounter: (counter: number) => void
}
const Counter = (props: CounterType) => {

    const setToLocalStorage = () => {
        localStorage.setItem('counterValue', JSON.stringify(props.counter));
        localStorage.setItem('counterValue+1', JSON.stringify(props.counter+1));

        //`${props.counter}`
        //-or
        //props.counter.toString()
        //-but prefer ...
        //JSON.stringify(props.counter)
        //overall must be a string
    }
    const getFromLocalStorage = () => {
        let valAsString = localStorage.getItem('counterValue');
        if(valAsString){
            let newValue = JSON.parse(valAsString);
            props.setCounter(newValue)
        }

    }
    const clearLocalStorage = () => {
        localStorage.clear();
        props.setCounter(0);
    }
    const removeLocalStorage = () => {
        localStorage.removeItem('counterValue+1');
    }

    return (
        <div>
            {props.counter}<br/>
            <button onClick={() => {
                props.setCounter(props.counter + 1);

            }}>add
            </button>
            <button onClick={setToLocalStorage}>setToLocalStorage</button>
            <button onClick={getFromLocalStorage}>getFromLocalStorage</button>
            <button onClick={clearLocalStorage}>clearLocalStorage</button>
            <button onClick={removeLocalStorage}>removeLocalStorage</button>
        </div>
    );
};

export default Counter;