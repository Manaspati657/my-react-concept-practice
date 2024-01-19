
import { useEffect, useState } from "react";

import axios from 'axios';

// this is a custom hook
const useFetch = (url) => {


    const [data,setData]=useState(null);

    useEffect(()=>{

        // "https://universal-tasker.dedicateddevelopers.us/api/category/trending/list"

        axios.get(url)
        .then( (response)  => {
          // handle success
          console.log(response.data.data.splice(0,10));

          setData(response.data.data.splice(0,10));
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
       
    },[])



    return {data};
}
 
export default useFetch;
