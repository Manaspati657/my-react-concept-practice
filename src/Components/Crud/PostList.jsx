import { useMemo, useState } from "react";
import PostCard from "./PostCard";
import usePostsApi from "../../Hooks/usePostsApi";

const PostList = ({ postList }) => {
  const [posts, setPosts] = useState([]);

  const { getApi, deleteApi } = usePostsApi(
    "https://jsonplaceholder.typicode.com/posts"
  );

  useMemo(() => {
    setPosts(postList);
  }, [posts]);

  const handleDelete = async (id) => {
    const res = await deleteApi(
      "https://jsonplaceholder.typicode.com/posts/" + id
    );
    const post_data= await getApi("https://jsonplaceholder.typicode.com/posts");
    setPosts(post_data);
    console.log(post_data);
  };

  return (
    <>
      <div className="row">
        {posts.map((data) => {
          return (
            <PostCard key={data.id} post={data} handleDelete={handleDelete} />
          );
        })}
      </div>
    </>
  );
};

export default PostList;
