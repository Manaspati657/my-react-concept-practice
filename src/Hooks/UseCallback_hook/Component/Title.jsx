import { memo } from "react";

const Title = ({title}) => {
    console.log("title component");
    return ( 
        <>
         <h1>useCallBack hooks</h1>
        </>
     );
}
 
export default memo(Title);