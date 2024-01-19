const PostCard = ({ post,handleDelete }) => {
  return (
    <>
     <div className="col-lg-4">
     <div className="blog_card ">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <h6>User Id : {post.userId}</h6>
        <div className="row">
          <div className="col-lg-12 text-end">
            <button
              onClick={() => handleDelete(post.id)}
              className="btn btn-primary"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
     </div>
    </>
  );
};

export default PostCard;
