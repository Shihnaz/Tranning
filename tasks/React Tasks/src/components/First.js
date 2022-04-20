
import React, { useState, useEffect } from 'react';
 
 export const Great=(prp)=>{
    return (
<div>
<h1> hello   {prp.name} ,{prp.lastname}</h1>
{prp.children}
</div>
    )
  
}

export const Message=(prp)=>{
    const[message,setMessage]=useState("welcome visitor");
    return (
<div>
<h1> {message}</h1>
<button onClick={()=>{
    setMessage("Thank you for subscribing");
}}>Subscribe </button>
</div>
    )
  
}
    export function Car() {
    const [car, setCar] = useState({
      brand: "Ford",
      model: "Mustang",
      year: "1964",
      color: "red"
    });

  
    const updateColor = () => {
      setCar(previousState => {
        return { ...previousState, color: "blue" }
      });
    }
    return(
        <div>
         <p> the values before updates are  {car.brand},{car.color},{car.model} </p>
            <button onClick={updateColor}>
                see updates
            </button>
            <p> the values After updates are  {car.brand},{car.color},{car.model} </p>
        </div>
    )
}  


 export function Example() {
    const [count, setCount] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      // Update the document title using the browser API
      document.title = `You clicked ${count} times`;
    });
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }
  