import { useEffect, useState } from "react";

export default function Hooks_useEffect() {

    const [count,setCount]=useState(0);
    const [calculation,setCalculation]=useState(0);

    
    useEffect(() => {
       setCalculation(()=> count*2);
    },[count]);


    return (
        <>
        <h1>useEffect hooks</h1>
        <h5>Count {count}</h5>
        <button onClick={()=>setCount((c)=>c+1)}>+</button>
        <h5>calculation {calculation}</h5>

        </>
    );

}