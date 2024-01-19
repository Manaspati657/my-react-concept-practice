import { memo } from "react";

const Button = ({handlerClick,text}) => {
    console.log("Button Component- "+text);
    return ( 
        <>
        <button className="btn btn-primary" onClick={handlerClick}>{text}</button>
        </>
     );
}
 
export default memo(Button);