import { createContext, useContext, useState } from "react";

const userContext=createContext();

export default function Hooks_useContext(){

    const [user,setUser]=useState("manas")

    return (
        <>
          <userContext.Provider value={user}>
            <h1>Hooks userContext</h1>
            <Component1 user={user} />
          </userContext.Provider>
        </>
      );


    // Without user context
    // return(
    //     <>
    //     <h1>Hooks userContext</h1>
    //     <Component1 user={user} />
    //     </>
    // )
}


function Component1(){

    return (
        <>
        <h5>Component 1</h5>
        <Component2 />
        </>
    );
}
function Component2(){

    return (
        <>
        <h5>Component 2</h5>
        <Component3 />
        </>
    );
}
function Component3(){

    const user=useContext(userContext);

    return (
        <>
        <h5>Component 3</h5>
        <h3>User : {user}</h3>
        </>
    );
}



// Without user context 

// function Component1({user}){

//     return (
//         <>
//         <h5>Component 1</h5>
//         <Component2 user={user}/>
//         </>
//     );
// }
// function Component2({user}){

//     return (
//         <>
//         <h5>Component 2</h5>
//         <Component3 user={user} />
//         </>
//     );
// }
// function Component3({user}){

//     return (
//         <>
//         <h5>Component 3</h5>
//         <h3>User : {user}</h3>
//         </>
//     );
// }
