
import { useEffect, useState } from "react";

import axios from 'axios';

// this is a custom hook
const usePostsApi = (url) => {


    const [data,setData]=useState(null);
    

    useEffect(()=>{
      axios.get(url)
      .then( (response)  => {
        // handle success
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    },[]);



    const getApi = async () =>{
      axios.get(url)
      .then( (response)  => {
        // handle success
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
     return data;
    }

    const deleteApi = (url) =>{
      axios.delete(url)
        .then( (response)  => {
          // handle success;
          setData(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }

    return {data,getApi,deleteApi};
}
 
export default usePostsApi;
