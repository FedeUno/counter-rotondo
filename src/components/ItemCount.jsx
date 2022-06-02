import React, { useState, useEffect } from 'react';

export const ItemCount = ({initial, stock}) => {

  const [counter, setCounter] = useState(initial);

  const [item, setItem] = useState(0)

  const [max, setMax] = useState(stock)


  useEffect( () => {
    setItem(item);
  }, [item]); 

  
  function add() {
    setMax(max + 1);
  }

  function less() {
    if (max > 0){
      setMax(max - 1)
    }    
  }

  function resetMax() {
    setMax(max * 0);
  }

  function up() {
    setCounter(counter + 1);
  }

  function subtract() {
    if (counter > 1){
      setCounter(counter - 1)
    }    
  }

  function reset() {
    setCounter(counter * 0 + 1 );
  }
  
  function empty() {
    setItem(item * 0 );
  }

  function onAdd() {
    if (max > 0 && (item + counter) <= max){
      setItem(item + counter)
      setCounter(counter * 0 + 1)
    } else {
      alert(`The current stock is: ${max} products`)
    }
  }

  
  return (
    <>
      <div>
        <p>Number of products to add: {counter}</p>
      
        <button onClick={subtract}> - </button>
        <button onClick={reset}> RESET </button>
        <button onClick={up}> + </button>
      </div>
      <br /> 
        <button onClick={onAdd}> Add to cart </button>           
      <br />
      <br />
      <div>
        <p>Total products in cart: {item}</p> 
        <button onClick={empty}> Empty cart </button>
      </div>
      <br />
      <br />
      <div>
        <p>Product stock: {max} </p>       
        <button onClick={less}> - </button>
        <button onClick={resetMax}> RESET </button>
        <button onClick={add}> + </button>
      </div>
      <br />
      <br />

    </>
  );
};
