
import BlogList from "./BlogList";
import useFetch from "../Hooks/useFetch";

const ApiCall = () => {

    const{ data:blogs}=useFetch("https://universal-tasker.dedicateddevelopers.us/api/category/trending/list");

    return (
        <>
         {!blogs && <h1> No Data found.</h1>}
         {blogs && <BlogList blogList={blogs} />}
        </>
      );
}
 
export default ApiCall;