const BlogCard = ({blog,handleDelete}) => {
    // console.log(blog);
    return ( 
        <div className="blog_card" >
            <h3>{blog.category}</h3>
            <p>{blog.description}</p>
            <h6>{blog.total_tasks}</h6>
            <div className="row">
                <div className="col-lg-12 text-end">
                    <button onClick={()=> handleDelete(blog._id)} className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
     );
}
 
export default BlogCard;