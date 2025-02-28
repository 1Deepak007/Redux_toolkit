import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount, reset } from '../features/counterSlice.js';


const Counter = () => {
    const [amount,setAmount] = useState(0);

    //extract counter value from store
    const count = useSelector((state) => state.counter.value);

    //extract dispatch function from store
    const dispatch = useDispatch();

    function handleIncremet() {
        dispatch(increment())
    }

    function handleDecrement() {
        dispatch(decrement())
    }

    function handleReset() {
        dispatch(reset())
    }

    function handleIncremetByAmount() {
        dispatch(incrementByAmount(amount))
    }

    return (
        <div className="flex flex-col items-center space-y-4 mt-2 mb-2">
            <h2 className='text-2xl font-semibold underline'>Counter</h2>
            <div className="flex items-center space-x-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleDecrement}>-</button>
                <h1 className="text-xl font-semibold">Count: {count}</h1>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleIncremet}>+</button>
            </div>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={handleReset}>Reset</button>
            
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="p-2 border border-gray-300 rounded" />
            <button onClick={handleIncremetByAmount} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Increase by {amount}</button>
        </div>
    )
}

export default Counter
