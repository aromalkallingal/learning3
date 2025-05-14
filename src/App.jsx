import { useState } from "react";

export default function App() {

  const [data, setData] = useState([]);
  const loadPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    setData(data);
  };
  return <div>
    <button onClick={loadPosts}>Load</button>
    {data.map((post) => <h1>{post.title}</h1>)}
  </div>
}



