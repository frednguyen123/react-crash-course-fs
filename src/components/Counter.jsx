import React, { useState } from 'react';

const Counter = () => {

    const[arr, setArr] = useState([]);

    function addPlus() {
        setArr(prevArr => [...prevArr, "+"])
    }

    function addMinus(){
        setArr(prevArr => [...prevArr, "-"])
    }
    return (
        <div>
            <button onClick={addMinus}>-</button>
            <button onClick={addPlus}>+</button>
            {arr.toString()}
        </div> 
    );

    // OBJECT CART EXAMPLE
    // const[cart, setCart] = useState({
    //     item: "apple",
    //     quantity: 0,
    // });

    // function addApple() {
    //     // 1. Use a callback to get the previous value
    //     // 2. Spread out all the properties of the prev state
    //     // 3. Only change the property that you need to change.
    //     setCart(prevCart => ({
    //         ...prevCart,
    //         quantity: prevCart.quantity + 1,
    //     }))
    // }

    // function removeApple(){
    //     setCart(prevCart => ({
    //         ...prevCart,
    //         quantity: prevCart.quantity - 1,
    //     }))
    // }
    // return (
    //     <div>
    //         <button onClick={removeApple}>-</button>
    //         {cart.quantity}
    //         {cart.item}
    //         <button onClick={addApple}>+</button>
    //     </div> 
    // );

    // COUNTER EXAMPLE
    // const[counter, setCounter] = useState(0)
    // function incrementCounter() {
    //     setCounter((prevCounter) => prevCounter + 1)
    //     setCounter((prevCounter) => prevCounter + 1)
    // }

    // function decrementCounter(){
    //     setCounter((prevCounter) => prevCounter - 1)
    //     setCounter((prevCounter) => prevCounter - 1)
    // }
    // return (
    //     <div>
    //         <button onClick={decrementCounter}>-</button>
    //         <h1>{counter}</h1>
    //         <button onClick={incrementCounter}>+</button>
    //     </div> 
    // );
    

}
export default Counter;
