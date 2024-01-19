import { useRef } from "react";

export default function Hooks_useRef(){


    // we can use this hooks to focus an input element

    const inputElement=useRef();



    return (
        <>
         <h1>Hook useRef</h1>

        <div className="row">
        <div className="col-lg-6">
          <label htmlFor="username">Enter Your User name </label>
          <input
            name="username"
            className="mt-4"
            ref={inputElement}
            type="text"
            placeholder="john doe"
          />
        </div>
        <div className="col-lg-12 text-center mt-3">
          <button className="btn btn-primary" onClick={()=> inputElement.current.focus()}>Submit</button>
        </div>
        </div>
        </>
    );
}