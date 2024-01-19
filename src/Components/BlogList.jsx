import { useEffect, useState } from "react";
import BlogCard from "./Shared/BlogCard";




export default function BlogList ({blogList}){

  const [blogs,setBlogs]=useState(blogList);

  const handleDelete = (id) =>{
    const newList=blogs.filter((data)=> data._id != id);
    setBlogs(newList);
  }


  return (
    <>
    <h1>Blog Articles</h1>

    {blogs.map((blog)=>{
      return <BlogCard key={blog._id} blog={blog} handleDelete={handleDelete}/>
    })}

    </>
  );
};
