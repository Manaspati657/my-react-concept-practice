import { useEffect, useMemo, useState } from "react";
import PostList from "./PostList";
import usePostsApi from "../../Hooks/usePostsApi";

const Posts = () => {

    const {data} = usePostsApi("https://jsonplaceholder.typicode.com/posts");

    return ( 
        <>
         <h1>Post crud</h1>
         {data && <PostList postList={data} />}
        </>
     );
}
 
export default Posts;