import { useEffect, useState } from "react";
import Post from "./components/Post";

export default function App() {

 
  const [posts, setPosts] = useState([]);

    const loadPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    setPosts(data);
  };
  
    useEffect(() => {
      loadPosts();
    }, []);

  return <div>
    {posts.map((post) => <Post title={post.title} body={post.body}/>)}
  </div>
}



