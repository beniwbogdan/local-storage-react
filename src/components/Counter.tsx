import React from 'react';
type CounterType={
    counter:number
    setCounter:(counter:number)=>void
}
const Counter = (props:CounterType) => {

    const setToLocalStorage=()=>{
        localStorage.setItem('counterValue',JSON.stringify(props.counter));
        //`${props.counter}`
        //-or
        //props.counter.toString()
        //-but prefer ...
        //JSON.stringify(props.counter)
        //overall must be a string
    }
    const getFromLocalStorage=()=>{
         localStorage.getItem('counterValue');

    }

    return (
        <div>
            {props.counter}<br/>
            <button onClick={()=>{
                props.setCounter(props.counter+1);
            }}>add</button>
            <button onClick={setToLocalStorage}>setToLocalStorage</button>
            <button onClick={getFromLocalStorage}>getFromLocalStorage</button>
        </div>
    );
};

export default Counter;