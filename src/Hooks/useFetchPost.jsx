
import { useEffect, useState } from "react";

import axios from 'axios';

// this is a custom hook
const useFetchPost = (url,body) => {
    const [data,setData]=useState(null);
    useEffect(()=>{

        // "https://universal-tasker.dedicateddevelopers.us/api/category/trending/list"

        axios.post(url,body)
        .then( (response)  => {
          // handle success
          setData(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
       
    },[])
    return {data};
}
 
export default useFetchPost;
