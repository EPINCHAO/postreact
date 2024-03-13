import axios from "axios";
import { useEffect, useState } from "react";
import PostTable from "./PostTable";

const Posteo = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <div>
      <h2>All Posts</h2>
      <PostTable posts={posts} />
    </div>
  );
};

export default Posteo;
