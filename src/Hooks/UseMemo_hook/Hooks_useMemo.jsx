import { useMemo, useState } from "react";

const Hooks_useMemo = () => {

   const [count1,setCount1]=useState(0)
   const [count2,setCount2]=useState(0)


   const incrementCount1= ()=>{
    setCount1(count1+1);
   }

   const incrementCount2= ()=>{
    setCount2(count2+1);
   }

   

   const isEven = useMemo(() =>{
      let i = 0;
      while(i<8000) {
        console.log(i);
        i++;
      }
      return count1 % 2 == 0;
     },[count1]);


    return ( 
        <>
        <h1>Hooks useMemo</h1>
        <span>{isEven ? "Even":"Odd"}</span>
        <button onClick={incrementCount1}>count 1 : {count1}</button>
        <button onClick={incrementCount2}>count 2 : {count2}</button>

        </>
     );
}
 
export default Hooks_useMemo;